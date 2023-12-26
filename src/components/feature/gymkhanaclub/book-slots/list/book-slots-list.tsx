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
import NoRecordApp from "../../../../ui/no-record/no-record";

const BookSlotsListApp = ({state}: any) => {

    const shedular = useSelector((x: AppState) => x.gymkhana?.shedular);
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
        setFilter((prev) => ({
            ...prev,
            tenantId: globalSelectedTenant,
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [globalSelectedTenant]);

    useEffect(() => {
        dispatch(fetchBookSlotRequest(filter))
    },[])
   

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
                                            label="Book Slot"
                                            icon="pi pi-plus"
                                            size="small"
                                        />
                                    </Link>
                                }


                                {/* /////////////// */}

                               
                                
                            </>
                        }
                    />
                </div>
            </div>


               {
                  !shedular?.list?.result?.length ? <NoRecordApp /> :
                 <div className="mb-3">
                 <tbody>
                {Array.isArray(shedular?.list?.result) ?
                shedular?.list?.result?.map((bookSlot: IBooking) => {
                 return<BookSlotsItem bookSlot={bookSlot}/>
                }): null
                }
                 </tbody>

                
             </div>
               }
            {(shedular?.list?.result) ?
                shedular?.list?.result?.map((bookSlot: IBooking) => {
                    return<Main bookSlot={bookSlot}/>
                }): null
            }
        </div>
    </>
}

export default BookSlotsListApp;


const Main = (props: {bookSlot: IBooking}) => {
    return<>
        <div>
            {props?.bookSlot?.facility}
        </div>
        </>
}