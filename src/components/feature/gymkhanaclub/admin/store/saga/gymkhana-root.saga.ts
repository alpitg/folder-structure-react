import { all, fork } from "redux-saga/effects";
import fetchFacilityTypeSaga from "./facility-type.saga";
import fetchFacilitySaga from "./facility.saga";
import fetchFacilityCourtSaga from "./facilityCourt.saga";

function* gymkhanaRootSaga() {
  yield all([
    fork(fetchFacilityTypeSaga),
    fork(fetchFacilitySaga),
    fork(fetchFacilityCourtSaga),
  ]);
}

export default gymkhanaRootSaga;
