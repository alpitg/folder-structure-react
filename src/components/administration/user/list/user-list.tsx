import { useSelector } from "react-redux";
import { AppState } from "../../../../store/reducers/root.reducer";
import { IUserModel } from "../../../../interfaces/user.model";
import UserItemApp from "./item/user-item";
import { Card } from "primereact/card";
import "./user-list.scss";
import NoRecordApp from "../../../ui/no-record/no-record";

const UserListApp = () => {
  const users = useSelector((x: AppState) => x.administration.users);

  return (
    <div className="user-list-app">
      <Card title="Users">
        <ul className="list-unstyled team-members m-0">
          {Array.isArray(users.result)
            ? users.result?.map((user: IUserModel) => {
                return (
                  <li key={user.id}>
                    <UserItemApp user={user} />
                  </li>
                );
              })
            : null}
          {users?.result?.length === 0 && <NoRecordApp />}
        </ul>
      </Card>
    </div>
  );
};

export default UserListApp;
