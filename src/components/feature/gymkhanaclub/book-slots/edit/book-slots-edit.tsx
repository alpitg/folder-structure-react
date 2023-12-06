import { useDispatch, useSelector } from "react-redux";
import "./book-slots-edit.scss";
import { useNavigate } from "react-router";
import { Card } from "primereact/card";
import { Link } from "react-router-dom";
import { ROUTE_URL } from "../../../../auth/constants/routes.const";
import { useEffect, useState } from "react";
import { BookSloatFormModel, IBookSloatRequestModel } from "../../../../../interfaces/book-facility.model";
import { Dropdown } from "primereact/dropdown";
import { fetchFacilityRequest } from "../../admin/store/actions/facility.action";
import { AppState } from "../../../../../store/reducers/root.reducer";
import { Calendar } from 'primereact/calendar'
import { InputSwitch } from 'primereact/inputswitch';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { fetchFacilityCourtsRequest } from "../../admin/store/actions/facilityCourt.action";
import { ChildProcess } from "child_process";
import { Chip } from 'primereact/chip';
import { Button } from "primereact/button";

const BookSlotsEditApp = () => {
    const [dates, setDates] = useState<Date[] | null>(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedFacilityCourt, setSelectedFacilityCourt] = useState(null);

    const bookings = [
        {
            "facilities": "cricket",
            "facilityCourt": "court1"
        },
        {
            "selectedSlots": [
                {
                    "date": dates,
                },
                {
                    "date": dates,
                },
            ]

        }
    ];

    const time = [
        {
            "time": "11.00 : 12.00"

        },
        {
            "time": "11.00 : 12.00"

        }

    ]

    console.log(dates);
    console.log(selectedTime);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [bookSloat, setBookSloat] = useState<BookSloatFormModel>(
        new BookSloatFormModel()
    )
    const { isError, filedName } = bookSloat

    const facility = useSelector((x: AppState) => x.gymkhana.facility?.list?.result)
    const facilityCourts = useSelector((x: AppState) => x.gymkhana.facilityCourts?.list?.result);

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

    useEffect(() => {
        dispatch(fetchFacilityRequest(filter))
    }, [])

    useEffect(() => {
        dispatch(fetchFacilityCourtsRequest(filter))
    }, [])

    const handleSelectionChange = (e: any) => {
        setSelectedTime(e.value);
    };
    const handleFacilityCourt = (e: any) => {
        setSelectedFacilityCourt(e.value);
    };
    return (
        <>
            <div className="facility-type-list-app">
                <div className="facility-type-list-app">
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
                                <div className=" flex flex-wrap gap-3 p-fluid pb-4">
                                    <div className="flex-auto">
                                        <label htmlFor="calendar-12h" className="font-bold block mb-2">
                                            12h Format
                                        </label>
                                        <Calendar value={dates}
                                            onChange={(e) => setDates(e.value as null)}
                                            selectionMode="multiple" readOnlyInput showIcon />
                                    </div>
                                </div>

                                <div>
                                    <DataTable value={time} onChange={handleSelectionChange} selection={selectedTime ?? []} selectionMode={'checkbox'}>
                                        <Column selectionMode="multiple"></Column>
                                        <Column field="time" header="Time" />
                                    </DataTable>
                                </div>
                                <br></br>
                                <div className=" flex justify-content-center">
                                <label htmlFor="facilities" className="font-bold block mb-2">
                                            Facilities
                                        </label>
                                    <select className="form-select" aria-label="Default select example">
                                        {
                                            facility?.map(item => {
                                                return <option value={item?.id}>{item?.name}</option>

                                            })
                                        }
                                    </select>
                                </div>
                                <br />

                                <div className=" flex justify-content-center">
                                <label htmlFor="facilityCourt" className="font-bold bolck mb-2">
                                            Facility Court
                                        </label>
                                    <select className="form-select" aria-label="Default select example">
                                        {
                                            facilityCourts?.map(item => {
                                                return <option value={item?.id} onChange={handleFacilityCourt}>{item?.courtName}</option>
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="row">

                                    {
                                        dates &&
                                        dates.map((x: any) => (
                                            <>
                                                <p className="badge rounded-pill" >
                                                    {x.toDateString()}
                                                </p>
                                                <div className="l-4">
                                                <Chip label={x.toDateString()} className="" />
                                                </div>                                            </>
                                        ))
                                    }
                                </div>
                                <div className="row">
                                    {selectedFacilityCourt && (
                                        <> {selectedFacilityCourt}</>
                                    )}
                                </div>
                                <br></br>
                                <div className="mb-4">
                                    <Button label="Next" className="float-end " />

                                </div>
                            </form>
                        </>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default BookSlotsEditApp;