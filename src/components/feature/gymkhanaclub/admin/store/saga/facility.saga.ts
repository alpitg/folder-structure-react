
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IAxiosResponse } from "../../../../../../interfaces/generic.model";
import FacilityTypeService from "../../facility-type/service/facilityType.service";
import { FETCH_FACILITY_TYPE_REQUEST,  IFecthFacilityTypeRequestAction,  IFetchFacilityTypesRequestAction,  IUpdateFacilityTypeRequestAction, UPDATE_FACILITY_TYPE_REQUEST, fetchFacilityTypeFailed, fetchFacilityTypeSuccess, updateFacilityTypeFailed, updateFacilityTypeSuccess } from "../actions/facilityType.action";
import { IFecthFacilityRequestAction, fetchFacilityFailed, fetchFacilitySuccess } from "../actions/facility.action";
import FacilityService from "../../facility-type/service/facility.service";


function* fetchFacility(action: IFecthFacilityRequestAction) {
  try {
    const response: IAxiosResponse<any> = yield call(
      FacilityService.fetchFacility,
      action.payload);

    yield put( 
        fetchFacilitySuccess({ result: response.data, error: [], pending: false })
    );
  } catch (error) {
    yield put(fetchFacilityFailed({ result: null, error: [], pending: false }));
  }
}




export default function* fetchFacilitySaga() {
  yield all([
    takeLatest(FETCH_FACILITY_TYPE_REQUEST, fetchFacility),
  ]);
}
