import { all, fork } from "redux-saga/effects";
import fetchUsersSaga from "./users.saga.";

function* administrationRootSaga() {
  yield all([fork(fetchUsersSaga)]);
}

export default administrationRootSaga;
