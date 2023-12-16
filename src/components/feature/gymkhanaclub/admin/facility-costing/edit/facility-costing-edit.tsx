import { useDispatch, useSelector } from "react-redux";
import "./facility-costing-edit.scss";
import { AppState } from "../../../../../../store/reducers/root.reducer";
import { useEffect, useState } from "react";
import { fetchFacilitiesTypeRequest } from "../../store/actions/facilityType.action";
import { FacilityTypeFormModel, IFacilityTypeRequestModel } from "../../../../../../interfaces/facilityType.model";
import { Dropdown } from "primereact/dropdown";
import axios from "axios";
import { stat } from "fs";
import { useNavigate, useParams } from "react-router";
import { fetchFacilityCourtRequest, resetDeleteFacilityCourt, resetUpdateFacilityCourt, updateFacilityCourtRequest } from "../../store/actions/facilityCourt.action";
import { ROUTE_URL } from "../../../../../auth/constants/routes.const";
import { Link } from "react-router-dom";
import { Card } from "primereact/card";
import { FacilityCourtFormModel, FacilityCourtModel, IFacilityCourtRequestModel } from "../../../../../../interfaces/facility-court.model";
import { minimumCharValidation } from "../../../../../../utils/validation.util";
import { InputText } from "primereact/inputtext";
import SaveLoaderButtonApp from "../../../../../ui/save-loader-button/save-loader-button";
import { fetchFacilityRequest } from "../../store/actions/facility.action";
import MessagesApp from "../../../../../ui/messages/messages";
import { IBookSloatRequestModel } from "../../../../../../interfaces/book-facility.model";
import { AppStore } from "../../../../../../interfaces/generic.model";
import { toggleCheckbox } from "../../store/actions/book-slots.action";

