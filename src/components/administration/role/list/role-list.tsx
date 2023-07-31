import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ROUTE_URL } from "../../../auth/constants/routes.const";
import { AppState } from "../../../../store/reducers/root.reducer";
import { IRoleModel } from "../../../../interfaces/role.model";
import { deleteRoleRequest } from "../../store/actions/roles.action";
import "./role-list.scss";

const RoleListApp = () => {
  const roles = useSelector((x: AppState) => x.administration.roles);
  const dispatch = useDispatch();

  const deleteRole = (id: string) => {
    dispatch(deleteRoleRequest(id));
  };

  return (
    <div className="role-list-app">
      <ul className=" justify-content list-group list-group-flush">
        {Array.isArray(roles.result)
          ? roles.result?.map((role: IRoleModel) => {
              return (
                <li className="list-group-item" key={role.id}>
                  <div className="d-flex">
                    {role.name}
                    <div className="float-right">
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
                    </div>
                  </div>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default RoleListApp;
