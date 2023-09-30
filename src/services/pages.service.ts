import { ENDPOINT } from "../constants/global-contants/endpoint.const";
import { axiosInstance } from "../utils/axios.util";

export default class PagesService {
  static fetchPages = () => {
    return axiosInstance.get(ENDPOINT.API_BASE_URL + ENDPOINT.AUTH.API.pages);
  };

  static fetchActions = () => {
    return axiosInstance.get(ENDPOINT.API_BASE_URL + ENDPOINT.AUTH.API.actions);
  };
}
