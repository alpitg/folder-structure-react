import "./facility-list.scss";
import HeaderInlineTextApp from "../../../../../ui/header-inline-text/header-inline-text";
import { FACILITY_SUB_TITLE, FACILITY_TITLE } from "../../facility.const";
import NoRecordApp from "../../../../../ui/no-record/no-record";
import { useSelector } from "react-redux";
import { AppStore } from "../../../../../../interfaces/generic.model";
import { AppState } from "../../../../../../store/reducers/root.reducer";

const FacilityListApp = () => {

    // const facilities = useSelector((x: AppState) => x.gymkhana.facilities)

    return (
        <div className="facility-list-app">
            <div className="row">
                <div className="col-sm-12">
                    <HeaderInlineTextApp
                        title={FACILITY_TITLE}
                        subTitle={FACILITY_SUB_TITLE}
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

export default FacilityListApp;