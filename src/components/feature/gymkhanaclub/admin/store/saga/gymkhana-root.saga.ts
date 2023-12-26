import { all, fork } from "redux-saga/effects";
import fetchFacilityTypeSaga from "./facility-type.saga";
import fetchFacilitySaga from "./facility.saga";
import fetchFacilityCourtSaga from "./facilityCourt.saga";
import fetchBookSlotSaga from "./book-slot.saga";

function* gymkhanaRootSaga() {
  yield all([
    fork(fetchFacilityTypeSaga),
    fork(fetchFacilitySaga),
    fork(fetchFacilityCourtSaga),
    fork(fetchBookSlotSaga),
  ]);
}

export default gymkhanaRootSaga;
