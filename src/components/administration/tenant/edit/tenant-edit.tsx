import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { Card } from "primereact/card";
import { TabView, TabPanel } from "primereact/tabview";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { AppState } from "../../../../store/reducers/root.reducer";
import {
  TenantFormModel,
  TenantModel,
} from "../../../../interfaces/tenant.model";
import {
  fetchTenantRequest,
  resetDeleteTenant,
  resetUpdateTenant,
  updateTenantsRequest,
} from "../../store/actions/tenant.action";
import { ROUTE_URL } from "../../../auth/constants/routes.const";
import SaveLoaderButtonApp from "../../../ui/save-loader-button/save-loader-button";
import MessagesApp from "../../../ui/messages/messages";
import PermissionsApp from "../../permissions/permissions";
import { Badge } from "primereact/badge";
import { LOADING } from "../../../../constants/global-contants/global-key.const";

const TenantEditApp = () => {
  //#region variables
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tenantUpdate = useSelector(
    (x: AppState) => x.administration.tenants.update
  );
  const pages = useSelector((x: AppState) => x.pages.result);
  const pageActions = useSelector((x: AppState) => x.actions.result);

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [permissionList, setPermissionList] = useState<any[]>([]);
  const [selectedPermissionList, setSelectedPermissionList] = useState<any[]>(
    []
  );

  const [tenantDetail, setTenantDetail] = useState<TenantFormModel>(
    new TenantFormModel()
  );
  const { isError, fieldName } = tenantDetail;

  //#endregion

  //#region Methods

  useEffect(() => {
    if (id) {
      dispatch(fetchTenantRequest(id));
    }
    dispatch(resetUpdateTenant());
    setPermissionList(preparePermissionData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // NOTE: Use this only for Navigation once form submitted
  useEffect(() => {
    if (!tenantUpdate?.pending && !tenantUpdate?.error?.length && isSubmitted) {
      navigate(ROUTE_URL.ADMIN.TENANT.BASE);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tenantUpdate?.pending]);

  useEffect(() => {
    setTenantDetail(new TenantFormModel());
    if (tenantUpdate?.result) {
      setTenantDetail((prev) => ({
        ...prev,
        ...tenantUpdate?.result,
      }));

      // setSelectedPermissionList(
      //   tenantUpdate?.result?.tenantClaims?.map((x) => x.actionId)
      // );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tenantUpdate?.result]);

  /**
   * NOTE: Prepate data for permissions
   * @returns permission tree
   */
  const preparePermissionData = () => {
    const permissions: any[] = [];
    if (pages?.length) {
      pages.forEach((page) => {
        permissions.push({
          ...page,
          label: page.name,
          value: page.id,
          children: pageActions
            ?.filter((x) => x.pageId === page.id)
            ?.map((pageAction) => {
              return {
                ...pageAction,
                label: pageAction.name,
                value: pageAction.id,
                children: null,
              };
            }),
        });
      });
    }
    return permissions;
  };

  // NOTE: Handle Add/Update both
  const postUpdateTenantDetail = () => {
    let tenantDetailPostData: TenantModel;
    if (id) {
      // NOTE: Update model
      tenantDetailPostData = {
        id: tenantDetail.id,
        tenancyName: tenantDetail.tenancyName,
        name: tenantDetail.name,
        email: tenantDetail.email,
        shouldGenerateRandomPasssword: tenantDetail.shouldGenerateRandomPasssword,
        shouldUseHostDatabase: tenantDetail.shouldUseHostDatabase,
        connectionString: tenantDetail.connectionString,
        contactNumber: tenantDetail.contactNumber,
        edition: tenantDetail.edition,
        address: tenantDetail.address,
        subscriptionEndDate: tenantDetail.subscriptionEndDate,
        isInTrialPeriod: tenantDetail.isInTrialPeriod,
        ShouldChangePasswordOnNextLogin: tenantDetail.ShouldChangePasswordOnNextLogin,
        isActive: tenantDetail.isActive,
      };
    } else {
      // NOTE: Add model
      tenantDetailPostData = {
        tenancyName: tenantDetail.tenancyName,
        name: tenantDetail.name,
        email: tenantDetail.email,
        shouldGenerateRandomPasssword: tenantDetail.shouldGenerateRandomPasssword,
        shouldUseHostDatabase: tenantDetail.shouldUseHostDatabase,
        connectionString: tenantDetail.connectionString,
        contactNumber: tenantDetail.contactNumber,
        edition: tenantDetail.edition,
        address: tenantDetail.address,
        subscriptionEndDate: tenantDetail.subscriptionEndDate,
        isInTrialPeriod: tenantDetail.isInTrialPeriod,
        ShouldChangePasswordOnNextLogin: tenantDetail.ShouldChangePasswordOnNextLogin,
        isActive: tenantDetail.isActive,
      };
      // tenantDetailPostData = {
      //   name: tenantDetail.name,
      //   tenantClaims: tenantDetail.tenantClaims.map((x) => {
      //     return {
      //       actionId: x.actionId,
      //       claimType: x.claimType,
      //       claimValue: x.claimValue,
      //     } as ITenantClaimsModel;
      //   }),
      //   userTenants: [],
      // };
    }
    dispatch(updateTenantsRequest(tenantDetailPostData));
  };

  const closeError = () => {
    dispatch(resetDeleteTenant());
  };

  const onSelectionChange = (selectedNodes: any[]) => {
    setSelectedPermissionList(selectedNodes);

    // NOTE: Prepare POST data
    setTenantDetail((prev) => ({
      ...prev,
      tenantClaims: selectedNodes.map((x) => {
        return {
          actionId: pageActions?.find((action) => action.id === x)?.id,
          claimType: pageActions?.find((action) => action.id === x)?.code,
          claimValue: "",
          tenantId: tenantDetail?.id,
        } as any;
      }),
    }));
  };

  //#region Form operation
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (formValid()) {
      postUpdateTenantDetail();
    }
    setIsSubmitted(true);
  };

  //#region - Validion rules
  /**
   * NOTE: Tenant name validation
   */
  const tenantNameIsValid = (tenantName: string) => {
    if (tenantName.length < 3 || tenantName.length === 0) {
      return { isValid: false, errorMsg: "Atleast 3 characaters required" };
    } else {
      return { isValid: true, errorMsg: "" };
    }
  };
  //#endregion

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
    if (tenantNameIsValid(tenantDetail.name).isValid) {
      isValid = true;
    } else {
      isValid = false;
    }

    return isValid;
  };

  const formValChange = (field: string, value: any) => {
    let errorMsg = "";
    switch (field) {

      case fieldName?.tenancyName:
        setTenantDetail((prev: TenantFormModel) => ({
          ...prev,
          [fieldName?.tenancyName]: value,
        }));
        break;

      case fieldName?.name:
        errorMsg = tenantNameIsValid(value).errorMsg;
        setTenantDetail((prev: TenantFormModel) => ({
          ...prev,
          [fieldName?.name]: value,
          isError: {
            ...prev.isError,
            name: errorMsg,
          },
        }));
        break;

      case fieldName?.email:
        errorMsg = tenantNameIsValid(value).errorMsg;
        setTenantDetail((prev: TenantFormModel) => ({
          ...prev,
          [fieldName?.email]: value,
          isError: {
            ...prev.isError,
            email: errorMsg,
          },
        }));
        break;

      case fieldName?.shouldGenerateRandomPasssword:
        setTenantDetail((prev: TenantFormModel) => ({
          ...prev,
          [fieldName?.shouldGenerateRandomPasssword]: value,
        }));
        break;

      case fieldName?.shouldUseHostDatabase:
        setTenantDetail((prev: TenantFormModel) => ({
          ...prev,
          [fieldName?.shouldUseHostDatabase]: value,
        }));
        break;

      case fieldName?.connectionString:
        setTenantDetail((prev: TenantFormModel) => ({
          ...prev,
          [fieldName?.connectionString]: value,
        }));
        break;

      case fieldName?.contactNumber:
        setTenantDetail((prev: TenantFormModel) => ({
          ...prev,
          [fieldName?.contactNumber]: value,
        }));
        break;

      case fieldName?.edition:
        setTenantDetail((prev: TenantFormModel) => ({
          ...prev,
          [fieldName?.edition]: value,
        }));
        break;

      case fieldName?.address:
        setTenantDetail((prev: TenantFormModel) => ({
          ...prev,
          [fieldName?.address]: value,
        }));
        break;

      case fieldName?.subscriptionEndDate:
        setTenantDetail((prev: TenantFormModel) => ({
          ...prev,
          [fieldName?.subscriptionEndDate]: value,
        }));
        break;

      case fieldName?.isInTrialPeriod:
        setTenantDetail((prev: TenantFormModel) => ({
          ...prev,
          [fieldName?.isInTrialPeriod]: value,
        }));
        break;

      case fieldName?.ShouldChangePasswordOnNextLogin:
        setTenantDetail((prev: TenantFormModel) => ({
          ...prev,
          [fieldName?.ShouldChangePasswordOnNextLogin]: value,
        }));
        break;

      case fieldName?.isActive:
        setTenantDetail((prev: TenantFormModel) => ({
          ...prev,
          [fieldName?.isActive]: value,
        }));
        break;

      default:
        break;
    }
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

  //#endregion

  //#endregion

  return (
    <div className="tenant-list-app">
      {tenantUpdate.pending && !isSubmitted ? (
        LOADING
      ) : (
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
                <TabPanel header="Tenant" leftIcon="pi pi-fw pi-briefcase me-2">
                  {tenantUpdate?.error &&
                    tenantUpdate?.error?.map((error: string) => (
                      <MessagesApp
                        type="alert-danger"
                        message={error}
                        close={closeError}
                        key={error}
                      />
                    ))}

                  <div className="m-0 mt-3">
                    <div className="row">
                      <div className="col-sm-12">
                        <div
                          className={
                            "d-flex flex-column gap-2 " + fieldName?.tenancyName
                          }
                        >
                          <label
                            htmlFor={fieldName?.tenancyName}
                            className={
                              isError.tenancyName.length > 0
                                ? "is-invalid p-error"
                                : ""
                            }
                          >
                            Tenancy name *
                          </label>
                          <InputText
                            id={fieldName?.tenancyName}
                            value={tenantDetail?.tenancyName ?? ""}
                            onChange={onFormValChange}
                            className={
                              isError.tenancyName.length > 0 ? "p-invalid" : ""
                            }
                            required
                          />
                          <small className="p-error">{isError.tenancyName}</small>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div
                          className={
                            "d-flex flex-column gap-2 " + fieldName?.name
                          }
                        >
                          <label
                            htmlFor={fieldName?.name}
                            className={
                              isError.name.length > 0
                                ? "is-invalid p-error"
                                : ""
                            }
                          >
                            Name *
                          </label>
                          <InputText
                            id={fieldName?.name}
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
                      <div className="form-group">
                        <div className="mt-3 mb-3">
                          <Checkbox
                            inputId={fieldName?.shouldUseHostDatabase}
                            name={fieldName?.shouldUseHostDatabase}
                            value={tenantDetail?.shouldUseHostDatabase ? true : false}
                            onChange={onFormValChange}
                            checked={tenantDetail?.shouldUseHostDatabase ? true : false}
                          ></Checkbox>
                          <label htmlFor={fieldName?.shouldUseHostDatabase} className="ms-2">
                            <figcaption>
                              Host Database
                              <span className="inline-sub-title ms-2">
                                Use host database.
                              </span>
                            </figcaption>
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div
                          className={
                            "d-flex flex-column gap-2 " + fieldName?.email
                          }
                        >
                          <label
                            htmlFor={fieldName?.email}
                            className={
                              isError.email.length > 0
                                ? "is-invalid p-error"
                                : ""
                            }
                          >
                            Admin email *
                          </label>
                          <InputText
                            id={fieldName?.email}
                            value={tenantDetail?.email ?? ""}
                            onChange={onFormValChange}
                            className={
                              isError.email.length > 0 ? "p-invalid" : ""
                            }
                            required
                          />
                          <small className="p-error">{isError.email}</small>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">
                          <div className="mt-3 mb-3">
                            <Checkbox
                              inputId={fieldName?.shouldGenerateRandomPasssword}
                              name={fieldName?.shouldGenerateRandomPasssword}
                              value={tenantDetail?.shouldGenerateRandomPasssword ? true : false}
                              onChange={onFormValChange}
                              checked={tenantDetail?.shouldGenerateRandomPasssword ? true : false}
                              disabled
                            ></Checkbox>
                            <label
                              htmlFor={fieldName?.shouldGenerateRandomPasssword}
                              className="ms-2"
                            >
                              <figcaption>
                                Password
                                <span className="inline-sub-title ms-2">
                                  Generate random password.
                                </span>
                              </figcaption>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div
                          className={
                            "d-flex flex-column gap-2 " + fieldName?.contactNumber
                          }
                        >
                          <label
                            htmlFor={fieldName?.contactNumber}
                            className={
                              isError.contactNumber.length > 0
                                ? "is-invalid p-error"
                                : ""
                            }
                          >
                            Contact Number
                          </label>
                          <InputText
                            id={fieldName?.contactNumber}
                            type="text"
                            pattern="[0-9]*"
                            value={tenantDetail?.contactNumber ?? ""}
                            onChange={onFormValChange}
                            className={
                              isError.contactNumber.length > 0 ? "p-invalid" : ""
                            }
                            required
                          />
                          <small className="p-error">{isError.contactNumber}</small>
                        </div>
                      </div>

                      <div className="col-sm-12">
                        <div
                          className={
                            "d-flex flex-column gap-2 " + fieldName?.edition
                          }
                        >
                          <label
                            htmlFor={fieldName?.edition}
                            className={
                              isError.edition.length > 0
                                ? "is-invalid p-error"
                                : ""
                            }
                          >
                            Edition
                          </label>
                          <InputText
                            id={fieldName?.edition}
                            value={tenantDetail?.edition ?? ""}
                            onChange={onFormValChange}
                            className={
                              isError.edition.length > 0 ? "p-invalid" : ""
                            }
                            required
                          />
                          <small className="p-error">{isError.edition}</small>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div
                          className={
                            "d-flex flex-column gap-2 " + fieldName?.subscriptionEndDate
                          }
                        >
                          <label
                            htmlFor={fieldName?.subscriptionEndDate}
                            className={
                              isError.subscriptionEndDate.length > 0
                                ? "is-invalid p-error"
                                : ""
                            }
                          >
                            Subscription end date (UTC)*
                          </label>
                          <InputText
                            id={fieldName?.subscriptionEndDate}
                            value={tenantDetail?.subscriptionEndDate ?? ""}
                            onChange={onFormValChange}
                            type="date"
                            className={
                              isError.subscriptionEndDate.length > 0 ? "p-invalid" : ""
                            }
                            required
                          />
                          <small className="p-error">{isError.subscriptionEndDate}</small>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="mt-3 mb-3">
                        <Checkbox
                          inputId={fieldName?.isInTrialPeriod}
                          name={fieldName?.isInTrialPeriod}
                          value={tenantDetail?.isInTrialPeriod ? true : false}
                          onChange={onFormValChange}
                          checked={tenantDetail?.isInTrialPeriod ? true : false}
                        ></Checkbox>
                        <label htmlFor={fieldName?.isInTrialPeriod} className="ms-2">
                          <figcaption>
                            Trial Period
                            <span className="inline-sub-title ms-2">
                              Is in trial period ?
                            </span>
                          </figcaption>
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="mt-3 mb-3">
                        <Checkbox
                          inputId={fieldName?.ShouldChangePasswordOnNextLogin}
                          name={fieldName?.ShouldChangePasswordOnNextLogin}
                          value={tenantDetail?.ShouldChangePasswordOnNextLogin ? true : false}
                          onChange={onFormValChange}
                          checked={tenantDetail?.ShouldChangePasswordOnNextLogin ? true : false}
                        ></Checkbox>
                        <label htmlFor={fieldName?.ShouldChangePasswordOnNextLogin} className="ms-2">
                          <figcaption>
                            Change password
                            <span className="inline-sub-title ms-2">
                              Should change password in next login.
                            </span>
                          </figcaption>
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="mt-3 mb-3">
                        <Checkbox
                          inputId={fieldName?.isActive}
                          name={fieldName?.isActive}
                          value={tenantDetail?.isActive ? true : false}
                          onChange={onFormValChange}
                          checked={tenantDetail?.isActive ? true : false}
                        ></Checkbox>
                        <label htmlFor={fieldName?.isActive} className="ms-2">
                          <figcaption>
                            Active
                            <span className="inline-sub-title ms-2">
                              Keep the Tenant as active.
                            </span>
                          </figcaption>
                        </label>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel
                  leftIcon="pi pi-user me-2"
                  header="Permissions"
                  rightIcon={
                    <>
                      <Badge value={0}></Badge>
                    </>
                  }
                >
                  <PermissionsApp
                    nodes={permissionList}
                    selectedNodes={selectedPermissionList}
                    onSelectionChange={onSelectionChange}
                  />
                </TabPanel>
              </TabView>

              <div className="tenant-edit-footer float-end">
                <SaveLoaderButtonApp
                  type="submit"
                  label={"Save"}
                  icon="pi pi-save"
                  size="small"
                  disabled={!formValid() || tenantUpdate.pending}
                  enableLoader={tenantUpdate.pending}
                />
              </div>
            </form>
          </>
          <br />
        </Card>
      )}
    </div>
  );
};

export default TenantEditApp;
