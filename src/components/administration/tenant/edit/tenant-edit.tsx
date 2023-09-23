import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import { AppState } from "../../../../store/reducers/root.reducer";
import {
  ITenantFormModel,
  ITenantModel,
} from "../../../../interfaces/tenant.model";
import { ROUTE_URL } from "../../../auth/constants/routes.const";
import { TabPanel, TabView } from "primereact/tabview";
import MessagesApp from "../../../ui/messages/messages";
import { Checkbox } from "primereact/checkbox";
import SaveLoaderButtonApp from "../../../ui/save-loader-button/save-loader-button";
import { updateTenantRequest } from "../../store/actions/tenant.action";

const TenantEditApp = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const tenants = useSelector((x: AppState) => x.administration.tenants);

  const [tenantDetail, setTenantDetail] = useState<ITenantFormModel>({
    id: "",
    name: "",
    displayName: "",
    isActive: true,
    isError: {
      id: "",
      name: "",
      displayName: "",
    },
    fieldName: {
      id: "id",
      name: "name",
      displayName: "displayName",
      isActive: "isActive",
    },
  });
  const { isError, fieldName } = tenantDetail;
  const [saveError, setSaveError] = useState<string>();

  useEffect(() => {
    if (id) {
      fetchTenantDetail(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    setSaveError(tenants.update.error);
  }, [tenants.update.error]);

  const fetchTenantDetail = (id: any) => {
    fetch("/mock/tenants.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBdmFuaSIsImV4cCI6MTY5MDM4OTA2OCwiaWF0IjoxNjkwMzUzMDY4fQ.uPxNE6IanMeAVziXYCFzBmydcw2EXUvIEgLJha4GVIU",
      },
    })
      .then((res) => res.json())
      .then((json: any) => {
        const tenant = json?.items?.find((x: any) => x.id === +id);
        console.log(tenant);
        setTenantDetail((prev) => ({
          ...prev,
          ...tenant
        }));
      });
  };

  const updateTenantDetail = () => {
    const tenant: ITenantModel = tenantDetail;
    dispatch(updateTenantRequest(tenant));
  };

  const closeError = () => {
    // dispatch(resetDeleteTenant());
  };

  //#region Form operation
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (formValid()) {
      console.log(tenantDetail);
      updateTenantDetail();
    } else {
      console.log("Form is invalid!");
    }
  };

  const formValid = () => {
    let isValid = false;
    Object.values(tenantDetail?.isError).forEach((val: string) => {
      if (val.length > 0) {
        isValid = false;
      } else {
        isValid = true;
      }
    });

    // NOTE: Add further validations here as AND condition
    if (nameIsValid(tenantDetail.name).isValid) {
      isValid = true;
    } else {
      isValid = false;
    }

    return isValid;
  };

  /**
   * NOTE: Name validation
   */
  const nameIsValid = (tenantName: string) => {
    if (tenantName.length < 3 || tenantName.length === 0) {
      return { isValid: false, errorMsg: "Atleast 3 characaters required" };
    } else {
      return { isValid: true, errorMsg: "" };
    }
  };

  const onFormValChange = (e: any) => {
    let field: string = "";
    let value: any;
    if (e?.target && e?.target?.type === "checkbox") {
      field = e?.target?.name;
      value = e?.target?.checked;
    } else {
      field = e?.currentTarget?.id;
      value = e?.currentTarget?.value;
    }

    const formValChange = (field: string, value: any) => {
      let errorMsg = "";
      switch (field) {
        case fieldName.name:
          errorMsg = nameIsValid(value).errorMsg;
          setTenantDetail((prev: ITenantFormModel) => ({
            ...prev,
            name: value,
            isError: {
              ...prev.isError,
              name: errorMsg,
            },
          }));
          break;
        case fieldName.displayName:
          // errorMsg = tenantNameIsValid(value).errorMsg;
          setTenantDetail((prev: ITenantFormModel) => ({
            ...prev,
            displayName: value,
            isError: {
              ...prev.isError,
              surname: errorMsg,
            },
          }));
          break;
        case fieldName.isActive:
          setTenantDetail((prev: ITenantFormModel) => ({
            ...prev,
            isActive: value,
          }));
          break;
        default:
          break;
      }
    };

    formValChange(field, value);
  };
  //#endregion

  return (
    <>
      <div className="tenant-list-app">
        <Card
          title={
            <>
              <Link to={`${ROUTE_URL.ADMIN.TENANT.BASE}`}>
                <span className="icon" title="Navigate Back">
                  <i className="pi pi-fw pi-arrow-left"></i>
                </span>
              </Link>
              <span className="p-2">
                {id
                  ? "Edit Tenant: " + tenantDetail?.name
                  : "Create new tenant"}
              </span>
            </>
          }
        >
          <>
            <form onSubmit={onSubmit} noValidate>
              <TabView>
                <TabPanel
                  leftIcon="pi pi-fw pi-briefcase me-2"
                  header="Tenant Information"
                >
                  {tenants.update.error && (
                    <MessagesApp
                      type="alert-danger"
                      message={tenants.update.error}
                      close={closeError}
                    />
                  )}
                  <div className="m-0 mt-3">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="d-flex flex-column gap-2">
                          <label
                            htmlFor={fieldName.name}
                            className={
                              isError.name.length > 0
                                ? "is-invalid p-error"
                                : ""
                            }
                          >
                            Name *
                          </label>
                          <InputText
                            id={fieldName.name}
                            value={tenantDetail?.name ?? ""}
                            onChange={onFormValChange}
                            className={
                              isError.name.length > 0 ? "p-invalid" : ""
                            }
                            required
                          />
                          <small className="p-error">{isError.name}</small>
                        </div>
                      </div>
                      <div className="col-sm-12 pt-3">
                        <div className="d-flex flex-column gap-2">
                          <label
                            htmlFor={fieldName.displayName}
                            className={
                              isError.displayName.length > 0
                                ? "is-invalid p-error"
                                : ""
                            }
                          >
                            Display name *
                          </label>

                          <InputText
                            id={fieldName.displayName}
                            value={tenantDetail?.displayName ?? ""}
                            onChange={onFormValChange}
                            className={
                              isError.displayName.length > 0 ? "p-invalid" : ""
                            }
                            required
                          />
                          <small className="p-error">
                            {isError.displayName}
                          </small>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <div className="mt-3 mb-3">
                            <Checkbox
                              inputId={fieldName.isActive}
                              name={fieldName.isActive}
                              value={tenantDetail.isActive}
                              onChange={onFormValChange}
                              checked={tenantDetail.isActive}
                            ></Checkbox>
                            <label
                              htmlFor={fieldName.isActive}
                              className="ms-2"
                            >
                              <figcaption>
                                Active
                                <span className="inline-sub-title ms-2">
                                  - tenant activation status
                                </span>
                              </figcaption>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel
                  leftIcon="pi pi-tenant me-2"
                  header="Roles"
                  rightIcon={
                    <>
                      <Badge
                        value={tenantDetail?.isActive ? "Active" : "InActive"}
                      ></Badge>
                    </>
                  }
                >
                  hi
                </TabPanel>
              </TabView>

              <div className="tenant-edit-footer float-end">
                <SaveLoaderButtonApp
                  type="submit"
                  label={"Save"}
                  icon="pi pi-save"
                  size="small"
                  disabled={!formValid()}
                  enableLoader={tenants.update.pending}
                />
              </div>
            </form>
          </>
          <br />
        </Card>
      </div>
    </>
  );
};

export default TenantEditApp;
