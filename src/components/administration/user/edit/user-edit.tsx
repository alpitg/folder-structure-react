import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import { AppState } from "../../../../store/reducers/root.reducer";
import {
  IUserModel,
  IUserRoleModel,
  UserFormModel,
} from "../../../../interfaces/user.model";
import { ROUTE_URL } from "../../../auth/constants/routes.const";
import { TabPanel, TabView } from "primereact/tabview";
import MessagesApp from "../../../ui/messages/messages";
import { Checkbox } from "primereact/checkbox";
import SaveLoaderButtonApp from "../../../ui/save-loader-button/save-loader-button";
import {
  fetchUserRequest,
  resetDeleteUser,
  resetUpdateUser,
  updateUserRequest,
} from "../../store/actions/user.action";
import { fetchRolesRequest } from "../../store/actions/role.action";
import { fetchTenantsRequest } from "../../store/actions/tenant.action";
import { minimumCharValidation } from "../../../../utils/validation.util";

const UserEditApp = () => {
  //#region variables
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userUpdate = useSelector(
    (x: AppState) => x.administration.users.update
  );
  const roles = useSelector((x: AppState) => x.administration.roles.list);
  const { tenants } = useSelector((x: AppState) => x.administration);

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [userDetail, setUserDetail] = useState<UserFormModel>(
    new UserFormModel()
  );
  const { isError, fieldName } = userDetail;
  //#endregion

  //#region methods
  useEffect(() => {
    if (id) {
      dispatch(fetchUserRequest(id));
    }
    dispatch(fetchRolesRequest());
    dispatch(fetchTenantsRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(resetUpdateUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // NOTE: Use this only for Navigation once form submitted
  useEffect(() => {
    if (!userUpdate?.pending && !userUpdate?.error?.length && isSubmitted) {
      navigate(ROUTE_URL.ADMIN.USER.BASE);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userUpdate?.pending]);

  useEffect(() => {
    setUserDetail((prev) => ({
      ...prev,
      ...userUpdate?.result,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userUpdate?.result]);

  const postUpdateUserDetail = () => {
    let tenantId: any;
    if (id) {
      tenantId = userDetail?.tenantId ? userDetail?.tenantId : null;
    } else {
      tenantId = tenants?.globalSelectedTenant
        ? tenants?.globalSelectedTenant
        : null;
    }
    // const tenantId = id ? userDetail?.tenantId : tenants?.globalSelectedTenant
    const userDetailPostData: IUserModel = {
      id: id ?? "",
      tenantId: tenantId,
      userName: userDetail?.userName,
      email: userDetail?.email,
      firstName: userDetail?.firstName,
      lastName: userDetail?.lastName,
      phoneNumber: userDetail?.phoneNumber,
      address: userDetail?.address,
      password: userDetail?.password,
      isActive: userDetail?.isActive,
      isImageUpdate: userDetail?.isImageUpdate,
      imgSrc: "" as string,
      userRoles: userDetail?.userRoles
        ? userDetail?.userRoles?.map((x) => {
            return { userId: x.userId, roleId: x.roleId } as IUserRoleModel;
          })
        : [],
    };

    // const userDetailPostData = {
    //   id: "",
    //   tenantId: "d8e9a933-5555-42ee-9325-2fc67f0d874a",
    //   userName: "Usertenant1@gmail.com",
    //   email: "Usertenant1@gmail.com",
    //   firstName: "Usertenant1@gmail.com",
    //   lastName: "Usertenant1@gmail.com",
    //   phoneNumber: "1110200045",
    //   address: "Usertenant1@gmail.com",
    //   password: "admin@123",
    //   isActive: true,
    //   isImageUpdate: false,
    //   imgSrc: "",
    //   userRoles: [],
    // };

    dispatch(updateUserRequest(userDetailPostData));
  };

  const closeError = () => {
    dispatch(resetDeleteUser());
  };

  //#region Form operation
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (formValid()) {
      postUpdateUserDetail();
    }
    setIsSubmitted(true);
  };

  const formValid = () => {
    let isValid = false;
    Object.values(userDetail?.isError).forEach((val: string) => {
      if (val.length > 0) {
        isValid = false;
      } else {
        isValid = true;
      }
    });

    // NOTE: Add further validations here as AND condition
    if (nameIsValid(userDetail.firstName).isValid) {
      isValid = true;
    } else {
      isValid = false;
    }

    if (nameIsValid(userDetail.lastName).isValid) {
      isValid = true;
    } else {
      isValid = false;
    }

    return isValid;
  };

  /**
   * NOTE: Name validation
   */
  const nameIsValid = (name: string) => {
    return minimumCharValidation(3, name);
  };

  /**
   * NOTE: emailAddressIsValid validation
   */
  const emailAddressIsValid = (emailAddress: string) => {
    const regex = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
      emailAddress
    );
    if (emailAddress.length === 0 || regex) {
      return { isValid: false, errorMsg: "Email Address is invalid" };
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
      field = e?.target?.id;
      value = e?.target?.value;
    }
    formValChange(field, value);
  };

  const formValChange = (field: string, value: any) => {
    let errorMsg = "";
    switch (field) {
      case fieldName.firstName:
        errorMsg = nameIsValid(value).errorMsg;
        setUserDetail((prev: UserFormModel) => ({
          ...prev,
          [fieldName.firstName]: value,
          isError: {
            ...prev.isError,
            [fieldName.firstName]: errorMsg,
          },
        }));
        break;
      case fieldName.lastName:
        errorMsg = nameIsValid(value).errorMsg;
        setUserDetail((prev: UserFormModel) => ({
          ...prev,
          [fieldName.lastName]: value,
          isError: {
            ...prev.isError,
            [fieldName.lastName]: errorMsg,
          },
        }));
        break;
      case fieldName.password:
        // errorMsg = emailAddressIsValid(value).errorMsg;
        setUserDetail((prev: UserFormModel) => ({
          ...prev,
          [fieldName.password]: value,
          isError: {
            ...prev.isError,
            [fieldName.password]: errorMsg,
          },
        }));
        break;
      case fieldName.email:
        errorMsg = emailAddressIsValid(value).errorMsg;
        setUserDetail((prev: UserFormModel) => ({
          ...prev,
          [fieldName.email]: value,
          [fieldName.userName]: value,
          isError: {
            ...prev.isError,
            [fieldName.email]: errorMsg,
          },
        }));
        break;
      case fieldName.phoneNumber:
        setUserDetail((prev: UserFormModel) => ({
          ...prev,
          [fieldName.phoneNumber]: value,
          isError: {
            ...prev.isError,
            [fieldName.phoneNumber]: errorMsg,
          },
        }));
        break;
      case fieldName.address:
        setUserDetail((prev: UserFormModel) => ({
          ...prev,
          [fieldName.address]: value,
          isError: {
            ...prev.isError,
            [fieldName.address]: errorMsg,
          },
        }));
        break;
      case fieldName.shouldChangePasswordOnNextLogin:
        setUserDetail((prev: UserFormModel) => ({
          ...prev,
          [fieldName.shouldChangePasswordOnNextLogin]: value,
        }));
        break;
      case fieldName.isActive:
        setUserDetail((prev: UserFormModel) => ({
          ...prev,
          [fieldName.isActive]: value,
        }));
        break;
      case fieldName.userRoles:
        setUserDetail((prev: UserFormModel) => ({
          ...prev,
          [fieldName.isActive]: value,
        }));
        break;

      default:
        break;
    }
  };

  /**
   * NOTE: Update the role using this method
   * @param
   */
  const onSelectionChange = (e: any) => {
    if (e?.target?.checked) {
      const newRole: IUserRoleModel[] = [
        { userId: id ?? "", roleId: e?.target?.value },
      ];
      setUserDetail((prev) => ({
        ...prev,
        userRoles: [...(prev?.userRoles ?? []), ...newRole],
      }));
    } else {
      const updatedRole = userDetail?.userRoles?.filter(
        (item) => item.roleId !== e?.target?.value
      );
      setUserDetail((prev) => ({
        ...prev,
        userRoles: updatedRole,
      }));
    }
  };
  //#endregion

  //#endregion

  return (
    <>
      <div className="user-list-app">
        <div className="user-list-app">
          <Card
            title={
              <>
                <Link to={`${ROUTE_URL.ADMIN.USER.BASE}`}>
                  <span className="icon" title="Navigate Back">
                    <i className="pi pi-fw pi-arrow-left"></i>
                  </span>
                </Link>
                <span className="p-2">
                  {id ? "Edit User: " + userDetail?.email : "Create new user"}
                </span>
              </>
            }
          >
            <>
              <form onSubmit={onSubmit} noValidate>
                <TabView>
                  <TabPanel
                    leftIcon="pi pi-fw pi-briefcase me-2"
                    header="User Information"
                  >
                    {userUpdate?.error &&
                      userUpdate?.error?.map((error: string) => (
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
                          <div className="d-flex flex-column gap-2">
                            <label
                              htmlFor={fieldName.firstName}
                              className={
                                isError.firstName.length > 0
                                  ? "is-invalid p-error"
                                  : ""
                              }
                            >
                              First name *
                            </label>
                            <InputText
                              id={fieldName.firstName}
                              value={userDetail?.firstName ?? ""}
                              onChange={onFormValChange}
                              className={
                                isError.firstName.length > 0 ? "p-invalid" : ""
                              }
                              required
                            />
                            <small className="p-error">
                              {isError.firstName}
                            </small>
                          </div>
                        </div>
                        <div className="col-sm-12 pt-3">
                          <div className="d-flex flex-column gap-2">
                            <label
                              htmlFor={fieldName.lastName}
                              className={
                                isError.lastName.length > 0
                                  ? "is-invalid p-error"
                                  : ""
                              }
                            >
                              Last name *
                            </label>
                            <InputText
                              id={fieldName.lastName}
                              value={userDetail?.lastName ?? ""}
                              onChange={onFormValChange}
                              className={
                                isError.lastName.length > 0 ? "p-invalid" : ""
                              }
                              required
                            />
                            <small className="p-error">
                              {isError.lastName}
                            </small>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-12 pt-3">
                          <div className="d-flex flex-column gap-2">
                            <label
                              htmlFor={fieldName.phoneNumber}
                              className={
                                isError.phoneNumber.length > 0
                                  ? "is-invalid p-error"
                                  : ""
                              }
                            >
                              Phone Number
                            </label>
                            <InputText
                              id={fieldName.phoneNumber}
                              value={userDetail?.phoneNumber ?? ""}
                              onChange={onFormValChange}
                              className={
                                isError.phoneNumber.length > 0
                                  ? "p-invalid"
                                  : ""
                              }
                            />
                            <small className="p-error">
                              {isError.phoneNumber}
                            </small>
                          </div>
                        </div>
                        <div className="col-sm-12 pt-3">
                          <div className="d-flex flex-column gap-2">
                            <label
                              htmlFor={fieldName.email}
                              className={
                                isError.email.length > 0
                                  ? "is-invalid p-error"
                                  : ""
                              }
                            >
                              Email *
                            </label>
                            <InputText
                              id={fieldName.email}
                              value={userDetail?.email ?? ""}
                              onChange={id ? undefined : onFormValChange}
                              className={
                                isError.email.length > 0 ? "p-invalid" : ""
                              }
                              required
                              disabled={id ? true : false}
                            />
                            <small className="p-error">{isError.email}</small>
                          </div>
                        </div>

                        {!id && (
                          <div className="col-sm-12 pt-3">
                            <div className="d-flex flex-column gap-2">
                              <label
                                htmlFor={fieldName.password}
                                className={
                                  isError.password.length > 0
                                    ? "is-invalid p-error"
                                    : ""
                                }
                              >
                                Password *
                              </label>
                              <InputText
                                id={fieldName.password}
                                value={userDetail?.password ?? ""}
                                onChange={onFormValChange}
                                className={
                                  isError.password.length > 0 ? "p-invalid" : ""
                                }
                                required
                              />
                              <small className="p-error">
                                {isError.password}
                              </small>
                            </div>
                          </div>
                        )}

                        <div className="col-sm-12 pt-3">
                          <div className="d-flex flex-column gap-2">
                            <label
                              htmlFor={fieldName.address}
                              className={
                                isError.address.length > 0
                                  ? "is-invalid p-error"
                                  : ""
                              }
                            >
                              Address *
                            </label>
                            <InputText
                              id={fieldName.address}
                              value={userDetail?.address ?? ""}
                              onChange={onFormValChange}
                              className={
                                isError.address.length > 0 ? "p-invalid" : ""
                              }
                              required
                            />
                            <small className="p-error">{isError.address}</small>
                          </div>
                        </div>

                        <div className="col-sm-12">
                          <div className="form-group">
                            <div className="mt-3 mb-3">
                              <Checkbox
                                inputId={
                                  fieldName.shouldChangePasswordOnNextLogin
                                }
                                name={fieldName.shouldChangePasswordOnNextLogin}
                                value={
                                  userDetail.shouldChangePasswordOnNextLogin
                                }
                                onChange={onFormValChange}
                                checked={
                                  userDetail.shouldChangePasswordOnNextLogin
                                }
                              ></Checkbox>
                              <label
                                htmlFor={
                                  fieldName.shouldChangePasswordOnNextLogin
                                }
                                className="ms-2"
                              >
                                Should change password on next login.
                              </label>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="mt-3 mb-3">
                              <Checkbox
                                inputId={fieldName.isActive}
                                name={fieldName.isActive}
                                value={userDetail.isActive}
                                onChange={onFormValChange}
                                checked={userDetail.isActive}
                              ></Checkbox>
                              <label
                                htmlFor={fieldName.isActive}
                                className="ms-2"
                              >
                                <figcaption>
                                  Active
                                  <span className="inline-sub-title ms-2">
                                    - user activation status
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
                    leftIcon="pi pi-user me-2"
                    header="Roles"
                    rightIcon={
                      <>
                        <Badge value={userDetail?.userRoles?.length}></Badge>
                      </>
                    }
                  >
                    <div className="col-sm-12">
                      {roles?.result &&
                        roles?.result?.map((item) => {
                          return (
                            <div key={"role-" + item?.id}>
                              <div className="mt-3 mb-3">
                                <Checkbox
                                  inputId={item?.id}
                                  name={item?.name}
                                  value={item?.id}
                                  onChange={onSelectionChange}
                                  checked={
                                    userDetail?.userRoles
                                      ? userDetail?.userRoles?.some(
                                          (x) => x.roleId === item.id
                                        )
                                      : false
                                  }
                                ></Checkbox>
                                <label htmlFor={item?.id} className="ms-2">
                                  {item?.name}
                                </label>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </TabPanel>
                </TabView>

                <div className="user-edit-footer float-end">
                  <SaveLoaderButtonApp
                    type="submit"
                    label={"Save"}
                    icon="pi pi-save"
                    size="small"
                    disabled={!formValid() || userUpdate?.pending}
                    enableLoader={userUpdate?.pending}
                  />
                </div>
              </form>
            </>
            <br />
          </Card>
        </div>
      </div>
    </>
  );
};

export default UserEditApp;
