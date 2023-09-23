import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { AppState } from "../../../../store/reducers/root.reducer";
import { IRoleModel } from "../../../../interfaces/role.model";
import RoleItemApp from "./item/role-item";
import NoRecordApp from "../../../ui/no-record/no-record";
import HeaderInlineTextApp from "../../../ui/header-inline-text/header-inline-text";
import { ROUTE_URL } from "../../../auth/constants/routes.const";
import "./role-list.scss";

const RoleListApp = () => {
  const roles = useSelector((x: AppState) => x.administration.roles);

  return (
    <div className="role-list-app">
      <>
        <div className="row">
          <div className="col-sm-12">
            <HeaderInlineTextApp
              title="Roles"
              subTitle="Use roles to group permissions."
              children={
                <>
                  <Link to={`${ROUTE_URL.ADMIN.ROLE.ROLE_DETAIL_ADD}`}>
                    <Button
                      className=" float-end"
                      label="Create new role"
                      icon="pi pi-plus"
                      size="small"
                    />
                  </Link>
                </>
              }
            />
          </div>
        </div>
        <Card title="Roles">
          <ul className="list-unstyled team-members m-0">
            {roles?.list?.result?.map((role: IRoleModel) => {
              return (
                <li key={role.id}>
                  <RoleItemApp role={role} />
                </li>
              );
            })}
          </ul>
          {roles?.list?.result?.length === 0 && <NoRecordApp />}
        </Card>
      </>
    </div>
  );
};

export default RoleListApp;
