import "./facility-type.scss";
import { Suspense } from "react";
import { Outlet } from "react-router";
import { LOADING } from "../../../../../constants/global-contants/global-key.const";

const FacilityTypeApp = () => {
    return <>
        <Suspense fallback={<div>{LOADING}</div>}>
            <Outlet />
        </Suspense>
    </>
}

export default FacilityTypeApp;