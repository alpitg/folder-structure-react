import { all, call, put, takeLatest } from "redux-saga/effects";
import { IAxiosResponse } from "../../../../../../interfaces/generic.model";
import FacilityService from "../../facility-type/service/facility.service";
import { DELETE_FACILITY_REQUEST, FETCH_FACILITE_REQUEST, FETCH_FACILITY_REQUEST, IDeleteFacilityRequestAction, IFetchFaciliteRequestAction, IUpdateFacilityRequestAction, UPDATE_FACILITY_REQUEST, deleteFacilityFailed, deleteFacilitySuccess, fetchFacilityFailed, fetchFacilitySuccess, updateFacilityFailed, updateFacilitySuccess } from "../actions/facility.action";

function* fetchFacility() {
    try {
        const response : IAxiosResponse<any> = yield call(
            FacilityService.fetchFacility
        );
        yield put(
            fetchFacilitySuccess({result: response.data, error: [], pending: false})
        );
    }catch (error) {
        yield put(fetchFacilityFailed({result: null, error: [], pending: false}))
    }
}

function* fetchFacilite(action: IFetchFaciliteRequestAction) {
    try {
      const response: IAxiosResponse<any> = yield call(
        FacilityService.fetchFacilite,
        action.payload
      );
  
      yield put(
        fetchFacilitySuccess({ result: response.data, error: [], pending: false })
      );
    } catch (error) {
      yield put(fetchFacilityFailed({ result: null, error: [], pending: false }));
    }
  }

  function* updateFacility(action: IUpdateFacilityRequestAction) {
    const data = action.payload;
    try {
      let response: IAxiosResponse<any>;
  
      if (action.payload?.id) {
        response = yield call(FacilityService.updateFacility, action.payload);
      } else {
        response = yield call(FacilityService.addFacility, action.payload);
      }
  
      yield put(
        updateFacilitySuccess({ result: response?.data, error: [], pending: false })
      );
    } catch (error: any) {
      yield put(
        updateFacilityFailed({
          error:
            typeof error?.response?.data === "string"
              ? [error?.response?.data]
              : error?.response?.data,
          pending: false,
        })
      );
    }
  }

  function* deleteFacility(action: IDeleteFacilityRequestAction) {
    const id = action.payload;
    try {
      const response: IAxiosResponse<any> = yield call(
        FacilityService.deleteFacility,
        action.payload
      );
  
      yield put(
        deleteFacilitySuccess({
          result: id,
          error: [],
          pending: false,
        })
      );
    } catch (error: any) {
      yield put(
        deleteFacilityFailed({
          result: error?.response?.data,
          error: [],
          pending: false,
        })
      );
    }
  }

export default function* fetchFacilitySaga(){
    yield all([
        takeLatest(FETCH_FACILITY_REQUEST, fetchFacility),
        takeLatest(FETCH_FACILITE_REQUEST, fetchFacilite),
        takeLatest(UPDATE_FACILITY_REQUEST, updateFacility),
        takeLatest(DELETE_FACILITY_REQUEST, deleteFacility),
    ])
}