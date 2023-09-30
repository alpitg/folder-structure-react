import { Dropdown } from "primereact/dropdown";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTenantsRequest,
  updateGlobalSelectedTenantAction,
} from "../store/actions/tenant.action";
import { AppState } from "../../../store/reducers/root.reducer";
import { ITenantModel } from "../../../interfaces/tenant.model";

const SelectTenantApp = () => {
  const authDetail = useSelector((x: AppState) => x.authenticate?.result);
  const { tenants } = useSelector((x: AppState) => x.administration);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTenantsRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFormValChange = (e: any) => {
    dispatch(updateGlobalSelectedTenantAction(e?.target?.value ?? ""));
  };

  return !authDetail?.tenantId ? (
    <>
      <Dropdown
        value={tenants?.globalSelectedTenant}
        onChange={onFormValChange}
        options={tenants?.list?.result?.map((x: ITenantModel) => {
          return {
            name: x.name,
            id: x.id,
          };
        })}
        optionLabel="name"
        optionValue="id"
        placeholder="Select a Tenant"
        className="w-full md:w-14rem"
        filter
        showClear={tenants?.globalSelectedTenant ? true : false}
      />
    </>
  ) : null;
};

export default SelectTenantApp;
