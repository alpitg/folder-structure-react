import { Card } from "primereact/card";
import { ORM_TITLE } from "../../orm.const";
import OrmChatResponseItemApp from "./item/chat-response-item";

const OrmChatResponseApp = () => {

    // TODO: Create the dummy json array here for chat response

    const dataSource = [
        {
            socialMedia: "facebook",
            name: "rohit",
            userName: "@rohit1",
            message: "Please csll me",
            time: "1 min ago",
            sentimentalAnalysis: "positive",
            type: "dm"
        },
        {
            socialMedia: "instagram",
            name: "alpit",
            userName: "@alpit124",
            message: "Please csll me if possible",
            time: "12 Jan 2023 5.00 PM",
            sentimentalAnalysis: "neutral",
            type: "mention"
        },
        {
            socialMedia: "twitter",
            name: "amit",
            userName: "@amit_lit",
            message: "The product quality is not so great",
            time: "10 min ago",
            sentimentalAnalysis: "negative",
            type: "comment"
        }
    ];


    return (
        <div className="orm-chat-response-app">

            {dataSource?.length === 0 && <div> No messages found, kindly review your filter settings</div>}
            {
                dataSource?.length > 0 && <>
                    <span className="badge text-bg-success cursor-pointer">2 New Messages</span>
                    {
                        // TODO: For loop here for below component 
                        dataSource?.map(item => {
                            return <div className="row" key={item?.userName + item?.time}>
                                <div className="card gy-3 p-3" >
                                    <OrmChatResponseItemApp dataSource={item} />
                                </div>
                            </div>
                        })
                    }
                </>
            }
        </div>
    )
}

export default OrmChatResponseApp;