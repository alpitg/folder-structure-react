import { useDispatch, useSelector } from "react-redux";
import "./book-slots-edit.scss";
import { useNavigate } from "react-router";
import { Card } from "primereact/card";
import { Link } from "react-router-dom";
import { ROUTE_URL } from "../../../../auth/constants/routes.const";
import { useEffect, useState } from "react";
import { BookSloatFormModel, BookSloatModel, IBookSloatRequestModel } from "../../../../../interfaces/book-facility.model";
import { fetchFacilityRequest } from "../../admin/store/actions/facility.action";
import { AppState } from "../../../../../store/reducers/root.reducer";
import { Calendar } from 'primereact/calendar'
import { fetchFacilityCourtsRequest } from "../../admin/store/actions/facilityCourt.action";
import { Chip } from 'primereact/chip';
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { scheduler } from "timers/promises";
import { UPDATE_BOOK_SLOT, toggleCheckbox, updateBookingSlots, updateBookingSlotsRequest } from "../../admin/store/actions/book-slots.action";
import { BookingAppStore, IBooking } from "../../../../../interfaces/booking-sloat.model";
import { FacilityFormModel, FacilityModel } from "../../../../../interfaces/facility.model";

const BookSlotsEditApp = () => {
    const [dates, setDates] = useState<Date[] | null>(null);
    const [selectedFacilityCourt, setSelectedFacilityCourt] = useState("");
    const [checked, setChecked] = useState(false);

    const time = [
        { time: '11.00 : 12.00' },
        { time: '12.00 : 1.00' },
        { time: '1.00 : 2.00' },
    ];
    const [selectedTime, setSelectedTime] = useState([time[0]]);



    console.log(dates);
    console.log(selectedTime);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [bookSloat, setBookSloat] = useState<BookSloatFormModel>(
        new BookSloatFormModel()
    )
    const facility = useSelector((x: AppState) => x.gymkhana.facility?.list?.result)
    const facilityCourts = useSelector((x: AppState) => x.gymkhana.facilityCourts?.list?.result);
    const shedular = useSelector((x: AppState) => x.gymkhana?.shedular);


    const [selectedValue, setSelectedValue] = useState("")
    const [facilityDetail, setFacilityDetail] = useState<FacilityFormModel>(
        new FacilityFormModel()
    )

    const { tenants } = useSelector((x: AppState) => x.administration);
    const { globalSelectedTenant } = useSelector(
        (x: AppState) => x.administration.tenants
    );
    const [filter, setFilter] = useState<IBookSloatRequestModel>({
        tenantId: globalSelectedTenant,
        name: "",
        Fields: "",
        OrderBy: "",
        PageSize: 10,
        Skip: 0,
        SearchQuery: "",
    });
    const { isError, filedName } = bookSloat


    console.log(shedular);

    // const isChecked = useSelector((state: AppState) => state.gymkhana.isChecked);


    // const handleCheckboxToggle = () => {
    //     dispatch(toggleCheckbox());
    // };

    const handleDropdownChange = (e: any) => {
        
        const value = e?.target?.value;
        //   const selectedValue = facilityCourts?.filter(x => x.facilitiesId === id)
            setSelectedValue(value);
        
        const postData: IBooking = {
            ...shedular?.bookSlot,
            facility: value,
        }
        dispatch(updateBookingSlots(postData));
    }

    const handleDropdownChangeFacilityCourt = (e: any) => {
        const value = e?.target?.value;
        
        setSelectedFacilityCourt(value);
        const postData: IBooking = {
            ...shedular?.bookSlot,
            facilityCourt: value,
        }
        dispatch(updateBookingSlots(postData));
    }

    const handleDate = (e: any) => {
        const value = e?.target?.value;

        setDates(value);
        const postData: IBooking = {
            ...shedular?.bookSlot,
            shedular: value,
        }
        dispatch(updateBookingSlots(postData));
    }

    const onTimeChange = (e: any) => {

        const time = e?.target?.value;

        const postData: IBooking = {
            ...shedular?.bookSlot,
            shedular: time,
        }
        setSelectedTime(time);
        dispatch(updateBookingSlots(postData));
        console.log(time)
    };

    // const formValueChange = (e: any) => {
    //     let field: string = "";
    //     let value: any;
    //     if (e?.target && e?.target?.type === "checkbox") {
    //         field = e?.target?.name;
    //         value = e?.target?.checked;
    //     } else {
    //         field = e?.target?.id;
    //         value = e?.target?.value;
    //     }
    //     if (field === filedName.facilities) {
    //         setSelectedValue(value);
    //     }
    //     if (field === filedName.facilityCourt) {
    //         setSelectedValue(value);
    //     }

    //     formValChange(field, value);
    // }

    const formValChange = (field: string, value: any) => {
        let errorMsg = "";
        switch (field) {
            case filedName.facilities:
                // errorMsg = nameIsValid(value).errorMsg;
                setFacilityDetail((prev: FacilityFormModel) => ({
                    ...prev,
                    [filedName.facilities]: value,
                    // isError: {
                    //     ...prev.isError,
                    //     [filedName.facilities]: errorMsg,
                    // },
                }));
                break;
            case filedName.facilityCourt:
                setFacilityDetail((prev: FacilityFormModel) => ({
                    ...prev,
                    [filedName.facilityCourt]: value,
                    isError: {
                        ...prev.isError,
                        [filedName.facilityCourt]: errorMsg,
                    },
                }));
                break;
            default:
                break;
        }
    };




    useEffect(() => {
        dispatch(fetchFacilityRequest(filter))

    }, [])

    useEffect(() => {
        dispatch(fetchFacilityCourtsRequest(filter))
    }, [])



    return (
        <>
            <div className="facility-type-list-app">
                <div className="facility-type-list-app ">
                    <Card
                        title={
                            <>
                                <Link to={`${ROUTE_URL.GYMKHANACLUB.FACILITY_BOOK_SLOTS.BASE}`}>
                                    <span className="icon" title="Navigate Back">
                                        <i className="pi pi-fw pi-arrow-left"></i>
                                    </span>
                                </Link>
                                <span className="p-2">
                                    {/* {id ? "Edit Facility Type: " + facilityTypeDetail?.name : "Create New Facility Type"} */}
                                </span>
                            </>
                        }>
                        <>
                            <form>
                                <div className="row">
                                    <div className="col-6">
                                        <div className=" flex flex-wrap gap-3 p-fluid pb-4">
                                            <div className="flex-auto">
                                                <label htmlFor="calendar-12h" className="font-bold block mb-2">
                                                    12h Format
                                                </label>
                                                <Calendar value={dates}
                                                    onChange={handleDate}
                                                    selectionMode="multiple" readOnlyInput showIcon />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        {
                                            dates &&
                                            dates.map((x: any) => (
                                                <>
                                                    <p className="badge rounded-pill row" >
                                                        {x.toDateString()}
                                                    </p>
                                                    <div className="">
                                                        <Chip label={x.toDateString()}/>

                                                    </div>
                                                </>
                                            ))
                                        }
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className=" flex justify-content-center">
                                                <div className="flex flex-column gap-3">
                                                    {time.map((x) => {
                                                        return (
                                                            <div className="flex align-items-center">
                                                                <Checkbox inputId={x.time?.replaceAll(" ", "")} name="time" value={x} onChange={onTimeChange}
                                                                 checked={selectedTime?.some((item) => item.time === x.time)}
                                                                  />
                                                                <label htmlFor={x.time} className="ml-2">
                                                                    {x.time}
                                                                </label>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div>
                                                {selectedTime.map((item) => (
                                                    <div className="l-4 s">
                                                        <Chip label={item.time} className="" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                    <br></br>
                                    <div className="row">
                                    <div className="col-6">
                                    <div className=" flex justify-content-center">
                                        <label htmlFor="facilities" className="font-bold block mb-2">
                                            Facilities
                                        </label>
                                        <select className="form-select"
                                            //  onChange={(e: any) => setSelechedValue(e.target.value)} 
                                            onChange={handleDropdownChange}
                                            value={selectedValue} aria-label="Default select example">
                                            {
                                               facility?.map(item => {
                                                return <option value={item?.id} >{item?.name}</option>

                                            })
                                            }

                                        </select>

                                        {/* <select value={state.result}></select> */}
                                    </div>
                                    </div>
                                    <div className="col-6">
                                    <div>
                                    <p>{selectedValue}</p>
                                    </div>
                                    </div>
                                    </div>
                                    <br />
                                     <div className="row">
                                     <div className="col-6">
                                      <div className=" flex justify-content-center">
                                        <label htmlFor="facilityCourt" className="font-bold bolck mb-2">
                                            Facility Court
                                        </label>
                                        <select className="form-select" 
                                        onChange={handleDropdownChangeFacilityCourt}
                                         value={selectedFacilityCourt} aria-label="Default select example">
                                            {
                                                facilityCourts?.map(item => {
                                                    return <option value={item?.id} >{item?.courtName}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                     </div>
                                      <div className="col-6">
                                      <p>{selectedFacilityCourt}</p>
                                      </div> 
                                     </div>   
                                   
                                </div>




                                <br></br>
                                {
                                    <Link to={`${ROUTE_URL.GYMKHANACLUB.FACILITY_BOOK_SLOTS.BASE}`}>
                                        <Button
                                            className=" float-end"
                                            label="Next"
                                            icon="pi pi-plus"
                                            size="small"
                                        />
                                    </Link>
                                }
                            </form>
                        </>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default BookSlotsEditApp;