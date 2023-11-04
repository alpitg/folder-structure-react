import "./facility-costing.scss";
import { Suspense } from "react";
import { Outlet } from "react-router";
import { LOADING } from "../../../../../constants/global-contants/global-key.const";

const FacilityCostingApp = () => {
    return <>
        <Suspense fallback={<div>{LOADING}</div>}>
            <Outlet />
        </Suspense>
    </>
}

export default FacilityCostingApp;