
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IAxiosResponse } from "../../../../../../interfaces/generic.model";
import FacilityTypeService from "../../facility-type/service/facilityType.service";
import { FETCH_FACILITY_TYPE_REQUEST,  IFecthFacilityTypeRequestAction,  IFetchFacilityTypesRequestAction,  IUpdateFacilityTypeRequestAction, UPDATE_FACILITY_TYPE_REQUEST, fetchFacilityTypeFailed, fetchFacilityTypeSuccess, updateFacilityTypeFailed, updateFacilityTypeSuccess } from "../actions/facilityType.action";


function* fetchFacilityType(action: IFecthFacilityTypeRequestAction) {
  try {
    const response: IAxiosResponse<any> = yield call(
      FacilityTypeService.fetchFacilityType,
      action.payload);

    yield put(
      fetchFacilityTypeSuccess({ result: response.data, error: [], pending: false })
    );
  } catch (error) {
    yield put(fetchFacilityTypeFailed({ result: null, error: [], pending: false }));
  }
}

function* updateFacilityType(action: IUpdateFacilityTypeRequestAction) {
  const data = action.payload;
  try {
    let response: IAxiosResponse<any>;

    if (action.payload?.id) {
      response = yield call(FacilityTypeService.updateFacilityType, action.payload);
    } else {
      response = yield call(FacilityTypeService.addFacilityType, action.payload);
    }

    yield put(
      updateFacilityTypeSuccess({ result: response?.data, error: [], pending: false })
    );
  } catch (error: any) {
    yield put(
      updateFacilityTypeFailed({
        error:
          typeof error?.response?.data === "string"
            ? [error?.response?.data]
            : error?.response?.data,
        pending: false,
      })
    );
  }
}


export default function* fetchFacilityTypeSaga() {
  yield all([
    takeLatest(FETCH_FACILITY_TYPE_REQUEST, fetchFacilityType),
    takeLatest(UPDATE_FACILITY_TYPE_REQUEST, updateFacilityType),
  ]);
}
