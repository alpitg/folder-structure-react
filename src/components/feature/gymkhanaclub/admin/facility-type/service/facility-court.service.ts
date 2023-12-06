import { ENDPOINT } from "../../../../../../constants/global-contants/endpoint.const"
import { FacilityCourtModel, IFacilityCourtModel } from "../../../../../../interfaces/facility-court.model";
import { axiosInstance } from "../../../../../../utils/axios.util"


export default class FacilityCourtService {
static fetchFacilityCourts = () => {
  return axiosInstance.get(
    ENDPOINT.API_BASE_URL + ENDPOINT.FACILITYCOURT.API.FETCH_FACILITYCOURT
  );
};
  
static fetchFacilityCourt = (param: string) => {
  return axiosInstance.get(
    ENDPOINT.API_BASE_URL + ENDPOINT.FACILITYCOURT.API.FETCH_FACILITYCOURT + "/" + param
  );
};

static addFacilityCourt = (param: FacilityCourtModel) => {
  return axiosInstance.post(
    ENDPOINT.API_BASE_URL + ENDPOINT.FACILITYCOURT.API.ADD_FACILITYCOURT,
    param
  );
};

static updateFacilityCourt = (param: FacilityCourtModel) => {
  return axiosInstance.put(
    ENDPOINT.API_BASE_URL + ENDPOINT.FACILITYCOURT.API.UPDATE_FACILITY_COURT + "/" + param?.id,
    param
  );
};
static deleteFacilityCourt = (id: any) => {
  return axiosInstance.delete(
    ENDPOINT.API_BASE_URL + ENDPOINT.FACILITYCOURT.API.DELETE_FACILITYCOURT+ "/" + id
  );
};
}