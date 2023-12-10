import { ORM_TITLE } from "../../orm.const";
import OrmChatResponseItemApp from "./item/chat-response-item";

const OrmChatResponseApp = () => {

    // TODO: Create the dummy json array here for chat response

    return (
        <div className="orm-chat-response-app">
            <div className="row">
                <div className="col-sm-12">
                    {ORM_TITLE} - OrmChatResponseApp
                </div>
            </div>
            <br />
            <br />
            {
                // TODO: For loop here for below component 
                <OrmChatResponseItemApp />
            }
        </div>
    )
}

export default OrmChatResponseApp;