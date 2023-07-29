import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROUTE_URL } from "../../../auth/constants/routes.const";
import { AppState } from "../../../../store/reducers/root.reducer";
import { IUserModel } from "../../../../interfaces/user.model";
import "./user-list.scss";

const UserListApp = () => {
  const users = useSelector((x: AppState) => x.users);

  return (
    <div className="user-list-app">
      <ul className=" justify-content list-group list-group-flush">
        {Array.isArray(users.result)
          ? users.result?.map((user: IUserModel) => {
              return (
                <li className="list-group-item" key={user.id}>
                  <div className="d-flex">
                    {user.name}
                    <div className="float-right">
                      <Link to={ROUTE_URL.USERS + "/" + user.id}>
                        <span className="icon" title="Edit">
                          <i className="pi pi-fw pi-pencil"></i>
                        </span>
                      </Link>
                      <span className="icon" title="Delete">
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

export default UserListApp;
