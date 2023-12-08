import HeaderInlineTextApp from "../../../ui/header-inline-text/header-inline-text";
import NoRecordApp from "../../../ui/no-record/no-record";
import { ORM_SUB_TITLE, ORM_TITLE } from "../orm.const";

const OrmListeningApp = () => {
    return (
        <div className="orm-listening-app">
            <div className="row">
                <div className="col-sm-12">
                    <HeaderInlineTextApp
                        title={ORM_TITLE}
                        subTitle={ORM_SUB_TITLE}
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

export default OrmListeningApp;