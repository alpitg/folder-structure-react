import "./organization-units-list.scss";
import HeaderInlineTextApp from "../../../ui/header-inline-text/header-inline-text";
import { ORGANIZATION_UNITS_SUB_TITLE, ORGANIZATION_UNITS_TITLE } from "../organization-units.const";

const OrganizationUnitsListApp = () => {
    return <>
        <div className="organization-units-list-app">
            <div className="row">
                <div className="col-sm-12">
                    <HeaderInlineTextApp
                        title={ORGANIZATION_UNITS_TITLE}
                        subTitle={ORGANIZATION_UNITS_SUB_TITLE}
                        children={
                            <>
                               Coming Next..
                            </>
                        }
                    />
                </div>
            </div>
        </div>
    </>
}

export default OrganizationUnitsListApp;