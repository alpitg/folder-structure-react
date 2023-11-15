import { axiosInstance } from "../../../../../../utils/axios.util";
import { ENDPOINT } from "../../../../../../constants/global-contants/endpoint.const";

export default class FacilityTypeService {
    static fetchFacilityType = () => {
        return axiosInstance.get(
          ENDPOINT.API_BASE_URL + ENDPOINT.FACILITYTYPE.API.FETCH_FACILITYTYPE
        );
      };

     
}