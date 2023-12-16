import OrmChatResponseItemApp from "./item/chat-response-item";
import "./chat-response.scss"

const OrmChatResponseApp = () => {

    // TODO: Create the dummy json array here for chat response

    const dataSource = [
        {
            socialMedia: "facebook",
            image: "/static/media/img/faces/erik-lucatero-2.jpg",
            name: "rohit",
            userName: "@rohit1",
            message: "Please csll me",
            time: "1 min ago",
            sentimentalAnalysis: "positive",
            type: "dm"
        },
        {
            socialMedia: "instagram",
            image: "/static/media/img/faces/joe-gardner-2.jpg",
            name: "amy j",
            userName: "@amyj12",
            message: "Please csll me if possible",
            time: "12 Jan 2023 5.00 PM",
            sentimentalAnalysis: "neutral",
            type: "mention"
        },
        {
            socialMedia: "twitter",
            image: "/static/media/img/faces/clem-onojeghuo-3.jpg",
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

                    <div className="message-summary-top-action">

                        <div className="row">
                            <div className="col-sm-4">
                                <span className="badge text-bg-success cursor-pointer">2 New Messages</span>

                            </div>
                            <div className="col-sm-4 text-center">
                                <small className="text-body-secondary">Messages 1-30 of 103</small>
                            </div>
                            <div className="col-sm-4 text-end">
                                <div className="page-btn-group">
                                    <button type="button" className="btn"><i className="bi bi-chevron-left"></i></button>
                                    <button type="button" className="btn"><i className="bi bi-chevron-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>



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

                    <div className="text-center cursor-pointer pt-3">
                        <span className="badge text-bg-secondary">Load more</span>
                    </div>

                </>
            }
        </div>
    )
}

export default OrmChatResponseApp;