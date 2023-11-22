import "./facility-type-list.scss";
import HeaderInlineTextApp from "../../../../../ui/header-inline-text/header-inline-text";
import { FACILITY_TYPE_SUB_TITLE, FACILITY_TYPE_TITLE } from "../../facility.const";
import { Card } from "primereact/card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { LOADING } from "../../../../../../constants/global-contants/global-key.const";
import NoRecordApp from "../../../../../ui/no-record/no-record";
import { fetchFacilityTypeRequest } from "../../store/actions/facilityType.action";
import { AppState } from "../../../../../../store/reducers/root.reducer";
import FacilityItemApp from "./item/facilityType-item";
import { ROUTE_URL } from "../../../../../auth/constants/routes.const";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { FacilityTypeModel, IFacilityTypeRequestModel } from "../../../../../../interfaces/facilityType.model";

const FacilityTypeListApp = () => {
    const facilityType = useSelector((x: AppState) => x.gymkhana.facilityType);
    const dispatch = useDispatch();

    const { globalSelectedTenant } = useSelector(
        (x: AppState) => x.administration.tenants
    );
    const [filter, setFilter] = useState<IFacilityTypeRequestModel>({
        tenantId: globalSelectedTenant,
        name: "",
        Fields: "",
        OrderBy: "",
        PageSize: 10,
        Skip: 0,
        SearchQuery: "",
    });

    useEffect(() => {
        setFilter((prev) => ({
            ...prev,
            tenantId: globalSelectedTenant,
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [globalSelectedTenant]);
    useEffect(() => {
        dispatch(fetchFacilityTypeRequest(filter));
    }, [filter.tenantId]);


    return (
        <div className="facility-type-list-app">
            <div className="row">
                <div className="col-sm-12">
                   
                </div>
            </div>

            {
                facilityType?.list?.result?.length ? <NoRecordApp /> :

                    <Card title={FACILITY_TYPE_TITLE}>
                        {/* {facilityType?.delete?.error &&
                            facilityType?.delete?.error?.map((error: string) => (
                                <MessagesApp
                                    type="alert-danger"
                                    message={error}
                                    close={closeError}
                                    key={error}
                                />
                            ))} */}
                        {facilityType?.list.pending && LOADING}
                        <div className="table-responsive">
                            <table className="table">
                                <tbody>
                                    {facilityType?.list?.result?.map((facilityType: FacilityTypeModel) => {
                                        return <FacilityItemApp facilityType={facilityType} key={facilityType.id} />;
                                        // return <RoleItemApp role={role} key={role.id} />;
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </Card>
            }

        </div>
    )
}

export default FacilityTypeListApp;