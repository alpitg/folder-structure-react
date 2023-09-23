import { Outlet } from "react-router";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import CraftListApp from "./list/craft-list";

import "./craft.scss";
import CreateCraftDetailsApp from "./create/craft-create";

const CraftApp = () => {
    const dispatch = useDispatch();

    //   useEffect(() => {
    //     const filter: IRolesRequestModel = {
    //       id: "",
    //       name: "",
    //       createdDate: "",
    //     };
    //     dispatch(fetchRolesRequest(filter));
    //   });

    return (
        <>
            {/* <RoleDetailApp />
            <RoleOperationsApp />
            <RoleFilterApp /> */}
            {/* <RoleFilterApp /> */}

            <div className="row">
                <div className="col-sm-6">
                    <CraftListApp />
                </div>
                <div className="col-sm-6">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet />
                    </Suspense>
                </div>
            </div>


        </>
    );
};

export default CraftApp;
