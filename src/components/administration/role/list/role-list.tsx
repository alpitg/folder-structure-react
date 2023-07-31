import { useSelector } from "react-redux";
import { Card } from "primereact/card";
import { AppState } from "../../../../store/reducers/root.reducer";
import { IRoleModel } from "../../../../interfaces/role.model";
import RoleItemApp from "./item/role-item";
import "./role-list.scss";

const RoleListApp = () => {
  const roles = useSelector((x: AppState) => x.administration.roles);

  return (
    <div className="role-list-app">
      <>
        <div className="role-item-app">
          <Card title="Roles">
            <ul className="list-unstyled team-members m-0">
              {roles?.result?.map((role: IRoleModel) => {
                return (
                  <li>
                    <RoleItemApp role={role} />
                  </li>
                );
              })}
            </ul>
          </Card>
        </div>
      </>
    </div>
  );
};

export default RoleListApp;
