import { Outlet } from "react-router";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import CategoryListApp from "./list/category-list";

import "./category.scss";
import CreateCraftDetailsApp from "./create/category-create";

const CategoryApp = () => {
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
                    <CategoryListApp />
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

export default CategoryApp;
