import { Suspense, useEffect } from "react";
import { Outlet } from "react-router";
import { useDispatch } from "react-redux";
import { ITenantsRequestModel } from "../../../interfaces/tenant.model";
import { fetchTenantsRequest } from "../store/actions/tenant.action";
import "./tenant.scss";

const TenantApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const filter: ITenantsRequestModel = {
      id: "",
      mailId: "",
      name: "",
    };
    dispatch(fetchTenantsRequest(filter));
  });

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default TenantApp;
