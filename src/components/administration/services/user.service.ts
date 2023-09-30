import { ENDPOINT } from "../../../constants/global-contants/endpoint.const";
import { IUserModel, IUsersRequestModel } from "../../../interfaces/user.model";
import { axiosInstance } from "../../../utils/axios.util";

export default class UserService {
  static fetchUsers = (params: IUsersRequestModel) => {
    return axiosInstance.get(
      ENDPOINT.API_BASE_URL +
        ENDPOINT.USER.API.FETCH_USERS +
        `?Fields=${params.Fields}&OrderBy=${params.OrderBy}&PageSize=${params.PageSize}&Skip=${params.Skip}&SearchQuery=${params.SearchQuery}&name=${params.name}&tenantId=${params.tenantId}` +
        params.name
      //   params
    );
  };

  static fetchUser = (param: string) => {
    return axiosInstance.get(
      ENDPOINT.API_BASE_URL + ENDPOINT.USER.API.FETCH_USER + "/" + param
    );
  };

  static addUser = (param: IUserModel) => {
    return axiosInstance.post(
      ENDPOINT.API_BASE_URL + ENDPOINT.USER.API.UPDATE_USER,
      param
    );
  };

  static updateUser = (param: IUserModel) => {
    return axiosInstance.put(
      ENDPOINT.API_BASE_URL + ENDPOINT.USER.API.UPDATE_USER + "/" + param?.id,
      param
    );
  };

  static updateUserClaim = (param: any) => {
    return axiosInstance.put(
      ENDPOINT.API_BASE_URL +
        ENDPOINT.USER.API.UPDATE_USER_CLAIM +
        "/" +
        param?.id,
      { userClaims: param?.userClaims }
    );
  };

  static deleteUser = (id: any) => {
    return axiosInstance.delete(
      ENDPOINT.API_BASE_URL + ENDPOINT.USER.API.DELETE_USER + "/" + id
    );
  };
}
