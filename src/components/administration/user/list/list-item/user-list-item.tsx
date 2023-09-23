import { Link } from "react-router-dom";
import { IUserModel } from "../../../../../interfaces/user.model";
import { ROUTE_URL } from "../../../../auth/constants/routes.const";
import { useDispatch } from "react-redux";
import { deleteUserRequest } from "../../../store/actions/user.action";
import { IUserRoleModel } from "../../../../../interfaces/user.model";
import "./user-list-item.scss";

const UserListItemApp = (props: { user: IUserModel }) => {
  const dispatch = useDispatch();

  const deleteUser = (id: string) => {
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
          <span title={"User name: " + props?.user.userName}>
            {props?.user.userName}
          </span>
          <p className="m-0">
            <span className="user-name">
              {props?.user.name + " " + props?.user.surname + " | "}
            </span>
            <span className="text-muted time">{props?.user.emailAddress}</span>
          </p>
        </div>
      </td>
      <td>
        <div className="user-list-job-info">
          <p className="type m-0">
            {Array.isArray(props?.user.roles)
              ? props?.user?.roles?.map(
                  (role: IUserRoleModel, index: number) => {
                    return (
                      <span key={role.roleName}>
                        {index !== 0 ? ", " : null}
                        {role.roleName}
                      </span>
                    );
                  }
                )
              : null}
          </p>
          <p className="text-muted m-0">
            Created Date:
            <span className="location">{" " + props?.user.creationTime}</span>
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
          <Link to={`${ROUTE_URL.ADMIN.USER.BASE}/${props?.user?.id}`}>
            <span className="icon" title="View">
              <i className="pi pi-fw pi-eye"></i>
            </span>
          </Link>
          <Link to={`${ROUTE_URL.ADMIN.USER.BASE}/edit/${props?.user?.id}`}>
            <span className="icon" title="Edit">
              <i className="pi pi-fw pi-pencil"></i>
            </span>
          </Link>
          <Link to={`${ROUTE_URL.ADMIN.USER.BASE}/permissions/${props?.user?.id}`}>
            <span className="icon" title="Permissions">
              <i className="pi pi-fw pi-shield"></i>
            </span>
          </Link>
          <span
            className="icon cursor-pointer"
            title="Delete"
            onClick={() => deleteUser(props?.user?.id)}
          >
            <i className="pi pi-fw pi-times"></i>
          </span>
        </div>
      </td>
    </tr>
  );
};

export default UserListItemApp;
