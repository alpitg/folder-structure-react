import "./facility-list.scss";
import HeaderInlineTextApp from "../../../../../ui/header-inline-text/header-inline-text";
import { FACILITY_SUB_TITLE, FACILITY_TITLE } from "../../facility.const";
import NoRecordApp from "../../../../../ui/no-record/no-record";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../../../../../interfaces/generic.model";
import { AppState } from "../../../../../../store/reducers/root.reducer";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { ROUTE_URL } from "../../../../../auth/constants/routes.const";
import { useEffect, useState } from "react";
import { fetchFacilityRequest, resetDeleteFacility } from "../../store/actions/facility.action";
import { FacilityModel, IFacilityModel, IFacilityRequestModel } from "../../../../../../interfaces/facility.model";
import { Card } from "primereact/card";
import { LOADING } from "../../../../../../constants/global-contants/global-key.const";
import FacilitiesItemApp from "./item/facility.item";
import UserOverviewApp from "../../../../../administration/user/list/overview/user-overview";
import MessagesApp from "../../../../../ui/messages/messages";

const FacilityListApp = () => {

    // const facilities = useSelector((x: AppState) => x.gymkhana.)
    const facility = useSelector((x: AppState) => x.gymkhana.facility);
    const dispatch = useDispatch();

    const { globalSelectedTenant } = useSelector(
        (x: AppState) => x.administration.tenants
    );

    const [filter, setFilter] = useState<IFacilityRequestModel>({
        tenantId: globalSelectedTenant,
        name: "",
        Fields: "",
        OrderBy: "",
        PageSize: 10,
        Skip: 0,
        SearchQuery: "",
    });

    useEffect(() => {
        dispatch(fetchFacilityRequest(filter));
    }, [filter.tenantId])
   

    const closeError = () => {
        dispatch(resetDeleteFacility());
      };

    return (
        <div className="facility-list-app">
            <div className="row">
                <div className="col-sm-12">
                    <HeaderInlineTextApp
                        title={FACILITY_TITLE}
                        subTitle={FACILITY_SUB_TITLE}
                        children={
                            <>
                                {
                                    <Link to={`${ROUTE_URL.GYMKHANACLUB.ADMIN.FACILITY.ADD}`}>
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
                !facility.list?.result?.length ? <NoRecordApp /> :

                    <Card title={FACILITY_TITLE}>
                      {facility?.delete?.error &&
                  facility?.delete?.error?.map((error: string) => (
                    <MessagesApp
                      type="alert-danger"
                      message={error}
                      close={closeError}
                      key={error}
                    />
                  ))}
                        {facility?.list.pending && LOADING}
                        <UserOverviewApp
                            filter={filter}
                            total={facility?.list?.result?.length}
                        />
                        <div className="table-responsive">
                            <table className="table">
                                <tbody>
                                    {facility?.list?.result?.map((facilities: FacilityModel) => {
                                        return <FacilitiesItemApp facilities={facilities} key={facilities.id} />;

                                    })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </Card>
            }
        </div>
    )
}

export default FacilityListApp;