const FacilityCostingEditApp = () => {


    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const facilityCourtUpdate = useSelector((x: AppState) => x.gymkhana.facilityCourts.update);
    const facility = useSelector((x: AppState) => x.gymkhana.facility)

    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [selectedDropdown, setSelectedDropdown] = useState('');

    const [facilityCourtDetail, setFacilitiyCourtDetail] = useState<FacilityCourtFormModel>(
        new FacilityCourtFormModel()

    );
    const { tenants } = useSelector((x: AppState) => x.administration);
    const { globalSelectedTenant } = useSelector(
        (x: AppState) => x.administration.tenants
    );
    const [filter, setFilter] = useState<IFacilityCourtRequestModel>({
        tenantId: globalSelectedTenant,
        name: "",
        Fields: "",
        OrderBy: "",
        PageSize: 10,
        Skip: 0,
        SearchQuery: "",
    });
    const { isError, fieldName } = facilityCourtDetail




   

    useEffect(() => {
        if (id) {
            dispatch(fetchFacilityCourtRequest(id))
        }
    }, []);

    useEffect(() => {
        dispatch(fetchFacilityRequest(filter))
    }, [filter.tenantId])

    useEffect(() => {
        dispatch(resetUpdateFacilityCourt())
    }, [])

    const closeError = () => {
        dispatch(resetDeleteFacilityCourt())
    }

    const postUpdateFacilityCourtDetail = () => {
        let tenantId: any;
        if (id) {
            tenantId = facilityCourtDetail?.tenantId ? facilityCourtDetail?.tenantId : null;

        } else {
            tenantId = tenants?.globalSelectedTenant
                ? tenants?.globalSelectedTenant
                : null;
        }

        const facilityCourtDetailPostData: FacilityCourtModel = {
            id: id ?? undefined,
            tenantId: tenantId ?? undefined,
            courtName: facilityCourtDetail?.courtName,
            courtNumber: facilityCourtDetail?.courtNumber,
            courtFees: facilityCourtDetail?.courtFees,
            facilitiesId: selectedDropdown,
        }

        dispatch(updateFacilityCourtRequest(facilityCourtDetailPostData))
    };

    // NOTE: Use this only for Navigation once form submitted
    useEffect(() => {
        if (!facilityCourtUpdate?.pending && !facilityCourtUpdate?.error?.length && isSubmitted) {
            navigate(ROUTE_URL.GYMKHANACLUB.ADMIN.FACILITY_COSTING.BASE);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [facilityCourtUpdate?.pending]);

    useEffect(() => {
        if (facilityCourtUpdate?.result) {
            setFacilitiyCourtDetail((prev) => ({
                ...prev,
                ...facilityCourtUpdate?.result,
            }));

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [facilityCourtUpdate?.result]);

    const onSubmit = (e: any) => {
        e.preventDefault();
        if (formValid()) {
            postUpdateFacilityCourtDetail();
        }
        setIsSubmitted(true);
    };

    const formValid = () => {
        let isValid = false;
        Object.values(facilityCourtDetail?.isError).forEach((val: string) => {
            if (val.length > 0) {
                isValid = false;
            } else {
                isValid = true;
            }
        });

        // NOTE: Add further validations here as AND condition
        if (nameIsValid(facilityCourtDetail?.courtName)) {
            isValid = true;
        } else {
            isValid = false;
        }

        return isValid;
    };

    const nameIsValid = (courtName: string) => {
        return minimumCharValidation(3, courtName);
    };

    const onFormValChange = (e: any) => {
        let field: string = "";
        let value: any;
        if (e?.target && e?.target?.type === "checkbox") {
            field = e?.target?.name;
            // field = e?.target?.courtNumber;
            value = e?.target?.checked;
        } else {
            field = e?.target?.id;
            value = e?.target?.value;
        }
        if (field === fieldName.facilitiesId) {
            setSelectedDropdown(value);
        }

        formValChange(field, value);

    };

    const formValChange = (field: string, value: any) => {
        let errorMsg = "";
        switch (field) {
            case fieldName.courtName:
                errorMsg = nameIsValid(value).errorMsg;
                setFacilitiyCourtDetail((prev: FacilityCourtFormModel) => ({
                    ...prev,
                    [fieldName.courtName]: value,
                    isError: {
                        ...prev.isError,
                        [fieldName.courtName]: errorMsg,
                    },
                }));
                break;
            case fieldName.courtNumber:
                errorMsg = nameIsValid(value).errorMsg;
                setFacilitiyCourtDetail((prev: FacilityCourtFormModel) => ({
                    ...prev,
                    [fieldName.courtNumber]: value,
                    isError: {
                        ...prev.isError,
                        [fieldName.courtNumber]: errorMsg,
                    },
                }));
                break;
            case fieldName.courtFees:
                errorMsg = nameIsValid(value).errorMsg;
                setFacilitiyCourtDetail((prev: FacilityCourtFormModel) => ({
                    ...prev,
                    [fieldName.courtFees]: value,
                    isError: {
                        ...prev.isError,
                        [fieldName.courtFees]: errorMsg,
                    },
                }));
                break;
            case fieldName.facilitiesId:
                errorMsg = nameIsValid(value).errorMsg;
                setFacilitiyCourtDetail((prev: FacilityCourtFormModel) => ({
                    ...prev,
                    [fieldName.facilitiesId]: value,
                    isError: {
                        ...prev.isError,
                        [fieldName.facilitiesId]: errorMsg,
                    },
                }));
                break;

            default:
                break;
        }
    };

    return (
        <>
            <div className="user-list-app">
                <div className="user-list-app">
                    <Card
                        title={
                            <>
                                <Link to={`${ROUTE_URL.GYMKHANACLUB.ADMIN.FACILITY_COSTING.BASE}`}>
                                    <span className="icon" title="Navigate Back">
                                        <i className="pi pi-fw pi-arrow-left"></i>
                                    </span>
                                </Link>
                                <span className="p-2">
                                    {id ? "Edit Facility: " + facilityCourtDetail?.courtName : "Create new Facility Court"}
                                </span>
                            </>
                        }
                    >
                        <>
                            <form onSubmit={onSubmit} noValidate>

                                {
                                    facilityCourtUpdate?.error &&
                                    facilityCourtUpdate?.error?.map((error: string) => (
                                        <MessagesApp
                                            type="alert-danger"
                                            message={error}
                                            close={closeError}
                                            key={error}
                                        />
                                    ))}
                                <div className="m-0 mt-3">
                                    <div className="row">
                                        <div className="col-sm-12 pt-3">
                                            <div className="d-flex flex-column gap-3">
                                                <label
                                                    htmlFor={fieldName.courtName}
                                                    className={
                                                        isError.courtName.length > 0
                                                            ? "is-invalid p-error"
                                                            : ""
                                                    }
                                                >
                                                    Facility Court Name *
                                                </label>
                                                <InputText
                                                    id={fieldName.courtName}
                                                    value={facilityCourtDetail?.courtName ?? ""}
                                                    onChange={onFormValChange}
                                                    className={
                                                        isError.courtName.length > 0 ? "p-invalid" : ""
                                                    }
                                                    required
                                                />
                                                <small className="p-error">
                                                    {isError.courtName}
                                                </small>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12 pt-3">
                                            <div className="d-flex flex-column gap-3">
                                                <label
                                                    htmlFor={fieldName.courtNumber}
                                                    className={
                                                        isError.courtName.length > 0
                                                            ? "is-invalid p-error"
                                                            : ""
                                                    }
                                                >
                                                    Facility Court Number *
                                                </label>
                                                <InputText
                                                    id={fieldName.courtNumber}
                                                    value={facilityCourtDetail?.courtNumber ?? ""}
                                                    onChange={onFormValChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12 pt-3">
                                            <div className="d-flex flex-column gap-3">
                                                <label
                                                    htmlFor={fieldName.courtFees}
                                                >
                                                    Facility Court Fees *
                                                </label>
                                                <InputText
                                                    id={fieldName.courtFees}
                                                    value={facilityCourtDetail?.courtFees ?? ""}
                                                    onChange={onFormValChange}
                                                    required
                                                />
                                                <small className="p-error">
                                                    {isError.courtName}
                                                </small>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="d-flex flex-column gap-3">
                                            <label
                                                htmlFor={fieldName.facilitiesId}
                                            // className={
                                            //   isError.facilitiesId.length > 0
                                            //     ? "is-invalid p-error"
                                            //     : ""
                                            // }
                                            >
                                                Facility*
                                            </label>
                                            <select className="col-sm-4 pt-4 rounded " onChange={(e: any) => setSelectedDropdown(e.target.value)} value={selectedDropdown}>
                                                {
                                                    facility?.list?.result?.map((data) => (
                                                        <option className="col-sm-4 rounded facility-option" key={data.id} value={data.id}>
                                                            {data.name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="user-edit-footer float-end">
                                    <SaveLoaderButtonApp
                                        type="submit"
                                        label={"Save"}
                                        icon="pi pi-save"
                                        size="small"
                                        disabled={!formValid() || facilityCourtUpdate?.pending}
                                        enableLoader={facilityCourtUpdate?.pending}
                                    />
                                </div>
                            </form>
                        </>
                        <br />
                    </Card>
                </div>
            </div>

        </>
    )
}

export default FacilityCostingEditApp;