import { ENDPOINT } from "../../../constants/global-contants/endpoint.const";
import { IRoleModel } from "../../../interfaces/role.model";
import { axiosInstance } from "../../../utils/axios.util";

export default class RoleService {
  static fetchRoles = () => {
    return axiosInstance.get(
      ENDPOINT.API_BASE_URL + ENDPOINT.ROLE.API.FETCH_ROLES
    );
  };

  static fetchRole = (param: string) => {
    return axiosInstance.get(
      ENDPOINT.API_BASE_URL + ENDPOINT.ROLE.API.FETCH_ROLES + "/" + param
    );
  };

  static addRole = (param: IRoleModel) => {
    return axiosInstance.post(
      ENDPOINT.API_BASE_URL + ENDPOINT.ROLE.API.ADD_ROLE,
      param
    );
  };

  static updateRole = (param: IRoleModel) => {
    return axiosInstance.put(
      ENDPOINT.API_BASE_URL + ENDPOINT.ROLE.API.UPDATE_ROLE + "/" + param.id,
      param
    );
  };

  static deleteRole = (id: any) => {
    return axiosInstance.delete(
      ENDPOINT.API_BASE_URL + ENDPOINT.ROLE.API.DELETE_ROLE + "/" + id
    );
  };
}
