import { Outlet } from "react-router";
import UserListApp from "./list/user-list";
import { Suspense, useEffect } from "react";
import { IUsersRequestModel } from "../../../interfaces/user.model";
import { useDispatch } from "react-redux";
import { fetchUsersRequest } from "../store/actions/users.action";
import "./user.scss";

const UsersApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const filter: IUsersRequestModel = {
      id: "",
      mailId: "",
      name: "",
    };
    dispatch(fetchUsersRequest(filter));
  });

  return (
    <>
      {/* <UserDetailApp />
            <UserOperationsApp />
            <UserFilterApp /> */}
      {/* <UserFilterApp /> */}
      <UserListApp />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default UsersApp;
