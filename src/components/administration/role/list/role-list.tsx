import "./role-list.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { AppState } from "../../../../store/reducers/root.reducer";
import { IRoleModel } from "../../../../interfaces/role.model";
import RoleItemApp from "./item/role-item";
import NoRecordApp from "../../../ui/no-record/no-record";
import HeaderInlineTextApp from "../../../ui/header-inline-text/header-inline-text";
import { ROUTE_URL } from "../../../auth/constants/routes.const";
import {
  fetchRolesRequest,
  resetDeleteRole,
} from "../../store/actions/role.action";
import MessagesApp from "../../../ui/messages/messages";
import { hasClaim } from "../../../../utils/auth.util";
import { LOADING } from "../../../../constants/global-contants/global-key.const";
import { ROLES_ADD_ROLE } from "../../../../constants/global-contants/claims.const";
import { ROLE_SUB_TITLE, ROLE_TITLE } from "../role.const";

const RoleListApp = () => {
  const roles = useSelector((x: AppState) => x.administration.roles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRolesRequest());
  }, []);

  const closeError = () => {
    dispatch(resetDeleteRole());
  };

  return (
    <div className="role-list-app">
      <>
        <div className="row">
          <div className="col-sm-12">
            <HeaderInlineTextApp
              title={ROLE_TITLE}
              subTitle={ROLE_SUB_TITLE}
              children={
                <>
                  {hasClaim([ROLES_ADD_ROLE]) && (
                    <Link to={`${ROUTE_URL.ADMIN.ROLE.ADD}`}>
                      <Button
                        className=" float-end"
                        label="Create new role"
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
        <Card title="Roles">
          {roles?.delete?.error &&
            roles?.delete?.error?.map((error: string) => (
              <MessagesApp
                type="alert-danger"
                message={error}
                close={closeError}
                key={error}
              />
            ))}
          {roles?.list.pending && LOADING}
          <div className="table-responsive">
            <table className="table">
              <tbody>
                {roles?.list?.result?.map((role: IRoleModel) => {
                  return <RoleItemApp role={role} key={role.id} />;
                })}
              </tbody>
            </table>
            {roles?.list?.result?.length === 0 && <NoRecordApp />}
          </div>
        </Card>
      </>
    </div>
  );
};

export default RoleListApp;
