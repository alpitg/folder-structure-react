import { ENDPOINT } from "../constants/global-contants/endpoint.const";
import { IFetchUsersRequestModel } from "../interfaces/user.model";
import { axiosInstance } from "../utils/axios.util";

export default class UsersService {
  static fetchUsers = (params: IFetchUsersRequestModel) => {
    return axiosInstance.get(
      ENDPOINT.BASE_URL + ENDPOINT.USERS.API.FETCH_USERS
      //   params
    );
  };
}
