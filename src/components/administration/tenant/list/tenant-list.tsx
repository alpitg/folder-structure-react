import "./tenant-list.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { AppState } from "../../../../store/reducers/root.reducer";
import { TenantModel } from "../../../../interfaces/tenant.model";
import HeaderInlineTextApp from "../../../ui/header-inline-text/header-inline-text";
import { ROUTE_URL } from "../../../auth/constants/routes.const";
import NoRecordApp from "../../../ui/no-record/no-record";
import TenantListItemApp from "./list-item/tenant-list-item";
import { hasClaim } from "../../../../utils/auth.util";
import MessagesApp from "../../../ui/messages/messages";
import {
  fetchTenantsRequest,
  resetDeleteTenant,
} from "../../store/actions/tenant.action";
import { LOADING } from "../../../../constants/global-contants/global-key.const";
import { TENANT_TITLE, TENANT_SUB_TITLE } from "../tenant.const";

const TenantListApp = () => {
  const tenants = useSelector((x: AppState) => x.administration.tenants);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTenantsRequest());
  }, []);

  const closeError = () => {
    dispatch(resetDeleteTenant());
  };

  return (
    <div className="tenant-list-app">
      <div className="row">
        <div className="col-sm-12">
          <HeaderInlineTextApp
            title={TENANT_TITLE}
            subTitle={TENANT_SUB_TITLE}
            children={
              <>
                {hasClaim([]) && (
                  <Link to={`${ROUTE_URL.ADMIN.TENANT.ADD}`}>
                    <Button
                      className=" float-end"
                      label="Create new tenant"
                      icon="pi pi-plus"
                      size="small"
                    />
                  </Link>
                )}
              </>
            }
          />
        </div>
      </div>

      {
        !tenants?.list?.result?.length ? <NoRecordApp /> :

          <Card title="Tenants">
            {tenants?.delete?.error &&
              tenants?.delete?.error?.map((error: string) => (
                <MessagesApp
                  type="alert-danger"
                  message={error}
                  close={closeError}
                  key={error}
                />
              ))}
            {tenants?.list.pending && LOADING}
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  {tenants?.list?.result?.map((tenant: TenantModel) => {
                    return <TenantListItemApp tenant={tenant} key={tenant.id} />;
                  })}
                </tbody>
              </table>
              {tenants?.list?.result?.length === 0 && <NoRecordApp />}
            </div>
          </Card>
      }
    </div>
  );
};

export default TenantListApp;
