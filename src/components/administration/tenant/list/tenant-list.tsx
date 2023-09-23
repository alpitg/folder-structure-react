import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { AppState } from "../../../../store/reducers/root.reducer";
import { ITenantModel } from "../../../../interfaces/tenant.model";
import HeaderInlineTextApp from "../../../ui/header-inline-text/header-inline-text";
import { ROUTE_URL } from "../../../auth/constants/routes.const";
import NoRecordApp from "../../../ui/no-record/no-record";
import TenantListItemApp from "./list-item/tenant-list-item";
import "./tenant-list.scss";

const TenantListApp = () => {
  const tenants = useSelector((x: AppState) => x.administration.tenants);

  return (
    <div className="tenant-list-app">
      <div className="row">
        <div className="col-sm-12">
          <HeaderInlineTextApp
            title="Tenants"
            subTitle="Manage tenants and permissions."
            children={
              <>
                <Link to={`${ROUTE_URL.ADMIN.TENANT.TENANT_DETAIL_ADD}`}>
                  <Button
                    className=" float-end"
                    label="Create new tenant"
                    icon="pi pi-plus"
                    size="small"
                  />
                </Link>
              </>
            }
          />
        </div>
      </div>
      <Card title={(tenants?.list?.result?.totalCount ?? 0) + " Tenants"}>
        <>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="list-view">
                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        {Array.isArray(tenants?.list?.result?.items)
                          ? tenants?.list?.result?.items?.map(
                              (tenant: ITenantModel) => {
                                return (
                                  <TenantListItemApp
                                    tenant={tenant}
                                    key={tenant.id}
                                  />
                                );
                              }
                            )
                          : null}
                      </tbody>
                    </table>

                    {tenants?.list?.result?.items?.length === 0 && (
                      <NoRecordApp />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </Card>
    </div>
  );
};

export default TenantListApp;
