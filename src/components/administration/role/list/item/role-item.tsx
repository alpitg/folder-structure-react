import "./role-item.scss";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IRoleModel } from "../../../../../interfaces/role.model";
import { ROUTE_URL } from "../../../../auth/constants/routes.const";
import { deleteRoleRequest } from "../../../store/actions/role.action";
import { hasClaim } from "../../../../../utils/auth.util";
import {
  ROLES_ADD_ROLE,
  ROLES_UPDATE_ROLE,
  ROLES_DELETE_ROLE,
} from "../../../../../constants/global-contants/claims.const";

const RoleItemApp = (props: { role: IRoleModel }) => {
  const dispatch = useDispatch();

  const deleteRole = (id: string = "") => {
    dispatch(deleteRoleRequest(id));
  };

  return (
    <>
      <tr key={props?.role.id} className="user-list-item-app">
        <td>
          <span className="me-2" title="User role">
            {props?.role?.name}
          </span>
          {props?.role?.isDefault && (
            <span className={"badge rounded-pill bg-success"}>Default</span>
          )}
        </td>
        <td>
          <div className="d-flex">
            {hasClaim([ROLES_ADD_ROLE, ROLES_UPDATE_ROLE]) && (
              <Link to={`${ROUTE_URL.ADMIN.ROLE.BASE}/edit/${props?.role?.id}`}>
                <span className="icon" title="Edit">
                  <i className="pi grey pi-fw pi-pencil"></i>
                </span>
              </Link>
            )}
            {hasClaim([ROLES_DELETE_ROLE, ROLES_UPDATE_ROLE]) && (
              <span
                className="icon cursor-pointer"
                title="Delete"
                onClick={() => deleteRole(props?.role?.id)}
              >
                <i className="pi grey pi-fw pi-times"></i>
              </span>
            )}
          </div>
        </td>
      </tr>
    </>
  );
};

export default RoleItemApp;
