import { axiosInstance } from "../../../../../../utils/axios.util";
import { ENDPOINT } from "../../../../../../constants/global-contants/endpoint.const";
import { FacilityTypeModel, IFacilityTypeRequestModel } from "../../../../../../interfaces/facilityType.model";

export default class FacilityTypeService {

  // static fetchFacilityTypes = (params: IFacilityTypeRequestModel) => {
  //   return axiosInstance.get(
  //     ENDPOINT.API_BASE_URL +
  //       ENDPOINT.FACILITYTYPE.API.FETCH_FACILITYTYPES +
  //       `?Fields=${params.Fields}&OrderBy=${params.OrderBy}&PageSize=${params.PageSize}&Skip=${params.Skip}&SearchQuery=${params.SearchQuery}&name=${params.name}&tenantId=${params.tenantId}` +
  //       params.name
  //     //   params
  //   );
  // };
    static fetchFacilityType = (params: IFacilityTypeRequestModel) => {
        return axiosInstance.get(
          ENDPOINT.API_BASE_URL + ENDPOINT.FACILITYTYPE.API.FETCH_FACILITYTYPE
        );
      };
      static addFacilityType = (param: FacilityTypeModel) => {
        return axiosInstance.post(
          ENDPOINT.API_BASE_URL + ENDPOINT.FACILITYTYPE.API.UPDATE_FACILITYTYPE,
          param
        );
      };
      static updateFacilityType = (param: FacilityTypeModel) => {
        return axiosInstance.put(
          ENDPOINT.API_BASE_URL + ENDPOINT.FACILITYTYPE.API.UPDATE_FACILITYTYPE + "/" + param?.id,
          param
        );
      };
     
}

