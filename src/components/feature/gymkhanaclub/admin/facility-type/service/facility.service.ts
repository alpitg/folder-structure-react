import { axiosInstance } from "../../../../../../utils/axios.util";
import { ENDPOINT } from "../../../../../../constants/global-contants/endpoint.const";
import { FacilityTypeModel, IFacilityTypeRequestModel } from "../../../../../../interfaces/facilityType.model";
import { IFacilityRequestModel } from "../../../../../../interfaces/facility.model";

export default class FacilityService {

  
    static fetchFacility = (params: IFacilityRequestModel) => {
        return axiosInstance.get(
          ENDPOINT.API_BASE_URL + ENDPOINT.FACILITY.API.FETCH_FACILITY
        );
      };
     
     
}

