import UserDetailApp from "./detail/user-detail";
import UserFilterApp from "./filter/user-filter";
import UserListApp from "./list/user-list";
import UserOperationsApp from "./operations/user-operations";
import "./users.scss";

const UsersApp = () => {

    return (
        <>
            Hi From UI UsersApp
            <UserDetailApp />
            <UserOperationsApp />
            <UserFilterApp />
            <UserListApp />
            <UserFilterApp />

        </>
    );
}

export default UsersApp;