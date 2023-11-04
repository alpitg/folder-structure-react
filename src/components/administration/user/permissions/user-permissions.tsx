import "./user-permissions.scss";
import React from "react";
import { useEffect, useState } from "react";
import PermissionsApp from "../../permissions/permissions";
import { Card } from "primereact/card";
import SaveLoaderButtonApp from "../../../ui/save-loader-button/save-loader-button";
import { Link, useParams } from "react-router-dom";
import { ROUTE_URL } from "../../../auth/constants/routes.const";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserRequest,
  updateUserClaimRequest,
} from "../../store/actions/user.action";
import { AppState } from "../../../../store/reducers/root.reducer";
import {
  IUserClaimsModel,
  UserFormModel,
} from "../../../../interfaces/user.model";

const UserPermissionsApp = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const userUpdate = useSelector(
    (x: AppState) => x.administration.users.update
  );
  const pages = useSelector((x: AppState) => x.pages.result);
  const pageActions = useSelector((x: AppState) => x.actions.result);

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [permissionList, setPermissionList] = useState<any[]>([]);
  const [selectedPermissionList, setSelectedPermissionList] = useState<any[]>(
    []
  );

  const [userDetail, setUserDetail] = useState<UserFormModel>(
    new UserFormModel()
  );

  //#region methods
  useEffect(() => {
    if (id) {
      dispatch(fetchUserRequest(id));
    }
    setPermissionList(preparePermissionData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (userUpdate?.result) {
      setUserDetail((prev) => ({
        ...prev,
        ...userUpdate?.result,
      }));

      if (userUpdate?.result?.userClaims) {
        setSelectedPermissionList(
          userUpdate?.result?.userClaims?.map((x) => x.actionId)
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userUpdate?.result]);

  const postUpdateUserDetail = () => {
    const userDetailPostData: any = {
      id: userDetail?.id,
      userClaims: userDetail?.userClaims?.map((x) => {
        return {
          actionId: x?.actionId,
          claimType: x?.claimType,
          claimValue: x.claimValue,
          userId: x?.userId,
        } as IUserClaimsModel;
      }),
    };

    console.log(userDetailPostData);
    dispatch(updateUserClaimRequest(userDetailPostData));
  };

  /**
   * NOTE: Prepate data for permissions
   * @returns permission tree
   */
  const preparePermissionData = () => {
    const permissions: any[] = [];
    if (pages?.length) {
      pages.forEach((page) => {
        permissions.push({
          ...page,
          label: page.name,
          value: page.id,
          children: pageActions
            ?.filter((x) => x.pageId === page.id)
            ?.map((pageAction) => {
              return {
                ...pageAction,
                label: pageAction.name,
                value: pageAction.id,
                children: null,
              };
            }),
        });
      });
    }
    return permissions;
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    postUpdateUserDetail();
    setIsSubmitted(true);
  };

  const onSelectionChange = (selectedNodes: any[]) => {
    setSelectedPermissionList(selectedNodes);

    // NOTE: Prepare POST data
    setUserDetail((prev) => ({
      ...prev,
      userClaims: selectedNodes.map((x) => {
        const claim = pageActions?.find((action) => action.id === x);
        return {
          actionId: claim?.id,
          claimType: claim?.code,
          claimValue: "",
          userId: userDetail?.id,
        } as IUserClaimsModel;
      }),
    }));
  };
  //#endregion

  return (
    <div className="user-permissions-app">
      {permissionList && permissionList?.length > 0 && (
        <Card
          title={
            <>
              <Link to={`${ROUTE_URL.ADMIN.USER.BASE}`}>
                <span className="icon" title="Navigate Back">
                  <i className="pi pi-fw pi-arrow-left"></i>
                </span>
              </Link>
              <span className="p-2">User permissions</span>
            </>
          }
        >
          <form onSubmit={onSubmit} noValidate>
            <div className="row">
              <div className="col-sm-12">
                <PermissionsApp
                  nodes={permissionList}
                  selectedNodes={selectedPermissionList}
                  onSelectionChange={onSelectionChange}
                />
              </div>
              <div className="col-sm-12">
                <div className="float-end">
                  <SaveLoaderButtonApp
                    type="submit"
                    label={"Save"}
                    icon="pi pi-save"
                    size="small"
                    disabled={userUpdate?.pending}
                    enableLoader={userUpdate?.pending}
                  />
                </div>
              </div>
            </div>
          </form>
        </Card>
      )}
    </div>
  );
};

export default UserPermissionsApp;
