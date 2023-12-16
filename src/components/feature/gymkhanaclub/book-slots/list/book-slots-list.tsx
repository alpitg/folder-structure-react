import "./book-slots-list.scss";
import HeaderInlineTextApp from "../../../../ui/header-inline-text/header-inline-text";
import { BOOK_SLOTS_SUB_TITLE, BOOK_SLOTS_TITLE } from "../book-slots.const";
import CalendarApp from "../../../../ui/calendar/calendar";
import CalendarSample1App from "../../../../ui/calendar/calendar-sample1/calendar-sample1";
import { Link } from "react-router-dom";
import { ROUTE_URL } from "../../../../auth/constants/routes.const";
import { Button } from "primereact/button";
import { IBookSloatModel, IBooking } from "../../../../../interfaces/booking-sloat.model";
import BookSlotsItem from "./book-slots-item";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../../store/reducers/root.reducer";
import { scheduler } from "timers/promises";
import { useEffect, useState } from "react";
import { fetchBookSlotRequest, updateBookingSlots } from "../../admin/store/actions/book-slots.action";
import { IFacilityCourtRequestModel } from "../../../../../interfaces/facility-court.model";

const BookSlotsListApp = () => {

    const shedular = useSelector((x: AppState) => x.gymkhana?.shedular.result);
    const facility = useSelector((x: AppState) => x.gymkhana.facility);
    const dispatch = useDispatch();
    const { globalSelectedTenant } = useSelector(
        (x: AppState) => x.administration.tenants
    );

    const [filter, setFilter] = useState<IBookSloatModel>({
        tenantId: globalSelectedTenant,
        name: "",
        Fileds: "",
        OrderBy: "",
        PageSize: 10,
        Skip: 0,
        SearchQuery: "",
    });
    useEffect(() => {
        dispatch(fetchBookSlotRequest(filter))
    })
   

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
                <div className="mb-3">
                    <tbody>
                   {shedular?.map((bookSlot: IBooking) => {
                    return<BookSlotsItem bookSlot={bookSlot}/>
                   })
                   }
                    </tbody>

                   
                </div>
            
        </div>
    </>
}

export default BookSlotsListApp;