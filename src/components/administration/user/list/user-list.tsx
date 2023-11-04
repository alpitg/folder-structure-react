import "./user-list.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { AppState } from "../../../../store/reducers/root.reducer";
import {
  UserModel,
  IUsersRequestModel,
} from "../../../../interfaces/user.model";
import HeaderInlineTextApp from "../../../ui/header-inline-text/header-inline-text";
import { ROUTE_URL } from "../../../auth/constants/routes.const";
import NoRecordApp from "../../../ui/no-record/no-record";
import UserOverviewApp from "./overview/user-overview";
import UserListItemApp from "./list-item/user-list-item";
import MessagesApp from "../../../ui/messages/messages";
import {
  fetchUsersRequest,
  resetDeleteUser,
} from "../../store/actions/user.action";
import { useEffect, useState } from "react";
import { hasClaim } from "../../../../utils/auth.util";
import { LOADING } from "../../../../constants/global-contants/global-key.const";
import { USR_ADD_USER } from "../../../../constants/global-contants/claims.const";
import { USER_TITLE, USER_SUB_TITLE } from "../user.const";

const UserListApp = () => {
  const users = useSelector((x: AppState) => x.administration.users);
  const { globalSelectedTenant } = useSelector(
    (x: AppState) => x.administration.tenants
  );
  const dispatch = useDispatch();
  const [filter, setFilter] = useState<IUsersRequestModel>({
    tenantId: globalSelectedTenant,
    name: "",
    Fields: "",
    OrderBy: "",
    PageSize: 10,
    Skip: 0,
    SearchQuery: "",
  });

  useEffect(() => {
    setFilter((prev) => ({
      ...prev,
      tenantId: globalSelectedTenant,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalSelectedTenant]);

  useEffect(() => {
    dispatch(fetchUsersRequest(filter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter.tenantId]);

  const closeError = () => {
    dispatch(resetDeleteUser());
  };

  return (
    <div className="user-list-app">
      <div className="row">
        <div className="col-sm-12">
          <HeaderInlineTextApp
            title={USER_TITLE}
            subTitle={USER_SUB_TITLE}
            children={
              <>
                {hasClaim([USR_ADD_USER]) && (
                  <Link to={`${ROUTE_URL.ADMIN.USER.ADD}`}>
                    <Button
                      className=" float-end"
                      label="Create new user"
                      icon="pi pi-plus"
                      size="small"
                    />
                  </Link>
                )}
              </>
            }
          />
        </div>
      </div>

      {
        !users?.list?.result?.length ? <NoRecordApp /> :

          <Card title={USER_TITLE}>
            <>
              <div className="container">
                {users?.delete?.error &&
                  users?.delete?.error?.map((error: string) => (
                    <MessagesApp
                      type="alert-danger"
                      message={error}
                      close={closeError}
                      key={error}
                    />
                  ))}

                {users?.list.pending && LOADING}
                <div className="row">
                  <div className="col-12">
                    <UserOverviewApp
                      filter={filter}
                      total={users?.list?.result?.length}
                    />
                    <div className="list-view">
                      <div className="table-responsive">
                        <table className="table">
                          <tbody>
                            {Array.isArray(users?.list?.result)
                              ? users?.list?.result?.map((user: UserModel) => {
                                return (
                                  <UserListItemApp user={user} key={user.id} />
                                );
                              })
                              : null}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </Card>
      }
    </div>
  );
};

export default UserListApp;
