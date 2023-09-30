import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { Card } from "primereact/card";
import { TabView, TabPanel } from "primereact/tabview";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { AppState } from "../../../../store/reducers/root.reducer";
import {
  IRoleClaimsModel,
  IRoleFormModel,
  IRoleModel,
} from "../../../../interfaces/role.model";
import {
  fetchRoleRequest,
  resetDeleteRole,
  resetUpdateRole,
  updateRolesRequest,
} from "../../store/actions/role.action";
import { ROUTE_URL } from "../../../auth/constants/routes.const";
import SaveLoaderButtonApp from "../../../ui/save-loader-button/save-loader-button";
import MessagesApp from "../../../ui/messages/messages";
import PermissionsApp from "../../permissions/permissions";
import { Badge } from "primereact/badge";
import { LOADING } from "../../../../constants/global-contants/global-key.const";

const RoleEditApp = () => {
  //#region variables
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const roleUpdate = useSelector(
    (x: AppState) => x.administration.roles.update
  );
  const pages = useSelector((x: AppState) => x.pages.result);
  const pageActions = useSelector((x: AppState) => x.actions.result);

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [permissionList, setPermissionList] = useState<any[]>([]);
  const [selectedPermissionList, setSelectedPermissionList] = useState<any[]>(
    []
  );

  const [roleDetail, setRoleDetail] = useState<IRoleFormModel>({
    id: "",
    name: "",
    createdDate: "",
    isDefault: false,
    roleClaims: [],
    isError: {
      name: "",
    },
    fieldName: {
      name: "name",
      isDefault: "isDefault",
    },
  });
  const { isError, fieldName } = roleDetail;

  //#endregion

  //#region Methods

  useEffect(() => {
    if (id) {
      dispatch(fetchRoleRequest(id));
    }
    setPermissionList(preparePermissionData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(resetUpdateRole());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // NOTE: Use this only for Navigation once form submitted
  useEffect(() => {
    if (!roleUpdate?.pending && !roleUpdate?.error?.length && isSubmitted) {
      navigate(ROUTE_URL.ADMIN.ROLE.BASE);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roleUpdate?.pending]);

  useEffect(() => {
    if (roleUpdate?.result) {
      setRoleDetail((prev) => ({
        ...prev,
        ...roleUpdate?.result,
      }));

      setSelectedPermissionList(
        roleUpdate?.result?.roleClaims?.map((x) => x.actionId)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roleUpdate?.result]);

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

  // NOTE: Handle Add/Update both
  const postUpdateRoleDetail = () => {
    let roleDetailPostData: IRoleModel;
    if (id) {
      // NOTE: Update model
      roleDetailPostData = {
        id: roleDetail.id,
        name: roleDetail.name,
        createdDate: roleDetail.createdDate,
        isDefault: roleDetail.isDefault,
        roleClaims: roleDetail.roleClaims,
      };
    } else {
      // NOTE: Add model
      roleDetailPostData = {
        name: roleDetail.name,
        roleClaims: roleDetail.roleClaims.map((x) => {
          return {
            actionId: x.actionId,
            claimType: x.claimType,
            claimValue: x.claimValue,
          } as IRoleClaimsModel;
        }),
        userRoles: [],
      };
    }
    dispatch(updateRolesRequest(roleDetailPostData));
  };

  const closeError = () => {
    dispatch(resetDeleteRole());
  };

  const onSelectionChange = (selectedNodes: any[]) => {
    setSelectedPermissionList(selectedNodes);

    // NOTE: Prepare POST data
    setRoleDetail((prev) => ({
      ...prev,
      roleClaims: selectedNodes.map((x) => {
        return {
          actionId: pageActions?.find((action) => action.id === x)?.id,
          claimType: pageActions?.find((action) => action.id === x)?.code,
          claimValue: "",
          roleId: roleDetail?.id,
        } as IRoleClaimsModel;
      }),
    }));
  };

  //#region Form operation
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (formValid()) {
      postUpdateRoleDetail();
    }
    setIsSubmitted(true);
  };

  //#region - Validion rules
  /**
   * NOTE: Role name validation
   */
  const roleNameIsValid = (roleName: string) => {
    if (roleName.length < 3 || roleName.length === 0) {
      return { isValid: false, errorMsg: "Atleast 3 characaters required" };
    } else {
      return { isValid: true, errorMsg: "" };
    }
  };
  //#endregion

  const formValid = () => {
    let isValid = false;
    Object.values(roleDetail?.isError).forEach((val: string) => {
      if (val.length > 0) {
        isValid = false;
      } else {
        isValid = true;
      }
    });

    // NOTE: Add further validations here as AND condition
    if (roleNameIsValid(roleDetail.name).isValid) {
      isValid = true;
    } else {
      isValid = false;
    }

    return isValid;
  };

  const formValChange = (field: string, value: any) => {
    let errorMsg = "";
    switch (field) {
      case fieldName?.name:
        errorMsg = roleNameIsValid(value).errorMsg;
        setRoleDetail((prev: IRoleFormModel) => ({
          ...prev,
          name: value,
          isError: {
            name: errorMsg,
          },
        }));
        break;
      case fieldName?.isDefault:
        setRoleDetail((prev: IRoleFormModel) => ({
          ...prev,
          isDefault: value,
        }));
        break;
      default:
        break;
    }
  };

  const onFormValChange = (e: any) => {
    let field: string = "";
    let value: any;
    if (e?.target && e?.target?.type === "checkbox") {
      field = e?.target?.name;
      value = e?.target?.checked;
    } else {
      field = e?.currentTarget?.id;
      value = e?.currentTarget?.value;
    }

    formValChange(field, value);
  };

  //#endregion

  //#endregion

  return (
    <div className="role-list-app">
      {roleUpdate.pending && !isSubmitted ? (
        LOADING
      ) : (
        <Card
          title={
            <>
              <Link to={`${ROUTE_URL.ADMIN.ROLE.BASE}`}>
                <span className="icon" title="Navigate Back">
                  <i className="pi pi-fw pi-arrow-left"></i>
                </span>
              </Link>
              <span className="p-2">
                {id ? "Edit Role: " + roleDetail?.name : "Create new role"}
              </span>
            </>
          }
        >
          <>
            <form onSubmit={onSubmit} noValidate>
              <TabView>
                <TabPanel header="Role" leftIcon="pi pi-fw pi-briefcase me-2">
                  {roleUpdate?.error &&
                    roleUpdate?.error?.map((error: string) => (
                      <MessagesApp
                        type="alert-danger"
                        message={error}
                        close={closeError}
                        key={error}
                      />
                    ))}

                  <div className="m-0 mt-3">
                    <div className="row">
                      <div className="col-sm-12">
                        <div
                          className={
                            "d-flex flex-column gap-2 " + fieldName?.name
                          }
                        >
                          <label
                            htmlFor={fieldName?.name}
                            className={
                              isError.name.length > 0
                                ? "is-invalid p-error"
                                : ""
                            }
                          >
                            Role name *
                          </label>
                          <InputText
                            id={fieldName?.name}
                            value={roleDetail?.name ?? ""}
                            onChange={onFormValChange}
                            className={
                              isError.name.length > 0 ? "p-invalid" : ""
                            }
                            required
                          />
                          <small className="p-error">{isError.name}</small>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="mt-3 mb-3">
                        <Checkbox
                          inputId={fieldName?.isDefault}
                          name={fieldName?.isDefault}
                          value={roleDetail.isDefault}
                          onChange={onFormValChange}
                          checked={roleDetail.isDefault}
                        ></Checkbox>
                        <label htmlFor={fieldName?.isDefault} className="ms-2">
                          <figcaption>
                            Default
                            <span className="inline-sub-title ms-2">
                              Assign to new users by default.
                            </span>
                          </figcaption>
                        </label>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel
                  leftIcon="pi pi-user me-2"
                  header="Permissions"
                  rightIcon={
                    <>
                      <Badge value={roleDetail?.roleClaims?.length}></Badge>
                    </>
                  }
                >
                  <PermissionsApp
                    nodes={permissionList}
                    selectedNodes={selectedPermissionList}
                    onSelectionChange={onSelectionChange}
                  />
                </TabPanel>
              </TabView>

              <div className="role-edit-footer float-end">
                <SaveLoaderButtonApp
                  type="submit"
                  label={"Save"}
                  icon="pi pi-save"
                  size="small"
                  disabled={!formValid() || roleUpdate.pending}
                  enableLoader={roleUpdate.pending}
                />
              </div>
            </form>
          </>
          <br />
        </Card>
      )}
    </div>
  );
};

export default RoleEditApp;
