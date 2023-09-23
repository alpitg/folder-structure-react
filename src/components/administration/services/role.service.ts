import { ENDPOINT } from "../../../constants/global-contants/endpoint.const";
import { IRoleModel, IRolesRequestModel } from "../../../interfaces/role.model";
import { axiosInstance } from "../../../utils/axios.util";

export default class RoleService {
  static fetchRoles = (params: IRolesRequestModel) => {
    return axiosInstance.get(
      ENDPOINT.BASE_URL + ENDPOINT.ROLE.API.FETCH_ROLES
      //   params
    );
  };

  static updateRole = (param: IRoleModel) => {
    return axiosInstance.post(
      ENDPOINT.BASE_URL + ENDPOINT.ROLE.API.UPDATE_ROLE,
      param
    );
  };

  static deleteRole = (id: any) => {
    return axiosInstance.delete(
      ENDPOINT.BASE_URL + ENDPOINT.ROLE.API.DELETE_ROLE + "?id=" + id
    );
  };
}
