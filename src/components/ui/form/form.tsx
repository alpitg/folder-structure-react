import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Card } from "primereact/card";
import { AppState } from "../../../store/reducers/root.reducer";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";

export interface ISampleFormModel {
  id: string;
  name: string;
  createdDate: string;
  isDefault: boolean;
  isError: {
    name: string;
  };
  fieldName: {
    name: string;
    isDefault: string;
  };
}

const FormApp = () => {
  const { id } = useParams();
  const roles = useSelector((x: AppState) => x.administration.roles);
  const [roleDetail, setRoleDetail] = useState<ISampleFormModel>({
    id: "",
    name: "",
    createdDate: "",
    isDefault: false,
    isError: {
      name: "",
    },
    fieldName: {
      name: "name",
      isDefault: "isDefault",
    },
  });
  const { isError, fieldName } = roleDetail;

  //#region Form operation
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (formValid()) {
      console.log(roleDetail);
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
        setRoleDetail((prev: ISampleFormModel) => ({
          ...prev,
          name: value,
          isError: {
            name: errorMsg,
          },
        }));
        break;
      case fieldName.isDefault:
        setRoleDetail((prev: ISampleFormModel) => ({
          ...prev,
          isDefault: value,
        }));
        break;
      default:
        break;
    }
  };

  const formValChangeBootstrap = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    formValChange(name, value);
  };

  const formValChangePrimeReact = (e: any) => {
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
    <>
      <div className="role-list-app">
        <Card
          title={
            <>
              <span>{"Form example"}</span>
            </>
          }
        >
          <>
            <form onSubmit={onSubmit} noValidate>
              <h6 className="pb-3">1. Bootstrap - Form example</h6>

              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className={
                    isError.name.length > 0
                      ? "is-invalid form-control"
                      : "form-control"
                  }
                  name={fieldName.name}
                  onChange={formValChangeBootstrap}
                />
                {isError.name.length > 0 && (
                  <span className="invalid-feedback">{isError.name}</span>
                )}
              </div>
              <br />
              <br />

              <h6 className="pb-3">2. Primereact - Form example</h6>
              <div className="form-group">
                <span className="p-float-label">
                  <InputText
                    id={fieldName.name}
                    value={roleDetail?.name}
                    onChange={formValChangePrimeReact}
                    className={isError.name.length > 0 ? "p-invalid" : ""}
                    required
                  />
                  <label
                    htmlFor={fieldName.name}
                    className={
                      isError.name.length > 0 ? "is-invalid p-error" : ""
                    }
                  >
                    Role name *
                  </label>
                </span>
                <small className="p-error">{isError["name"]}</small>
              </div>

              <div className="form-group">
                <div className="mt-3 mb-3">
                  <Checkbox
                    inputId={fieldName.isDefault}
                    name={fieldName.isDefault}
                    value={roleDetail.isDefault}
                    onChange={formValChangePrimeReact}
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
              <br />
              <button
                type="submit"
                className="btn btn-block btn-danger"
                disabled={!formValid()}
              >
                Create User
              </button>
            </form>
          </>
        </Card>
      </div>
    </>
  );
};

export default FormApp;
