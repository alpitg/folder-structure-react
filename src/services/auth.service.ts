import { IAuthenticationRequestModel } from "../interfaces/auth.model";
import { axiosInstance } from "../utils/axios.util"

export default class AuthService {
    static authenticateUser = (params: IAuthenticationRequestModel) => {
        return axiosInstance.post("", params);
    }
}