
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IAxiosResponse } from "../../../../../../interfaces/generic.model";
import FacilityTypeService from "../../facility-type/service/facilityType.service";
import {  DELETE_FACILITY_TYPE_REQUEST, FETCH_FACILITIES_TYPE_REQUEST, FETCH_FACILITY_TYPE_REQUEST, IDeleteFacilityTypeFailedAction, IDeleteFacilityTypeRequestAction, IFetchFacilityTypeRequestAction, IUpdateFacilityTypeRequestAction, UPDATE_FACILITY_TYPE_REQUEST, deleteFacilityTypeFailed, deleteFacilityTypeSuccess, fetchFacilitiesTypeFailed, fetchFacilitiesTypeSuccess, fetchFacilityTypeFailed, fetchFacilityTypeSuccess, updateFacilityTypeFailed, updateFacilityTypeSuccess } from "../actions/facilityType.action";


function* fetchFacilitiesType() {
  try {
    const response: IAxiosResponse<any> = yield call(
      FacilityTypeService.fetchFacilitiesType
      );

    yield put(
      fetchFacilitiesTypeSuccess({ result: response.data, error: [], pending: false })
    );
  } catch (error) {
    yield put(fetchFacilitiesTypeFailed({ result: null, error: [], pending: false }));
  }
}

function* fetchFacilityType(action: IFetchFacilityTypeRequestAction) {
  try {
    const response: IAxiosResponse<any> = yield call(
      FacilityTypeService.fetchFacilityType,
      action.payload
    );

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

function* deleteFacilityType(action: IDeleteFacilityTypeRequestAction) {
  const id = action.payload;
  try {
    const response: IAxiosResponse<any> = yield call(
      FacilityTypeService.deleteFacilityType,
      action.payload
    );

    yield put(
      deleteFacilityTypeSuccess({
        result: id,
        error: [],
        pending: false,
      })
    );
  } catch (error: any) {
    yield put(
      deleteFacilityTypeFailed({
        result: error?.response?.data,
        error: [],
        pending: false,
      })
    );
  }
}

export default function* fetchFacilityTypeSaga() {
  yield all([
    takeLatest(FETCH_FACILITIES_TYPE_REQUEST, fetchFacilitiesType),
    takeLatest(FETCH_FACILITY_TYPE_REQUEST, fetchFacilityType),
    takeLatest(UPDATE_FACILITY_TYPE_REQUEST, updateFacilityType),
    takeLatest(DELETE_FACILITY_TYPE_REQUEST, deleteFacilityType),
  ]);
}
