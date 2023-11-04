import "./facility-costing-list.scss";
import HeaderInlineTextApp from "../../../../../ui/header-inline-text/header-inline-text";
import { FACILITY_COSTING_SUB_TITLE, FACILITY_COSTING_TITLE } from "../../facility.const";
import NoRecordApp from "../../../../../ui/no-record/no-record";

const FacilityCostingListApp = () => {
    return (
        <div className="facility-costing-list-app">
            <div className="row">
                <div className="col-sm-12">
                    <HeaderInlineTextApp
                        title={FACILITY_COSTING_TITLE}
                        subTitle={FACILITY_COSTING_SUB_TITLE}
                        children={
                            <>
                                Coming Next..
                            </>
                        }
                    />
                </div>
            </div>
            {
                <NoRecordApp />
            }
        </div>
    )
}

export default FacilityCostingListApp;