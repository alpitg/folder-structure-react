import { Link } from "react-router-dom";
import { UserModel } from "../../../../../interfaces/user.model";
import { ROUTE_URL } from "../../../../auth/constants/routes.const";
import { useDispatch } from "react-redux";
import { deleteUserRequest } from "../../../store/actions/user.action";
import { IUserRoleModel } from "../../../../../interfaces/user.model";
import { hasClaim } from "../../../../../utils/auth.util";
import {
  USR_ADD_USER,
  USR_ASSIGN_USR_PERMISSIONS,
  USR_DELETE_USER,
  USR_UPDATE_USER,
} from "../../../../../constants/global-contants/claims.const";
import "./user-list-item.scss";

const UserListItemApp = (props: { user: UserModel }) => {
  const dispatch = useDispatch();

  const deleteUser = (id: string = "") => {
    dispatch(deleteUserRequest(id));
  };

  return (
    <tr key={props?.user.id} className="user-list-item-app">
      <td>
        <div className="user-list-job-starred">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="feather feather-star starred"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </a>
        </div>
      </td>
      <td>
        <div className="avatar">
          <img
            alt="..."
            className="img-circle img-no-padding img-responsive"
            src="/static/media/img/faces/ayo-ogunseinde-2.jpg"
          />
        </div>
      </td>
      <td>
        <div className="user-list-job-title">
          <p className="m-0">
            {props?.user.firstName + " " + props?.user?.lastName}
          </p>
          <p className="text-muted m-0">{props?.user?.email}</p>
        </div>
      </td>
      <td>
        <div className="user-list-job-info">
          <p className="type m-0">
            {Array.isArray(props?.user?.userRoles)
              ? props?.user?.userRoles?.map(
                  (role: IUserRoleModel, index: number) => {
                    return (
                      <span key={role?.roleName}>
                        {index !== 0 ? ", " : null}
                        {role?.roleName}
                      </span>
                    );
                  }
                )
              : null}
          </p>
          <p className="text-muted m-0">
            Phone Number:
            <span className="location">{" " + props?.user.phoneNumber}</span>
          </p>
        </div>
      </td>
      <td>
        <span
          className={
            "badge rounded-pill " +
            (props?.user.isEmailConfirmed ? "bg-success" : "bg-light text-dark")
          }
        >
          Email Confirmed
        </span>
      </td>
      <td>
        <div className="user-list-job-category">
          <span
            className={
              "badge rounded-pill " +
              (props?.user.isActive ? "bg-success" : "bg-light text-dark")
            }
          >
            Active
          </span>
        </div>
      </td>

      <td>
        <div className="d-flex">
          {hasClaim([USR_ADD_USER, USR_UPDATE_USER]) && (
            <Link to={`${ROUTE_URL.ADMIN.USER.BASE}/edit/${props?.user?.id}`}>
              <span className="icon" title="Edit">
                <i className="pi pi-fw pi-pencil"></i>
              </span>
            </Link>
          )}
          {hasClaim([USR_ASSIGN_USR_PERMISSIONS]) && (
            <Link
              to={`${ROUTE_URL.ADMIN.USER.BASE}/permissions/${props?.user?.id}`}
            >
              <span className="icon" title="Permissions">
                <i className="pi pi-fw pi-shield"></i>
              </span>
            </Link>
          )}
          {hasClaim([USR_DELETE_USER]) && (
            <span
              className="icon cursor-pointer"
              title="Delete"
              onClick={() => deleteUser(props?.user?.id)}
            >
              <i className="pi pi-fw pi-times"></i>
            </span>
          )}
        </div>
      </td>
    </tr>
  );
};

export default UserListItemApp;
