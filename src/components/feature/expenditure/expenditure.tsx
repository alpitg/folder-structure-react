import { Outlet } from "react-router";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";

import "./expenditure.scss";
// import CreateExpenditure from "./create/expenditure-create";
import ExpenditureListApp from "./list/expenditure-list";

const ExpenditureApp = () => {
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
                    <ExpenditureListApp/>
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

export default ExpenditureApp;
