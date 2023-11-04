import "./book-slots-list.scss";
import HeaderInlineTextApp from "../../../../ui/header-inline-text/header-inline-text";
import { BOOK_SLOTS_SUB_TITLE, BOOK_SLOTS_TITLE } from "../book-slots.const";

const BookSlotsListApp = () => {
    return <>
        <div className="book-slots-list-app">
            <div className="row">
                <div className="col-sm-12">
                    <HeaderInlineTextApp
                        title={BOOK_SLOTS_TITLE}
                        subTitle={BOOK_SLOTS_SUB_TITLE}
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

export default BookSlotsListApp;