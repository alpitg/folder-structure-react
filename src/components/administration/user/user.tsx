import { Outlet } from "react-router";
import { Suspense, useEffect } from "react";
import { IUsersRequestModel } from "../../../interfaces/user.model";
import { useDispatch } from "react-redux";
import { fetchUsersRequest } from "../store/actions/user.action";
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
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default UsersApp;
