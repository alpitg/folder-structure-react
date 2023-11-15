import { all, fork } from "redux-saga/effects";
import administrationRootSaga from "../../components/administration/store/sagas/administration-root.saga";
import authenticateUserSaga from "./auth.saga";
import pagesSaga from "./pages.saga";
import actionsSaga from "./actions.saga";
import gymkhanaRootSaga from "../../components/feature/gymkhanaclub/admin/store/saga/gymkhana-root.saga";

function* rootSaga() {
  yield all([
    fork(authenticateUserSaga),
    fork(administrationRootSaga),
    fork(pagesSaga),
    fork(actionsSaga),
    fork(gymkhanaRootSaga),
  ]);
}

export default rootSaga;
