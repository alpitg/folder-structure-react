import { useNavigate, useParams } from "react-router";
import "./facility-edit.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../../../store/reducers/root.reducer";
import { useEffect, useState } from "react";
import { FacilityFormModel, FacilityModel, IFaciliteFormModel, IFacilityModel } from "../../../../../../interfaces/facility.model";
import { fetchFaciliteRequest, resetDeleteFacility, resetUpdateFacility, updateFacilityRequest } from "../../store/actions/facility.action";
import { minimumCharValidation } from "../../../../../../utils/validation.util";
import { TabPanel, TabView } from "primereact/tabview";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { Link } from "react-router-dom";
import { ROUTE_URL } from "../../../../../auth/constants/routes.const";
import SaveLoaderButtonApp from "../../../../../ui/save-loader-button/save-loader-button";
import { Checkbox } from "primereact/checkbox";
import { Dropdown } from "primereact/dropdown";
import { fetchFacilitiesTypeRequest, fetchFacilityTypeRequest } from "../../store/actions/facilityType.action";
import { FacilityTypeFormModel, FacilityTypeModel, IFacilityTypeRequestModel } from "../../../../../../interfaces/facilityType.model";
import FacilitiesItemApp from "../list/item/facility.item";
import MessagesApp from "../../../../../ui/messages/messages";

