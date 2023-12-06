import "./book-slots-list.scss";
import HeaderInlineTextApp from "../../../../ui/header-inline-text/header-inline-text";
import { BOOK_SLOTS_SUB_TITLE, BOOK_SLOTS_TITLE } from "../book-slots.const";
import CalendarApp from "../../../../ui/calendar/calendar";
import CalendarSample1App from "../../../../ui/calendar/calendar-sample1/calendar-sample1";
import { Link } from "react-router-dom";
import { ROUTE_URL } from "../../../../auth/constants/routes.const";
import { Button } from "primereact/button";

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
                              {
                                    <Link to={`${ROUTE_URL.GYMKHANACLUB.FACILITY_BOOK_SLOTS.ADD}`}>
                                        <Button
                                            className=" float-end"
                                            label="Create new user"
                                            icon="pi pi-plus"
                                            size="small"
                                        />
                                    </Link>
                                }
                            </>
                        }
                    />
                </div>
            </div>
            <>
                <div className="mb-3">
                    <CalendarSample1App />
                </div>
            </>
        </div>
    </>
}

export default BookSlotsListApp;