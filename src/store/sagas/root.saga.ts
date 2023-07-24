import authenticateUserSaga from "./auth.saga";
import { all, fork } from "redux-saga/effects";

function* rootSaga() {
    yield all([
        fork(authenticateUserSaga)
    ]);
}

export default rootSaga;