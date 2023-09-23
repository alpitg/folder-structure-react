import { ENDPOINT } from "../../../constants/global-contants/endpoint.const";
import { IUserModel, IUsersRequestModel } from "../../../interfaces/user.model";
import { axiosInstance } from "../../../utils/axios.util";

export default class UserService {
  static fetchUsers = (params: IUsersRequestModel) => {
    return axiosInstance.get(
      ENDPOINT.BASE_URL + ENDPOINT.USER.API.FETCH_USERS
      //   params
    );
  };

  static updateUser = (param: IUserModel) => {
    return axiosInstance.post(
      ENDPOINT.BASE_URL + ENDPOINT.USER.API.UPDATE_USER,
      param
    );
  };

  static deleteUser = (id: any) => {
    return axiosInstance.delete(
      ENDPOINT.BASE_URL + ENDPOINT.USER.API.DELETE_USER + "?id=" + id
    );
  };
}
