import { Suspense } from "react";
import { Outlet } from "react-router";
import { LOADING } from "../../../constants/global-contants/global-key.const";

const OrganizationUnitsApp = () => {

    return (
        <>
            <Suspense fallback={<div>{LOADING}</div>}>
                <Outlet />
            </Suspense>
        </>
    );
}

export default OrganizationUnitsApp;