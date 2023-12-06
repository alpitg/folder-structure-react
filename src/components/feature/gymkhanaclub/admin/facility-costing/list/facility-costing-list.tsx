import "./facility-costing-list.scss";
import HeaderInlineTextApp from "../../../../../ui/header-inline-text/header-inline-text";
import { FACILITY_COSTING_SUB_TITLE, FACILITY_COSTING_TITLE } from "../../facility.const";
import NoRecordApp from "../../../../../ui/no-record/no-record";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { ROUTE_URL } from "../../../../../auth/constants/routes.const";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../../../store/reducers/root.reducer";
import { Card } from "primereact/card";
import { useEffect, useState } from "react";
import { fetchFacilityCourtsRequest, resetDeleteFacilityCourt } from "../../store/actions/facilityCourt.action";
import { FacilityCourtModel, IFacilityCourtRequestModel } from "../../../../../../interfaces/facility-court.model";
import { LOADING } from "../../../../../../constants/global-contants/global-key.const";
import FacilityCourtItemApp from "./Item/facility-court.item";
import UserOverviewApp from "../../../../../administration/user/list/overview/user-overview";
import MessagesApp from "../../../../../ui/messages/messages";

const FacilityCostingListApp = () => {

    const facilityCourts = useSelector((x: AppState) => x.gymkhana.facilityCourts);
    const dispatch = useDispatch();


    const { globalSelectedTenant } = useSelector(
        (x: AppState) => x.administration.tenants
    );

    const [filter, setFilter] = useState<IFacilityCourtRequestModel>({
        tenantId: globalSelectedTenant,
        name: "",
        Fields: "",
        OrderBy: "",
        PageSize: 10,
        Skip: 0,
        SearchQuery: "",
    });

    useEffect(() => {
        dispatch(fetchFacilityCourtsRequest(filter))
    }, [filter.tenantId])



    const closeError = () => {
        dispatch(resetDeleteFacilityCourt())
      };
  
    return (
        <div className="facility-costing-list-app">
            <div className="row">
                <div className="col-sm-12">
                    <HeaderInlineTextApp
                        title={FACILITY_COSTING_TITLE}
                        subTitle={FACILITY_COSTING_SUB_TITLE}
                        children={
                            <>
                                {
                                    <Link to={`${ROUTE_URL.GYMKHANACLUB.ADMIN.FACILITY_COSTING.ADD}`}>
                                        <Button
                                            className=" float-end"
                                            label="Create new Facility Court"
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
                !facilityCourts.list?.result?.length ? <NoRecordApp /> :
                        <Card title={FACILITY_COSTING_TITLE}>
                            {
                                facilityCourts?.delete?.error &&
                                facilityCourts?.delete?.error.map((error: string) => (
                                    <MessagesApp type="alert-danger"
                                    message={error}
                                    close={closeError}
                                    key={error}/>
                                ))
                            }
                            {facilityCourts?.list.pending && LOADING}
                            <UserOverviewApp
                                filter={filter}
                                total={facilityCourts?.list?.result?.length}
                            />
                            <div className="table-responsive">
                                <table className="table">
                                    <tbody>
                                        {facilityCourts?.list?.result?.map((facilityCourt: FacilityCourtModel) => {
                                            return <FacilityCourtItemApp facilityCourt={facilityCourt} key={facilityCourt.id} />;
                                        })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </Card>
            }
                        {

                        }
                    </div>
    )
}

            export default FacilityCostingListApp;