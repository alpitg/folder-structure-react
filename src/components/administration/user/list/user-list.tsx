import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { AppState } from "../../../../store/reducers/root.reducer";
import { IUserModel } from "../../../../interfaces/user.model";
import HeaderInlineTextApp from "../../../ui/header-inline-text/header-inline-text";
import { ROUTE_URL } from "../../../auth/constants/routes.const";
import NoRecordApp from "../../../ui/no-record/no-record";
import UserOverviewApp from "./overview/user-overview";
import UserListItemApp from "./list-item/user-list-item";
import "./user-list.scss";

const UserListApp = () => {
  const users = useSelector((x: AppState) => x.administration.users);

  return (
    <div className="user-list-app">
      <div className="row">
        <div className="col-sm-12">
          <HeaderInlineTextApp
            title="Users"
            subTitle="Manage users and permissions."
            children={
              <>
                <Link to={`${ROUTE_URL.ADMIN.USER.USER_DETAIL_ADD}`}>
                  <Button
                    className=" float-end"
                    label="Create new user"
                    icon="pi pi-plus"
                    size="small"
                  />
                </Link>
              </>
            }
          />
        </div>
      </div>
      <Card title={(users?.list?.result?.totalCount ?? 0) + " Users"}>
        <>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <UserOverviewApp />
                <div className="list-view">
                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        {Array.isArray(users?.list?.result?.items)
                          ? users?.list?.result?.items?.map(
                              (user: IUserModel) => {
                                return (
                                  <UserListItemApp user={user} key={user.id} />
                                );
                              }
                            )
                          : null}
                      </tbody>
                    </table>

                    {users?.list?.result?.items?.length === 0 && (
                      <NoRecordApp />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </Card>
    </div>
  );
};

export default UserListApp;
