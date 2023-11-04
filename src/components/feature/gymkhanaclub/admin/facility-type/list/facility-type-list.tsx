import "./facility-type-list.scss";
import HeaderInlineTextApp from "../../../../../ui/header-inline-text/header-inline-text";
import { FACILITY_TYPE_SUB_TITLE, FACILITY_TYPE_TITLE } from "../../facility.const";

const FacilityTypeListApp = () => {
    return (
        <div className="facility-type-list-app">
            <div className="row">
                <div className="col-sm-12">
                    <HeaderInlineTextApp
                        title={FACILITY_TYPE_TITLE}
                        subTitle={FACILITY_TYPE_SUB_TITLE}
                        children={
                            <>
                                Coming Next..
                            </>
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default FacilityTypeListApp;