const FacilityEditApp = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const facilityTypes = useSelector((x: AppState) => x.gymkhana.facilitiesType)
  const faciliteUpdate = useSelector(
    (x: AppState) => x.gymkhana.facility.update);

  const { tenants } = useSelector((x: AppState) => x.administration);
  const { globalSelectedTenant } = useSelector(
    (x: AppState) => x.administration.tenants
  );

  const [selectedDropdown, setSelectedDropdown] = useState('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [facilityTypeDetail, setFacilityTypeDetail] = useState<FacilityTypeFormModel>(
    new FacilityTypeFormModel()
  )
  const [faciliteDetail, setFacilitieDetail] = useState<FacilityFormModel>(
    new FacilityFormModel()

  );
  const [filter, setFilter] = useState<IFacilityTypeRequestModel>({
    tenantId: globalSelectedTenant,
    name: "",
    Fields: "",
    OrderBy: "",
    PageSize: 10,
    Skip: 0,
    SearchQuery: "",
  });
  const { isError, fieldName } = faciliteDetail

  useEffect(() => {
    if (id) {
      dispatch(fetchFaciliteRequest(id));
    }
  }, []);


  useEffect(() => {
    dispatch(fetchFacilitiesTypeRequest(filter));
  }, [filter.tenantId]);

  const closeError = () => {
    dispatch(resetDeleteFacility());
  };

  useEffect(() => {
    dispatch(resetUpdateFacility());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const postUpdateFacilityDetail = () => {
    let tenantId: any;
    if (id) {
      tenantId = faciliteDetail?.tenantId ? faciliteDetail?.tenantId : null;

    } else {
      tenantId = tenants?.globalSelectedTenant
        ? tenants?.globalSelectedTenant
        : null;
    }

    const facilityDetailPostData: FacilityModel = {
      id: id ?? undefined,
      tenantId: tenantId ?? undefined,
      name: faciliteDetail?.name,
      facilityTypeId: selectedDropdown,
      isHavingMultipleCourts: faciliteDetail?.isHavingMultipleCourts,
    }

    dispatch(updateFacilityRequest(facilityDetailPostData))
  };

  // NOTE: Use this only for Navigation once form submitted
  useEffect(() => {
    if (!faciliteUpdate?.pending && !faciliteUpdate?.error?.length && isSubmitted) {
      navigate(ROUTE_URL.GYMKHANACLUB.ADMIN.FACILITY.BASE);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [faciliteUpdate?.pending]);

  useEffect(() => {
    if (faciliteUpdate?.result) {
      setFacilitieDetail((prev) => ({
        ...prev,
        ...faciliteUpdate?.result,
      }));

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [faciliteUpdate?.result]);

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (formValid()) {
      postUpdateFacilityDetail();
    }
    setIsSubmitted(true);
  };

  const formValid = () => {
    let isValid = false;
    Object.values(faciliteDetail?.isError).forEach((val: string) => {
      if (val.length > 0) {
        isValid = false;
      } else {
        isValid = true;
      }
    });

    // NOTE: Add further validations here as AND condition
    if (nameIsValid(faciliteDetail.name).isValid) {
      isValid = true;
    } else {
      isValid = false;
    }

    return isValid;
  };
  const nameIsValid = (name: string) => {
    return minimumCharValidation(3, name);
  };

  const onFormValChange = (e: any) => {
    let field: string = "";
    let value: any;
    if (e?.target && e?.target?.type === "checkbox") {
      field = e?.target?.name;
      value = e?.target?.checked;
    } else {
      field = e?.target?.id;
      value = e?.target?.value;
    }
    if (field === fieldName.facilityTypeId) {
      setSelectedDropdown(value);
    }
    formValChange(field, value);

  };

  const formValChange = (field: string, value: any) => {
    let errorMsg = "";
    switch (field) {
      case fieldName.name:
        errorMsg = nameIsValid(value).errorMsg;
        setFacilitieDetail((prev: FacilityFormModel) => ({
          ...prev,
          [fieldName.name]: value,
          isError: {
            ...prev.isError,
            [fieldName.name]: errorMsg,
          },
        }));
        break;
      case fieldName.facilityTypeId:
        errorMsg = nameIsValid(value).errorMsg;
        setFacilitieDetail((prev: FacilityFormModel) => ({
          ...prev,
          [fieldName.facilityTypeId]: value,
          isError: {
            ...prev.isError,
            [fieldName.facilityTypeId]: errorMsg,
          },
        }));
        break;
      case fieldName?.isHavingMultipleCourts:
        setFacilitieDetail((prev: FacilityFormModel) => ({
          ...prev,
          [fieldName.isHavingMultipleCourts]: value,
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
                <Link to={`${ROUTE_URL.GYMKHANACLUB.ADMIN.FACILITY.BASE}`}>
                  <span className="icon" title="Navigate Back">
                    <i className="pi pi-fw pi-arrow-left"></i>
                  </span>
                </Link>
                <span className="p-2">
                  {id ? "Edit Facility: " + faciliteDetail?.name : "Create new Facility"}
                </span>
              </>
            }
          >
            <>
              <form onSubmit={onSubmit} noValidate>
                {faciliteUpdate?.error &&
                  faciliteUpdate?.error?.map((error: string) => (
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
                          htmlFor={fieldName.name}
                          className={
                            isError.name.length > 0
                              ? "is-invalid p-error"
                              : ""
                          }
                        >
                          Facility name *
                        </label>
                        <InputText
                          id={fieldName.name}
                          value={faciliteDetail?.name ?? ""}
                          onChange={onFormValChange}
                          className={
                            isError.name.length > 0 ? "p-invalid" : ""
                          }
                          required
                        />
                        <small className="p-error">
                          {isError.name}
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="d-flex flex-column gap-3">
                      <label
                        htmlFor={fieldName.facilityTypeId}
                        className={
                          isError.facilityTypeId.length > 0
                            ? "is-invalid p-error"
                            : ""
                        }
                      >
                        Facility Type *
                      </label>
                      <select className="col-sm-4 pt-4 rounded " onChange={(e: any) => setSelectedDropdown(e.target.value)} value={selectedDropdown}>
                        {
                          facilityTypes?.list?.result?.map((data) => (
                            <option className="col-sm-4 rounded facility-option" key={data.id} value={data.id}>
                              {data.name}
                            </option>
                          ))
                        }

                      </select>
                    </div>


                  </div>
                  <div className="form-group">
                    <div className="mt-3 mb-3 mt-4">
                      <Checkbox
                        inputId={fieldName?.isHavingMultipleCourts}
                        name={fieldName?.isHavingMultipleCourts}
                        value={faciliteDetail?.isHavingMultipleCourts}
                        onChange={onFormValChange}
                        checked={faciliteDetail?.isHavingMultipleCourts}
                      ></Checkbox>
                      <label htmlFor={fieldName?.isHavingMultipleCourts} className="ms-2">
                        <figcaption>
                          IsHavingMultipleCourts

                          <span className="inline-sub-title ms-2">
                            IsHavingMultipleCourts
                          </span>
                        </figcaption>
                      </label>
                    </div>
                  </div>

                </div>

                <div className="user-edit-footer float-end">
                  <SaveLoaderButtonApp
                    type="submit"
                    label={"Save"}
                    icon="pi pi-save"
                    size="small"
                    disabled={!formValid() || faciliteUpdate?.pending}
                    enableLoader={faciliteUpdate?.pending}
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

export default FacilityEditApp;