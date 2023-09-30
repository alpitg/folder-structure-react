import { all, call, put, takeLatest } from "redux-saga/effects";
import { IAxiosResponse } from "../../interfaces/generic.model";
import AuthService from "../../services/auth.service";
import {
  authenticateFailed,
  authenticateSuccess,
  AUTHENTICATE_USER_REQUEST,
  IAuthenticationRequestAction,
  ILogoutUserRequestAction,
  LOGOUT_USER_REQUEST,
} from "../actions/auth.action";

function* authenticateUser(action: IAuthenticationRequestAction) {
  try {
    const response: IAxiosResponse<any> = yield call(
      AuthService.authenticateUser,
      action.payload
    );
    yield put(
      authenticateSuccess({ result: response.data, error: [], pending: false })
    );
    AuthService.setAuthDetail(response?.data);
  } catch (error: any) {
    yield put(
      authenticateFailed({
        error:
          typeof error?.response?.data === "string"
            ? [error?.response?.data]
            : error?.response?.data,
        pending: false,
      })
    );
  }
}

function* logoutUser(action: ILogoutUserRequestAction) {
  yield call(AuthService.logoutUser, action.payload);
}

export default function* authenticateUserSaga() {
  yield all([
    takeLatest(AUTHENTICATE_USER_REQUEST, authenticateUser),
    takeLatest(LOGOUT_USER_REQUEST, logoutUser),
  ]);
}
