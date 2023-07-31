import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IRoleModel } from "../../../../../interfaces/role.model";
import { ROUTE_URL } from "../../../../auth/constants/routes.const";
import { deleteRoleRequest } from "../../../store/actions/roles.action";
import "./role-item.scss";

const RoleItemApp = (props: { role: IRoleModel }) => {
  const dispatch = useDispatch();

  const deleteRole = (id: string) => {
    dispatch(deleteRoleRequest(id));
  };

  return (
    <>
      <div className="row pb-3">
        <div className="col-2 col-md-2">
          <div className="avatar">
            <img
              alt="..."
              className="img-circle img-no-padding img-responsive"
              src="/static/media/img/faces/ayo-ogunseinde-2.jpg"
            />
          </div>
        </div>
        <div className="col-7 col-md-7">
          {props?.role?.name} <br />
          <span className="text-muted">
            <small>Offline</small>
          </span>
          <span className="text-success">
            <small> | Available</small>
          </span>
          <span className="text-danger">
            <small> | Busy</small>
          </span>
        </div>
        <div className="col-3 col-md-3">
          <>
            <Link to={`${ROUTE_URL.ROLES}/${props?.role?.id}`}>
              <span className="icon" title="View">
                <i className="pi pi-fw pi-eye"></i>
              </span>
            </Link>
            <Link to={`${ROUTE_URL.ROLES}/edit/${props?.role?.id}`}>
              <span className="icon" title="Edit">
                <i className="pi pi-fw pi-pencil"></i>
              </span>
            </Link>
            
              <span
                className="icon cursor-pointer"
                title="Delete"
                onClick={() => deleteRole(props?.role?.id)}
              >
                <i className="pi pi-fw pi-times"></i>
              </span>
          </>
        </div>
      </div>
    </>
  );
};

export default RoleItemApp;
