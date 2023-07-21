import authenticateUserSaga from "./auth.saga";
import { all, fork } from "redux-saga/effects";

export function* baseSaga() {
    yield all([
        fork(authenticateUserSaga)
    ]);
}