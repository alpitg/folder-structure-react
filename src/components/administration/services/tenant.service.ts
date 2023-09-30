import { ENDPOINT } from "../../../constants/global-contants/endpoint.const";
import { ITenantModel } from "../../../interfaces/tenant.model";
import { axiosInstance } from "../../../utils/axios.util";

export default class TenantService {
  static fetchTenants = () => {
    return axiosInstance.get(
      ENDPOINT.API_BASE_URL + ENDPOINT.TENANT.API.FETCH_TENANTS
    );
  };

  static fetchTenant = (param: string) => {
    return axiosInstance.get(
      ENDPOINT.API_BASE_URL +
        ENDPOINT.TENANT.API.FETCH_TENANT.replace("id", param)
    );
  };

  static addTenant = (param: ITenantModel) => {
    return axiosInstance.post(
      ENDPOINT.API_BASE_URL + ENDPOINT.TENANT.API.ADD_TENANT,
      param
    );
  };

  static updateTenant = (param: ITenantModel) => {
    return axiosInstance.put(
      ENDPOINT.API_BASE_URL +
        ENDPOINT.TENANT.API.UPDATE_TENANT +
        "/" +
        param.id,
      param
    );
  };

  static deleteTenant = (id: any) => {
    return axiosInstance.delete(
      ENDPOINT.API_BASE_URL + ENDPOINT.TENANT.API.DELETE_TENANT.replace("id", id)
    );
  };
}
