import { Link } from "react-router-dom";
import { IUserModel } from "../../../../../interfaces/user.model";
import { ROUTE_URL } from "../../../../auth/constants/routes.const";
import { useDispatch } from "react-redux";
import { deleteUserRequest } from "../../../store/actions/users.action";
import "./user-item.scss";

const UserItemApp = (props: { user: IUserModel }) => {
  const dispatch = useDispatch();

  const deleteUser = (id: string) => {
    dispatch(deleteUserRequest(id));
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
          {props?.user?.name} | {props?.user?.mailId} <br />
          <span className="text-muted">
            <small>Roles 0</small>
          </span>{" "}
          |
          <span className="text-success">
            <small> Page Permissions 1</small>
          </span>{" "}
          |
          <span className="text-danger">
            <small> In-Active</small>
          </span>
        </div>
        <div className="col-3 col-md-3">
          <>
            <Link to={`${ROUTE_URL.USERS}/${props?.user?.id}`}>
              <span className="icon" title="View">
                <i className="pi pi-fw pi-eye"></i>
              </span>
            </Link>
            <Link to={`${ROUTE_URL.USERS}/edit/${props?.user?.id}`}>
              <span className="icon" title="Edit">
                <i className="pi pi-fw pi-pencil"></i>
              </span>
            </Link>
            <span
              className="icon cursor-pointer"
              title="Delete"
              onClick={() => deleteUser(props?.user?.id)}
            >
              <i className="pi pi-fw pi-times"></i>
            </span>
          </>
        </div>
      </div>
    </>
  );
};

export default UserItemApp;
