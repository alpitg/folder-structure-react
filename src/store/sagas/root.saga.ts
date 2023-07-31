import { all, fork } from "redux-saga/effects";
import administrationRootSaga from "../../components/administration/store/sagas/administration-root.saga";
import authenticateUserSaga from "./auth.saga";

function* rootSaga() {
  yield all([fork(authenticateUserSaga), fork(administrationRootSaga)]);
}

export default rootSaga;
