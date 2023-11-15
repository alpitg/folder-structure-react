
import { call, put, takeLatest } from "redux-saga/effects";
import { all } from "axios";
import { IAxiosResponse } from "../../../../../../interfaces/generic.model";
import FacilityTypeService from "../../facility-type/service/facilityType.service";
import { FETCH_FACILITY_TYPE_REQUEST, fetchFacilityTypeFailed, fetchFacilityTypeSuccess } from "../actions/facilityType.action";


function* fetchFacilityType() {
  try {
    const response: IAxiosResponse<any> = yield call(FacilityTypeService.fetchFacilityType);

    yield put(
      fetchFacilityTypeSuccess({ result: response.data, error: [], pending: false })
    );
  } catch (error) {
    yield put(fetchFacilityTypeFailed({ result: null, error: [], pending: false }));
  }
}

export default function* fetchFacilityTypeSaga() {
  yield all([
    takeLatest(FETCH_FACILITY_TYPE_REQUEST, fetchFacilityType),
  ]);
}
