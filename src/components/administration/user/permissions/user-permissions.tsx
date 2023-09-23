import { useEffect, useState } from "react";
import PermissionsApp from "../../permissions/permissions";
import "./user-permissions.scss";
import pagesData from "../../permissions/pages.json";
import { Card } from "primereact/card";
import SaveLoaderButtonApp from "../../../ui/save-loader-button/save-loader-button";
import { Link, useParams } from "react-router-dom";
import { ROUTE_URL } from "../../../auth/constants/routes.const";

interface IUserPermissionsApp {
  userId: string;
  permissions: any[];
  grantedPermissionNames: any[];
  success: boolean;
  error: string;
  unAuthorizedRequest: boolean;
}
class UserPermissionsAppModel implements IUserPermissionsApp {
  userId: string;
  permissions: any[];
  grantedPermissionNames: string[];
  success: boolean;
  error: string;
  unAuthorizedRequest: boolean;

  constructor() {
    this.userId = "0";
    this.permissions = [];
    this.grantedPermissionNames = [];
    this.success = true;
    this.error = "";
    this.unAuthorizedRequest = false;
  }
}

const UserPermissionsApp = () => {
  const { id } = useParams();
  const [userPermissions, setUserPermissions] = useState<IUserPermissionsApp>(
    new UserPermissionsAppModel()
  );
  useEffect(() => {
    fetch("/mock/user-permissions.json")
      .then((res) => res.json())
      .then((json: IUserPermissionsApp) => {
        setUserPermissions(json);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectionChange = () => {
    console.log("--- sel ---");
  };

  return (
    <div className="user-permissions-app">
      {userPermissions?.permissions?.length > 0 &&
        userPermissions?.grantedPermissionNames && (
          <Card
            title={
              <>
                <Link to={`${ROUTE_URL.ADMIN.USER.BASE}`}>
                  <span className="icon" title="Navigate Back">
                    <i className="pi pi-fw pi-arrow-left"></i>
                  </span>
                </Link>
                <span className="p-2">User permissions: {id}</span>
              </>
            }
          >
            <div className="row">
              <div className="col-sm-12">
                <PermissionsApp
                  nodes={userPermissions?.permissions}
                  selectedNodes={userPermissions?.grantedPermissionNames}
                  onSelectionChange={onSelectionChange}
                />
              </div>
              <div className="col-sm-12">
                <div className="float-end">
                  <SaveLoaderButtonApp
                    type="submit"
                    label={"Save"}
                    icon="pi pi-save"
                    size="small"
                    disabled={false}
                    enableLoader={false}
                  />
                </div>
              </div>
            </div>
          </Card>
        )}
    </div>
  );
};

export default UserPermissionsApp;
