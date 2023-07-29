import { ENDPOINT } from "../constants/global-contants/endpoint.const";
import { IUsersRequestModel, IUserModel } from "../interfaces/user.model";
import { axiosInstance } from "../utils/axios.util";

export default class UsersService {
  static fetchUsers = (params: IUsersRequestModel) => {
    return axiosInstance.get(
      ENDPOINT.BASE_URL + ENDPOINT.USERS.API.FETCH_USERS
      //   params
    );
  };

  static updateUser = (param: IUserModel) => {
    return axiosInstance.post(
      ENDPOINT.BASE_URL + ENDPOINT.USERS.API.UPDATE_USER,
      param
    );
  };

  static deleteUser = (id: any) => {
    return axiosInstance.delete(
      ENDPOINT.BASE_URL + ENDPOINT.USERS.API.DELETE_USER + "?id=" + id
    );
  };
}
