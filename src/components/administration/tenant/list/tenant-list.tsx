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
import "./tenant-list.scss";

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
            title="Tenants"
            subTitle="Manage tenants and permissions."
            children={
              <>
                {hasClaim([]) && (
                  <Link to={`${ROUTE_URL.ADMIN.TENANT.TENANT_DETAIL_ADD}`}>
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
    </div>
  );
};

export default TenantListApp;
