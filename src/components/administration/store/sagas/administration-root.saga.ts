import { all, fork } from "redux-saga/effects";
import fetchUserSaga from "./user.saga.";
import fetchRoleSaga from "./role.saga";

function* administrationRootSaga() {
  yield all([fork(fetchRoleSaga), fork(fetchUserSaga)]);
}

export default administrationRootSaga;
