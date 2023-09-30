import { Suspense } from "react";
import { Outlet } from "react-router";
import { LOADING } from "../../../constants/global-contants/global-key.const";
import "./tenant.scss";

const TenantApp = () => {
  return (
    <>
      <Suspense fallback={<div>{LOADING}</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default TenantApp;
