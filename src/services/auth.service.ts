import { ENDPOINT } from "../constants/global-contants/endpoint.const";
import {
  AUTH_INFO_KEY,
  BEARER_TOKEN_KEY,
} from "../constants/global-contants/global-key.const";
import {
  AuthenticationModel,
  IAuthenticationRequestModel,
} from "../interfaces/auth.model";
import { axiosInstance } from "../utils/axios.util";

export default class AuthService {
  static authenticateUser = (params: IAuthenticationRequestModel) => {
    return axiosInstance.post(
      ENDPOINT.API_BASE_URL + ENDPOINT.AUTH.API.login,
      params
    );
  };

  static getAccessToken = () => {
    return localStorage.getItem(BEARER_TOKEN_KEY);
  };

  /**
   * GET Auth
   */
  static getAuthDetail = (): AuthenticationModel => {
    const userDetail = localStorage.getItem(AUTH_INFO_KEY);
    if (userDetail) {
      return JSON.parse(userDetail);
    } else {
      return new AuthenticationModel();
    }
  };

  /**
   * SET Auth
   */
  static setAuthDetail = (response: any) => {
    localStorage.setItem(BEARER_TOKEN_KEY, response?.bearerToken);
    localStorage.setItem(AUTH_INFO_KEY, JSON.stringify(response));
  };

  static logoutUser = (email: any) => {
    return localStorage.clear();
  };
}
