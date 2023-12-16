import AvatarApp from "../../../../../ui/avatar/avatar";
import "./chat-response-item.scss";

const OrmChatResponseItemApp = ({ dataSource }: any) => {
    const sentimentalAnalysis = {
        positive: "positive",
        negative: "negative",
        neutral: "neutral"
    }

    return (
        <div className="orm-chat-response-item-app">
            <div className="row">
                <div className="col-sm-12">

                    <div className="row">
                        <div className="col-sm-1 text-center">
                            <AvatarApp src="/static/media/img/faces/kaci-baum-1.jpg" name="jack huge" />
                            <small><cite>{dataSource?.type}</cite></small>
                        </div>
                        <div className="col-sm-7">
                            <h5 className="chat-user-name">{dataSource?.name}</h5>
                            <cite title="Source Title">{dataSource?.userName}</cite>
                            <div>
                                <small>{dataSource?.message}</small>
                            </div>
                        </div>
                        <div className="col-sm-4 comment-analyse">
                            <div className="comment-analyse-items">
                                <i className="bi bi-person-fill"></i>
                            </div>
                            <div className="comment-analyse-items">
                                <small>{dataSource?.time}</small>
                            </div>
                            <div className="comment-analyse-items">
                                {
                                    dataSource?.sentimentalAnalysis === sentimentalAnalysis.positive && <i className="bi bi-emoji-smile" title={sentimentalAnalysis.positive}></i>
                                }
                                {
                                    dataSource?.sentimentalAnalysis === sentimentalAnalysis.negative && <i className="bi bi-emoji-frown" title={sentimentalAnalysis.negative}></i>
                                }
                                {
                                    dataSource?.sentimentalAnalysis === sentimentalAnalysis.neutral && <i className="bi bi-emoji-neutral" title={sentimentalAnalysis.negative}></i>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-5">
                            <span className="chat-reply">
                                <i className="bi bi-reply-fill"></i>
                                Reply
                            </span>
                        </div>
                        <div className="col-sm-6 action-icons">
                            <span>
                                <i className="bi bi-clock-history"></i>
                                <i className="bi bi-info-circle-fill"></i>
                                <i className="bi bi-search"></i>
                                <i className="bi bi-bookmark"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default OrmChatResponseItemApp;