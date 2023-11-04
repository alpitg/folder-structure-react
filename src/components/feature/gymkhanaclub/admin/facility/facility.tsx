import "./facility.scss";
import { Suspense } from "react";
import { LOADING } from "../../../../../constants/global-contants/global-key.const";
import { Outlet } from "react-router";

const FacilityApp = () => {
    return (
        <>
            <Suspense fallback={<div>{LOADING}</div>}>
                <Outlet />
            </Suspense>
        </>
    )

}

export default FacilityApp;