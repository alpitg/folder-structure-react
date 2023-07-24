import { all, call, put, takeLatest } from "redux-saga/effects";
import { IAxiosResponse } from "../../interfaces/generic.model";
import AuthService from "../../services/auth.service";
import { authenticateFailed, authenticateSuccess, AUTHENTICATE_USER_REQUEST, IAuthenticationRequestAction } from "../actions/auth.action";

function* authenticateUser(action: IAuthenticationRequestAction) {
    try {
        const response: IAxiosResponse<any> = yield call(AuthService.authenticateUser, action.payload);

        yield put(
            authenticateSuccess({ result: response.data, error: "", pending: false })
        );

    } catch (error) {
        yield put(
            authenticateFailed({ result: null, error: "error", pending: false })
        );
    }
}

export default function* authenticateUserSaga() {
    yield all([takeLatest(AUTHENTICATE_USER_REQUEST, authenticateUser)]);
}