import { IFetchUsersRequestModel } from "../interfaces/user.model";
import { axiosInstance } from "../utils/axios.util";

export default class UsersService {
  static fetchUsers = (params: IFetchUsersRequestModel) => {
    return axiosInstance.post("", params);
  };
}
