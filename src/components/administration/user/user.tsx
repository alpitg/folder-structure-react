import "./user.scss";
import { Outlet } from "react-router";
import { Suspense } from "react";
import { LOADING } from "../../../constants/global-contants/global-key.const";

const UsersApp = () => {
  return (
    <>
      <Suspense fallback={<div>{LOADING}</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default UsersApp;
