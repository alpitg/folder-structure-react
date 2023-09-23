import { ENDPOINT } from "../../../constants/global-contants/endpoint.const";
import {
  ITenantModel,
  ITenantsRequestModel,
} from "../../../interfaces/tenant.model";
import { axiosInstance } from "../../../utils/axios.util";

export default class TenantService {
  static fetchTenants = (params: ITenantsRequestModel) => {
    return axiosInstance.get(
      ENDPOINT.BASE_URL + ENDPOINT.TENANT.API.FETCH_TENANTS
      //   params
    );
  };

  static updateTenant = (param: ITenantModel) => {
    return axiosInstance.post(
      ENDPOINT.BASE_URL + ENDPOINT.TENANT.API.UPDATE_TENANT,
      param
    );
  };

  static deleteTenant = (id: any) => {
    return axiosInstance.delete(
      ENDPOINT.BASE_URL + ENDPOINT.TENANT.API.DELETE_TENANT + "?id=" + id
    );
  };
}
