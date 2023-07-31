import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ROUTE_URL } from "../../../auth/constants/routes.const";
import { AppState } from "../../../../store/reducers/root.reducer";
import { IRoleModel } from "../../../../interfaces/role.model";
import { deleteRoleRequest } from "../../store/actions/roles.action";
import "./role-list.scss";
import { Card } from "primereact/card";
import RoleItemApp from "./role-item/role-item";

const RoleListApp = () => {
  const roles = useSelector((x: AppState) => x.administration.roles);
  const dispatch = useDispatch();

  const deleteRole = (id: string) => {
    dispatch(deleteRoleRequest(id));
  };

  return (
    <div className="role-list-app">
      <>
        <div className="role-item-app">
          <Card title="Roles">
            <ul className="list-unstyled team-members m-0">
              {roles?.result?.map((role: IRoleModel) => {
                return (
                  <li>
                    <RoleItemApp role={role}>
                      <>
                        <Link to={`${ROUTE_URL.ROLES}/${role.id}`}>
                          <span className="icon" title="View">
                            <i className="pi pi-fw pi-eye"></i>
                          </span>
                        </Link>
                        <Link to={`${ROUTE_URL.ROLES}/edit/${role.id}`}>
                          <span className="icon" title="Edit">
                            <i className="pi pi-fw pi-pencil"></i>
                          </span>
                        </Link>
                        <span
                          className="icon"
                          title="Delete"
                          onClick={() => deleteRole(role.id)}
                        >
                          <i className="pi pi-fw pi-times"></i>
                        </span>
                      </>
                    </RoleItemApp>
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
