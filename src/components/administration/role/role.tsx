import { Outlet } from "react-router";
import { Suspense, useEffect } from "react";
import { IRolesRequestModel } from "../../../interfaces/role.model";
import { useDispatch } from "react-redux";
import { fetchRolesRequest } from "../store/actions/role.action";
import "./role.scss";

const RolesApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const filter: IRolesRequestModel = {
      id: "",
      name: "",
      createdDate: "",
      isDefault: false,
    };
    dispatch(fetchRolesRequest(filter));
  });

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default RolesApp;
