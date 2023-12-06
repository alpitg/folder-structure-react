import { all, call, put, takeLatest } from "redux-saga/effects";
import { IAxiosResponse } from "../../../../../../interfaces/generic.model";
import FacilityCourtService from "../../facility-type/service/facility-court.service";
import { DELETE_FACILITY_COURT_REQUEST, FETCH_FACILITY_COURTS_REQUEST, FETCH_FACILITY_COURT_REQUEST, IDeleteFacilityCourtRequestAction, IFetchFacilityCourtRequestAction, IUpdateFacilityCourtRequestAction, UPDATE_FACILITY_COURT_REQUEST, deleteFacilityCourtFailed, deleteFacilityCourtSuccess, fetchFacilityCourtFailed, fetchFacilityCourtSuccess, fetchFacilityCourtsFailed, fetchFacilityCourtsSuccess, updateFacilityCourtFailed, updateFacilityCourtSuccess } from "../actions/facilityCourt.action";

function* fetchFacilityCourts() {
    try {
        const response : IAxiosResponse<any> = yield call(
            FacilityCourtService.fetchFacilityCourts
        );
        yield put(
            fetchFacilityCourtsSuccess({result: response.data, error: [], pending: false})
        );
    }catch (error) {
        yield put(fetchFacilityCourtsFailed({result: null, error: [], pending: false}))
    }
} 

function* fetchFacilityCourt(action: IFetchFacilityCourtRequestAction) {
    try {
      const response: IAxiosResponse<any> = yield call(
        FacilityCourtService.fetchFacilityCourt,
        action.payload
      );
  
      yield put(
        fetchFacilityCourtSuccess({ result: response.data, error: [], pending: false })
      );
    } catch (error) {
      yield put(fetchFacilityCourtFailed({ result: null, error: [], pending: false }));
    }
  }


  function* updateFacilityCourt(action: IUpdateFacilityCourtRequestAction) {
    const data = action.payload;
    try {
      let response: IAxiosResponse<any>;
  
      if (action.payload?.id) {
        response = yield call(FacilityCourtService.updateFacilityCourt, action.payload);
      } else {
        response = yield call(FacilityCourtService.addFacilityCourt, action.payload);
      }
  
      yield put(
        updateFacilityCourtSuccess({ result: response?.data, error: [], pending: false })
      );
    } catch (error: any) {
      yield put(
        updateFacilityCourtFailed({
          error:
            typeof error?.response?.data === "string"
              ? [error?.response?.data]
              : error?.response?.data,
          pending: false,
        })
      );
    }
  }


  function* deleteFacilityCourt( action: IDeleteFacilityCourtRequestAction)  {
    const id = action.payload

    try {
        const response: IAxiosResponse<any> = yield call(
          FacilityCourtService.deleteFacilityCourt,
          action.payload
        );
        yield put(
            deleteFacilityCourtSuccess({
              result: id,
              error: [],
              pending: false,
            })
          );
        } catch (error: any) {
            yield put(
              deleteFacilityCourtFailed({
                result: error?.response?.data,
                error: [],
                pending: false,
              })
            );
          }
  }

export default function* fetchFacilityCourtSaga() {
    yield all([
        takeLatest(FETCH_FACILITY_COURTS_REQUEST, fetchFacilityCourts),
        takeLatest(FETCH_FACILITY_COURT_REQUEST, fetchFacilityCourt),
        takeLatest(UPDATE_FACILITY_COURT_REQUEST, updateFacilityCourt),
        takeLatest(DELETE_FACILITY_COURT_REQUEST, deleteFacilityCourt)
    ])
}