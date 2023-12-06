import { ENDPOINT } from "../../../../../../constants/global-contants/endpoint.const";
import { FacilityModel, IFacilityRequestModel } from "../../../../../../interfaces/facility.model";
import { axiosInstance } from "../../../../../../utils/axios.util";

export default class FacilityService {
  static fetchFacility = () => {
    return axiosInstance.get(
      ENDPOINT.API_BASE_URL + ENDPOINT.FACILITY.API.FETCH_FACILITY
    );
  };

  static fetchFacilite = (param: string) => {
    return axiosInstance.get(
      ENDPOINT.API_BASE_URL + ENDPOINT.FACILITY.API.FETCH_FACILITY + "/" + param
    );
  };

  static addFacility = (param: FacilityModel) => {
    return axiosInstance.post(
      ENDPOINT.API_BASE_URL + ENDPOINT.FACILITY.API.ADD_FACILITY,
      param
    );
  };

  static updateFacility = (param: FacilityModel) => {
    return axiosInstance.put(
      ENDPOINT.API_BASE_URL + ENDPOINT.FACILITY.API.UPDATE_FACILITY + "/" + param?.id,
      param
    );
  };

  static deleteFacility = (id: any) => {
    return axiosInstance.delete(
      ENDPOINT.API_BASE_URL + ENDPOINT.FACILITY.API.DELETE_FACILITY + "/" + id
    );
  };
}