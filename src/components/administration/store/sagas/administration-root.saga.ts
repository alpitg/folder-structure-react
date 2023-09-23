import { all, fork } from "redux-saga/effects";
import fetchUserSaga from "./user.saga.";
import fetchRoleSaga from "./role.saga";
import fetchTenantSaga from "./tenant.saga";

function* administrationRootSaga() {
  yield all([fork(fetchTenantSaga), fork(fetchRoleSaga), fork(fetchUserSaga)]);
}

export default administrationRootSaga;
