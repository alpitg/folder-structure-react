import HeaderInlineTextApp from "../../../ui/header-inline-text/header-inline-text";
import { ORM_SUB_TITLE, ORM_TITLE } from "../orm.const";
import OrmSideBar from "../ui/sidebar-right/orm-sidebar-right";
import OrmChatResponseApp from "./chat-response/chat-response";

const OrmHomeApp = () => {
    return (
        <div className="orm-home-app">
            <div className="row">
                <div className="col-sm-12">
                    <HeaderInlineTextApp
                        title={ORM_TITLE}
                        subTitle={ORM_SUB_TITLE}
                        children={
                            <>

                            </>
                        }
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-sm-9">
                    <OrmChatResponseApp />
                </div>
                <div className="col-sm-3 pt-3">
                    <OrmSideBar />
                </div>
            </div>

        </div>
    )
}

export default OrmHomeApp;