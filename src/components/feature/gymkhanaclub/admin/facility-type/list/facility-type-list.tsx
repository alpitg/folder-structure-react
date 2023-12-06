import "./facility-type-list.scss";
import HeaderInlineTextApp from "../../../../../ui/header-inline-text/header-inline-text";
import { FACILITY_SUB_TITLE, FACILITY_TITLE, FACILITY_TYPE_SUB_TITLE, FACILITY_TYPE_TITLE } from "../../facility.const";
import { Card } from "primereact/card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { LOADING } from "../../../../../../constants/global-contants/global-key.const";
import NoRecordApp from "../../../../../ui/no-record/no-record";
import { fetchFacilitiesTypeRequest, resetDeleteFacilityType } from "../../store/actions/facilityType.action";
import { AppState } from "../../../../../../store/reducers/root.reducer";
import FacilityItemApp from "./item/facilityType-item";
import { ROUTE_URL } from "../../../../../auth/constants/routes.const";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { FacilityTypeModel, IFacilityTypeModel, IFacilityTypeRequestModel } from "../../../../../../interfaces/facilityType.model";
import { FacilityFormModel, FacilityModel } from "../../../../../../interfaces/facility.model";
import UserOverviewApp from "../../../../../administration/user/list/overview/user-overview";
import MessagesApp from "../../../../../ui/messages/messages";

const FacilityTypeListApp = () => {
    const facilitiesType = useSelector((x: AppState) => x.gymkhana.facilitiesType);
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
        dispatch(fetchFacilitiesTypeRequest(filter));
    }, [filter.tenantId]);

    const closeError = () => {
        dispatch(resetDeleteFacilityType());
      };
    return (
        <div className="facility-type-list-app">
            <div className="row">
                <div className="col-sm-12">
                    <HeaderInlineTextApp
                        title={FACILITY_TYPE_TITLE}
                        subTitle={FACILITY_TYPE_SUB_TITLE}
                        children={
                            <>
                                {
                                    <Link to={`${ROUTE_URL.GYMKHANACLUB.ADMIN.FACILITY_TYPE.ADD}`}>
                                        <Button
                                            className=" float-end"
                                            label="Create new user"
                                            icon="pi pi-plus"
                                            size="small"
                                        />
                                    </Link>
                                }
                            </>
                        }
                    />
                </div>
            </div>

            {
                !facilitiesType?.list?.result?.length ? <NoRecordApp /> :


                    <Card title={FACILITY_TYPE_TITLE}>
                        
                {facilitiesType?.delete?.error &&
                    facilitiesType?.delete?.error?.map((error: string) => (
                      <MessagesApp
                        type="alert-danger"
                        message={error}
                        close={closeError}
                        key={error}
                      />
                    ))}
                        {facilitiesType?.list?.pending && LOADING}
                        <UserOverviewApp
                            filter={filter}
                            total={facilitiesType?.list?.result?.length}
                        />
                        <div className="table-responsive">
                            <table className="table">
                                <tbody>
                                    {Array.isArray(facilitiesType?.list?.result) ?
                                        facilitiesType?.list?.result?.map((facilityType: FacilityTypeModel) => {
                                            return <FacilityItemApp facilityType={facilityType} key={facilityType.id} />
                                        }) : null
                                    }
                                </tbody>
                            </table>
                        </div>
                    </Card>
            }

        </div>
    )
}

export default FacilityTypeListApp;