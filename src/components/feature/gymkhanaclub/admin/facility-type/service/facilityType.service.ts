import { axiosInstance } from "../../../../../../utils/axios.util";
import { ENDPOINT } from "../../../../../../constants/global-contants/endpoint.const";
import { FacilityTypeModel } from "../../../../../../interfaces/facilityType.model";

export default class FacilityTypeService {


  static fetchFacilitiesType = () => {
    return axiosInstance.get(
      ENDPOINT.API_BASE_URL + ENDPOINT.FACILITYTYPE.API.FETCH_FACILITYTYPE
    );
  };

  static fetchFacilityType = (param: string) => {
    return axiosInstance.get(
      ENDPOINT.API_BASE_URL + ENDPOINT.FACILITYTYPE.API.FETCH_FACILITYTYPE + "/" + param
    );
  };

  static addFacilityType = (param: FacilityTypeModel) => {
    return axiosInstance.post(
      ENDPOINT.API_BASE_URL + ENDPOINT.FACILITYTYPE.API.ADD_FACILITYTYPE,
      param
    );
  };

  static updateFacilityType = (param: FacilityTypeModel) => {
    return axiosInstance.put(
      ENDPOINT.API_BASE_URL + ENDPOINT.FACILITYTYPE.API.UPDATE_FACILITYTYPE + "/" + param?.id,
      param
    );
  };

  static deleteFacilityType = (id: any) => {
    return axiosInstance.delete(
      ENDPOINT.API_BASE_URL + ENDPOINT.FACILITYTYPE.API.DELETE_FACILITYTYPE + "/" + id
    );
  };
}

