import authenticateUserSaga from "./auth.saga";
import { all, fork } from "redux-saga/effects";
import fetchUsersSaga from "./users.saga.";

function* rootSaga() {
    yield all([
        fork(authenticateUserSaga),
        fork(fetchUsersSaga)
    ]);
}

export default rootSaga;