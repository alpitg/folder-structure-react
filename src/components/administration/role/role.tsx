import { Outlet } from "react-router";
import RoleListApp from "./list/role-list";
import { Suspense, useEffect } from "react";
import { IRolesRequestModel } from "../../../interfaces/role.model";
import { useDispatch } from "react-redux";
import { fetchRolesRequest } from "../store/actions/roles.action";
import "./role.scss";
import RoleItemApp from "./list/item/role-item";

const RolesApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const filter: IRolesRequestModel = {
      id: "",
      name: "",
      createdDate: "",
    };
    dispatch(fetchRolesRequest(filter));
  });

  return (
    <>
      {/* <RoleDetailApp />
            <RoleOperationsApp />
            <RoleFilterApp /> */}
      {/* <RoleFilterApp /> */}
      <RoleListApp />

      <br />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default RolesApp;
