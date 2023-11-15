import { all, fork } from "redux-saga/effects";
import fetchFacilityTypeSaga from "./facility-type.saga";

function* gymkhanaRootSaga() {
  yield all([
    fork(fetchFacilityTypeSaga)
  ]);
}

export default gymkhanaRootSaga;
