import { Card } from "primereact/card";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ROUTE_URL } from "../../../../../auth/constants/routes.const";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../../../store/reducers/root.reducer";
import { useEffect, useState } from "react";
import { FacilityTypeFormModel, FacilityTypeModel } from "../../../../../../interfaces/facilityType.model";
import { fetchFacilityTypeRequest, resetDeleteFacilityType, resetUpdateFacilityType, updateFacilityTypeRequest } from "../../store/actions/facilityType.action";
import { minimumCharValidation } from "../../../../../../utils/validation.util";
import { TabPanel, TabView } from "primereact/tabview";
import { InputText } from "primereact/inputtext";
import SaveLoaderButtonApp from "../../../../../ui/save-loader-button/save-loader-button";
import { Checkbox } from "primereact/checkbox";
import MessagesApp from "../../../../../ui/messages/messages";

const FacilityTypeEditApp = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const facilityTypeUpdate = useSelector(
    (x: AppState) => x.gymkhana.facilitiesType.update
  );

  const { tenants } = useSelector((x: AppState) => x.administration);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [facilityTypeDetail, setFacilityTypeDetail] = useState<FacilityTypeFormModel>(
    new FacilityTypeFormModel()
  );

  const { isError, fieldName } = facilityTypeDetail;

  useEffect(() => {
    if (id) {
      dispatch(fetchFacilityTypeRequest(id));
    }
  }, []);

  const postUpdateFacilityTypeDetail = () => {
    let tenantId: any;

    if (id) {
      tenantId = facilityTypeDetail?.tenantId ? facilityTypeDetail?.tenantId : null;

    } else {
      tenantId = tenants?.globalSelectedTenant
        ? tenants?.globalSelectedTenant
        : null;
    }

    const facilityTypeDetailPostData: FacilityTypeModel = {
      id: id ?? undefined,
      tenantId: tenantId ?? undefined,
      name: facilityTypeDetail?.name,
    }

    dispatch(updateFacilityTypeRequest(facilityTypeDetailPostData))
  }


  // NOTE: Use this only for Navigation once form submitted
  useEffect(() => {
    if (!facilityTypeUpdate?.pending && !facilityTypeUpdate?.error?.length && isSubmitted) {
      navigate(ROUTE_URL.GYMKHANACLUB.ADMIN.FACILITY_TYPE.BASE);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [facilityTypeUpdate?.pending]);

  useEffect(() => {
    if (facilityTypeUpdate?.result) {
      setFacilityTypeDetail((prev) => ({
        ...prev,
        ...facilityTypeUpdate?.result,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [facilityTypeUpdate?.result]);

  const closeError = () => {
    dispatch(resetDeleteFacilityType());
  };

  useEffect(() => {
    dispatch(resetUpdateFacilityType());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (formValid()) {
      postUpdateFacilityTypeDetail();
    }
    setIsSubmitted(true);
  };


  const formValid = () => {
    let isValid = false;
    // NOTE: Add further validations here as AND condition
    if (nameIsValid(facilityTypeDetail.name).isValid) {
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
    formValChange(field, value);
  };


  const formValChange = (field: string, value: any) => {
    let errorMsg = "";
    switch (field) {
      case fieldName.name:
        errorMsg = nameIsValid(value).errorMsg;
        setFacilityTypeDetail((prev: FacilityTypeFormModel) => ({
          ...prev,
          [fieldName.name]: value,
          isError: {
            ...prev.isError,
            [fieldName.name]: errorMsg,
          },
        }));
        break;
      default:
        break;
    }
  };


  return (
    <>
      <div className="facility-type-list-app">
        <div className="facility-type-list-app">
          <Card
            title={
              <>
                <Link to={`${ROUTE_URL.GYMKHANACLUB.ADMIN.FACILITY_TYPE.BASE}`}>
                  <span className="icon" title="Navigate Back">
                    <i className="pi pi-fw pi-arrow-left"></i>
                  </span>
                </Link>
                <span className="p-2">
                  {id ? "Edit Facility Type: " + facilityTypeDetail?.name : "Create New Facility Type"}
                </span>
              </>
            }>
            <>
              <form onSubmit={onSubmit} noValidate>
              {facilityTypeUpdate?.error &&
                      facilityTypeUpdate?.error?.map((error: string) => (
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
                          Facility Type name *
                        </label>
                        <InputText
                          id={fieldName.name}
                          value={facilityTypeDetail?.name ?? ""}
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
                </div>

                <div className="user-edit-footer float-end">
                  <SaveLoaderButtonApp
                    type="submit"
                    label={"Save"}
                    icon="pi pi-save"
                    size="small"
                    disabled={!formValid() || facilityTypeUpdate?.pending}
                    enableLoader={facilityTypeUpdate?.pending}
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

export default FacilityTypeEditApp;

