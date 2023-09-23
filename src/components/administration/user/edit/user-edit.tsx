import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import { AppState } from "../../../../store/reducers/root.reducer";
import { IUserFormModel } from "../../../../interfaces/user.model";
import { ROUTE_URL } from "../../../auth/constants/routes.const";
import { TabPanel, TabView } from "primereact/tabview";
import MessagesApp from "../../../ui/messages/messages";
import { Checkbox } from "primereact/checkbox";
import SaveLoaderButtonApp from "../../../ui/save-loader-button/save-loader-button";

const UserEditApp = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const users = useSelector((x: AppState) => x.administration.users);

  const [userDetail, setUserDetail] = useState<IUserFormModel>({
    id: "",
    name: "",
    surname: "",
    userName: "",
    emailAddress: "",
    phoneNumber: "",
    password: "",
    isActive: true,
    shouldChangePasswordOnNextLogin: false,
    isTwoFactorEnabled: false,
    isLockoutEnabled: false,
    roles: [],
    isError: {
      name: "",
      surname: "",
      userName: "",
      emailAddress: "",
      phoneNumber: "",
      password: "",
      isActive: "",
    },
    fieldName: {
      id: "id",
      name: "name",
      surname: "surname",
      userName: "userName",
      emailAddress: "emailAddress",
      phoneNumber: "phoneNumber",
      password: "password",
      isActive: "isActive",
      shouldChangePasswordOnNextLogin: "shouldChangePasswordOnNextLogin",
      isTwoFactorEnabled: "isTwoFactorEnabled",
      isLockoutEnabled: "isLockoutEnabled",
    },
  });
  const { isError, fieldName } = userDetail;
  const [saveError, setSaveError] = useState<string>();

  useEffect(() => {
    if (id) {
      fetchUserDetail(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    setSaveError(users.update.error);
  }, [users.update.error]);

  const fetchUserDetail = (id: any) => {
    fetch("/mock/user-detail.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBdmFuaSIsImV4cCI6MTY5MDM4OTA2OCwiaWF0IjoxNjkwMzUzMDY4fQ.uPxNE6IanMeAVziXYCFzBmydcw2EXUvIEgLJha4GVIU",
      },
    })
      .then((res) => res.json())
      .then((json: any) => {
        console.log(json);
        setUserDetail((prev) => ({
          ...prev,
          ...json?.user,
          roles: json?.roles,
        }));
      });
  };

  const updateUserDetail = () => {
    // dispatch(updateUsersRequest(userDetail));
  };

  const closeError = () => {
    // dispatch(resetDeleteUser());
  };

  //#region Form operation
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (formValid()) {
      console.log(userDetail);
      updateUserDetail();
    } else {
      console.log("Form is invalid!");
    }
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
    if (nameIsValid(userDetail.name).isValid) {
      isValid = true;
    } else {
      isValid = false;
    }

    return isValid;
  };

  /**
   * NOTE: Name validation
   */
  const nameIsValid = (userName: string) => {
    if (userName.length < 3 || userName.length === 0) {
      return { isValid: false, errorMsg: "Atleast 3 characaters required" };
    } else {
      return { isValid: true, errorMsg: "" };
    }
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
      field = e?.currentTarget?.id;
      value = e?.currentTarget?.value;
    }

    const formValChange = (field: string, value: any) => {
      let errorMsg = "";
      switch (field) {
        case fieldName.name:
          errorMsg = nameIsValid(value).errorMsg;
          setUserDetail((prev: IUserFormModel) => ({
            ...prev,
            name: value,
            isError: {
              ...prev.isError,
              name: errorMsg,
            },
          }));
          break;
        case fieldName.surname:
          // errorMsg = userNameIsValid(value).errorMsg;
          setUserDetail((prev: IUserFormModel) => ({
            ...prev,
            surname: value,
            isError: {
              ...prev.isError,
              surname: errorMsg,
            },
          }));
          break;
        case fieldName.emailAddress:
          errorMsg = emailAddressIsValid(value).errorMsg;
          setUserDetail((prev: IUserFormModel) => ({
            ...prev,
            emailAddress: value,
            isError: {
              ...prev.isError,
              emailAddress: errorMsg,
            },
          }));
          break;
        case fieldName.phoneNumber:
          // errorMsg = userNameIsValid(value).errorMsg;
          setUserDetail((prev: IUserFormModel) => ({
            ...prev,
            phoneNumber: value,
            isError: {
              ...prev.isError,
              phoneNumber: errorMsg,
            },
          }));
          break;
        case fieldName.userName:
          // errorMsg = userNameIsValid(value).errorMsg;
          setUserDetail((prev: IUserFormModel) => ({
            ...prev,
            userName: value,
            isError: {
              ...prev.isError,
              userName: errorMsg,
            },
          }));
          break;
        case fieldName.password:
          // errorMsg = passwordIsValid(value).errorMsg;
          setUserDetail((prev: IUserFormModel) => ({
            ...prev,
            password: value,
            isError: {
              ...prev.isError,
              password: errorMsg,
            },
          }));
          break;
        case fieldName.shouldChangePasswordOnNextLogin:
          setUserDetail((prev: IUserFormModel) => ({
            ...prev,
            shouldChangePasswordOnNextLogin: value,
          }));
          break;
        case fieldName.isActive:
          setUserDetail((prev: IUserFormModel) => ({
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
                  {id ? "Edit User: " + userDetail?.name : "Create new user"}
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
                    {users.update.error && (
                      <MessagesApp
                        type="alert-danger"
                        message={users.update.error}
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
                              First name *
                            </label>
                            <InputText
                              id={fieldName.name}
                              value={userDetail?.name ?? ""}
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
                              htmlFor={fieldName.surname}
                              className={
                                isError.surname.length > 0
                                  ? "is-invalid p-error"
                                  : ""
                              }
                            >
                              Surname *
                            </label>

                            <InputText
                              id={fieldName.surname}
                              value={userDetail?.surname ?? ""}
                              onChange={onFormValChange}
                              className={
                                isError.surname.length > 0 ? "p-invalid" : ""
                              }
                              required
                            />
                            <small className="p-error">{isError.surname}</small>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-12 pt-3">
                          <div className="d-flex flex-column gap-2">
                            <label
                              htmlFor={fieldName.emailAddress}
                              className={
                                isError.emailAddress.length > 0
                                  ? "is-invalid p-error"
                                  : ""
                              }
                            >
                              Email Address *
                            </label>
                            <InputText
                              id={fieldName.emailAddress}
                              value={userDetail?.emailAddress ?? ""}
                              onChange={onFormValChange}
                              className={
                                isError.emailAddress.length > 0
                                  ? "p-invalid"
                                  : ""
                              }
                              required
                            />
                            <small className="p-error">
                              {isError.emailAddress}
                            </small>
                          </div>
                        </div>
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
                              htmlFor={fieldName.userName}
                              className={
                                isError.userName.length > 0
                                  ? "is-invalid p-error"
                                  : ""
                              }
                            >
                              User Name *
                            </label>
                            <InputText
                              id={fieldName.userName}
                              value={userDetail?.userName ?? ""}
                              onChange={onFormValChange}
                              className={
                                isError.userName.length > 0 ? "p-invalid" : ""
                              }
                              required
                            />
                            <small className="p-error">
                              {isError.userName}
                            </small>
                          </div>
                        </div>

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
                        <Badge
                          value={
                            userDetail?.roles?.filter((x) => x.isAssigned)
                              ?.length
                          }
                        ></Badge>
                      </>
                    }
                  >
                    <div className="col-sm-12">
                      {userDetail?.roles?.map((item) => {
                        return (
                          <div key={"role-" + item?.roleName}>
                            <div className="mt-3 mb-3">
                              <Checkbox
                                inputId={item?.roleName}
                                name={item?.roleName}
                                value={item?.isAssigned}
                                onChange={onFormValChange}
                                checked={item?.isAssigned}
                              ></Checkbox>
                              <label htmlFor={item?.roleName} className="ms-2">
                                {item?.roleDisplayName}
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
                    disabled={!formValid()}
                    enableLoader={users.update.pending}
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
