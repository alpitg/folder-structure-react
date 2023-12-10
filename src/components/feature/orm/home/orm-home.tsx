import HeaderInlineTextApp from "../../../ui/header-inline-text/header-inline-text";
import { ORM_SUB_TITLE, ORM_TITLE } from "../orm.const";
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
                                Home Coming Next..
                            </>
                        }
                    />
                </div>
            </div>

            {
                <OrmChatResponseApp />
            }

        </div>
    )
}

export default OrmHomeApp;