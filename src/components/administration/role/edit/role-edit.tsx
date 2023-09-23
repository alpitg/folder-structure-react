import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Card } from "primereact/card";
import { TabView, TabPanel } from "primereact/tabview";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { AppState } from "../../../../store/reducers/root.reducer";
import { IRoleFormModel } from "../../../../interfaces/role.model";
import {
  resetDeleteRole,
  resetUpdateRole,
  updateRolesRequest,
} from "../../store/actions/role.action";
import { ROUTE_URL } from "../../../auth/constants/routes.const";
import SaveLoaderButtonApp from "../../../ui/save-loader-button/save-loader-button";
import MessagesApp from "../../../ui/messages/messages";
import PermissionsApp from "../../permissions/permissions";
import pagesData from "../../permissions/pages.json";

const RoleEditApp = () => {
  //#region variables
  const { id } = useParams();
  const dispatch = useDispatch();
  const roles = useSelector((x: AppState) => x.administration.roles);
  const [roleDetail, setRoleDetail] = useState<IRoleFormModel>({
    id: "",
    name: "",
    createdDate: "",
    isDefault: false,
    grantedPermissionNames: [],
    isError: {
      name: "",
    },
    fieldName: {
      name: "name",
      isDefault: "isDefault",
    },
  });
  const { isError, fieldName } = roleDetail;
  const [saveError, setSaveError] = useState<string>();

  //#endregion

  useEffect(() => {
    setSaveError("");
  }, []);

  //#endregion

  useEffect(() => {
    dispatch(resetUpdateRole());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (id) {
      const temp = roles.list.result?.find((x) => x.id === id);
      if (temp) {
        setRoleDetail((prev) => ({
          ...prev,
          ...temp,
          grantedPermissionNames: temp.grantedPermissionNames,
        }));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // useEffect(() => {
  //   dispatch(clearUpdateRoleError());
  // }, []);

  useEffect(() => {
    setSaveError(roles.update.error);
  }, [roles.update.error]);

  const updateRoleDetail = () => {
    dispatch(updateRolesRequest(roleDetail));
  };

  const closeError = () => {
    dispatch(resetDeleteRole());
  };

  const onSelectionChange = (selectedNodes: any[]) => {
    setRoleDetail((prev) => ({
      ...prev,
      grantedPermissionNames: selectedNodes,
    }));
  };

  //#region Form operation
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (formValid()) {
      console.log(roleDetail);
      updateRoleDetail();
    } else {
      console.log("Form is invalid!");
    }
  };

  //#region - Validion rules
  /**
   * NOTE: Role name validation
   */
  const roleNameIsValid = (roleName: string) => {
    if (roleName.length < 3 || roleName.length === 0) {
      return { isValid: false, errorMsg: "Atleast 3 characaters required" };
    } else {
      return { isValid: true, errorMsg: "" };
    }
  };
  //#endregion

  const formValid = () => {
    let isValid = false;
    Object.values(roleDetail?.isError).forEach((val: string) => {
      if (val.length > 0) {
        isValid = false;
      } else {
        isValid = true;
      }
    });

    // NOTE: Add further validations here as AND condition
    if (roleNameIsValid(roleDetail.name).isValid) {
      isValid = true;
    } else {
      isValid = false;
    }

    return isValid;
  };

  const formValChange = (field: string, value: any) => {
    let errorMsg = "";
    switch (field) {
      case fieldName.name:
        errorMsg = roleNameIsValid(value).errorMsg;
        setRoleDetail((prev: IRoleFormModel) => ({
          ...prev,
          name: value,
          isError: {
            name: errorMsg,
          },
        }));
        break;
      case fieldName.isDefault:
        setRoleDetail((prev: IRoleFormModel) => ({
          ...prev,
          isDefault: value,
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
      field = e?.currentTarget?.id;
      value = e?.currentTarget?.value;
    }

    formValChange(field, value);
  };

  //#endregion

  return (
    <div className="role-list-app">
      <Card
        title={
          <>
            <Link to={`${ROUTE_URL.ADMIN.ROLE.BASE}`}>
              <span className="icon" title="Navigate Back">
                <i className="pi pi-fw pi-arrow-left"></i>
              </span>
            </Link>
            <span className="p-2">
              {id ? "Edit Role: " + roleDetail?.name : "Create new role"}
            </span>
          </>
        }
      >
        <>
          <form onSubmit={onSubmit} noValidate>
            <TabView>
              <TabPanel header="Role" leftIcon="pi pi-fw pi-briefcase me-2">
                {roles.update.error && (
                  <MessagesApp
                    type="alert-danger"
                    message={roles.update.error}
                    close={closeError}
                  />
                )}
                <div className="m-0 mt-3">
                  <div className="row">
                    <div className="col-sm-12">
                      <div
                        className={"d-flex flex-column gap-2 " + fieldName.name}
                      >
                        <label
                          htmlFor={fieldName.name}
                          className={
                            isError.name.length > 0 ? "is-invalid p-error" : ""
                          }
                        >
                          Role name *
                        </label>
                        <InputText
                          id={fieldName.name}
                          value={roleDetail?.name ?? ""}
                          onChange={onFormValChange}
                          className={isError.name.length > 0 ? "p-invalid" : ""}
                          required
                        />
                        <small className="p-error">{isError.name}</small>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="mt-3 mb-3">
                      <Checkbox
                        inputId={fieldName.isDefault}
                        name={fieldName.isDefault}
                        value={roleDetail.isDefault}
                        onChange={onFormValChange}
                        checked={roleDetail.isDefault}
                      ></Checkbox>
                      <label htmlFor={fieldName.isDefault} className="ms-2">
                        <figcaption>
                          Default
                          <span className="inline-sub-title ms-2">
                            Assign to new users by default.
                          </span>
                        </figcaption>
                      </label>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel header="Permissions" leftIcon="pi pi-user me-2">
                <PermissionsApp
                  nodes={pagesData}
                  selectedNodes={roleDetail?.grantedPermissionNames}
                  onSelectionChange={onSelectionChange}
                />
              </TabPanel>
            </TabView>

            <div className="role-edit-footer float-end">
              <SaveLoaderButtonApp
                type="submit"
                label={"Save"}
                icon="pi pi-save"
                size="small"
                disabled={!formValid()}
                enableLoader={roles.update.pending}
              />
            </div>
          </form>
        </>
        <br />
      </Card>
    </div>
  );
};

export default RoleEditApp;
