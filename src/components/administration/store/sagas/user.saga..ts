import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  DELETE_USER_REQUEST,
  FETCH_USERS_REQUEST,
  FETCH_USER_REQUEST,
  IDeleteUserRequestAction,
  IFetchUserRequestAction,
  IFetchUsersRequestAction,
  IUpdateUserRequestAction,
  UPDATE_USER_CLAIM_REQUEST,
  UPDATE_USER_REQUEST,
  deleteUserFailed,
  deleteUserSuccess,
  fetchUserFailed,
  fetchUserSuccess,
  fetchUsersFailed,
  fetchUsersSuccess,
  updateUserFailed,
  updateUserSuccess,
} from "../actions/user.action";
import { IAxiosResponse } from "../../../../interfaces/generic.model";
import UserService from "../../services/user.service";

function* fetchUsers(action: IFetchUsersRequestAction) {
  try {
    const response: IAxiosResponse<any> = yield call(
      UserService.fetchUsers,
      action.payload
    );

    yield put(
      fetchUsersSuccess({
        result: response.data,
        error: [],
        pending: false,
      })
    );
  } catch (error) {
    yield put(
      fetchUsersFailed({ result: null, error: ["error"], pending: false })
    );
  }
}

function* fetchUser(action: IFetchUserRequestAction) {
  try {
    const response: IAxiosResponse<any> = yield call(
      UserService.fetchUser,
      action.payload
    );

    yield put(
      fetchUserSuccess({ result: response.data, error: [], pending: false })
    );
  } catch (error) {
    yield put(
      fetchUserFailed({ result: null, error: ["error"], pending: false })
    );
  }
}

function* updateUser(action: IUpdateUserRequestAction) {
  const data = action.payload;
  try {
    let response: IAxiosResponse<any>;

    if (action.payload?.id) {
      response = yield call(UserService.updateUser, action.payload);
    } else {
      response = yield call(UserService.addUser, action.payload);
    }

    yield put(
      updateUserSuccess({ result: response?.data, error: [], pending: false })
    );
  } catch (error: any) {
    yield put(
      updateUserFailed({
        error:
          typeof error?.response?.data === "string"
            ? [error?.response?.data]
            : error?.response?.data,
        pending: false,
      })
    );
  }
}

function* updateUserClaim(action: IUpdateUserRequestAction) {
  const data = action.payload;
  try {
    let response: IAxiosResponse<any>;
    response = yield call(UserService.updateUserClaim, action.payload);

    yield put(
      updateUserSuccess({ result: response?.data, error: [], pending: false })
    );
  } catch (error) {
    yield put(
      updateUserFailed({ result: data, error: ["error"], pending: false })
    );
  }
}

function* deleteUser(action: IDeleteUserRequestAction) {
  const id = action.payload;
  try {
    const response: IAxiosResponse<any> = yield call(
      UserService.deleteUser,
      action.payload
    );

    yield put(
      deleteUserSuccess({
        result: id,
        error: [],
        pending: false,
      })
    );
  } catch (error: any) {
    yield put(
      deleteUserFailed({
        result: error?.response?.data,
        error: ["error"],
        pending: false,
      })
    );
  }
}

export default function* fetchUserSaga() {
  yield all([
    takeLatest(FETCH_USERS_REQUEST, fetchUsers),
    takeLatest(FETCH_USER_REQUEST, fetchUser),
    takeLatest(UPDATE_USER_REQUEST, updateUser),
    takeLatest(UPDATE_USER_CLAIM_REQUEST, updateUserClaim),
    takeLatest(DELETE_USER_REQUEST, deleteUser),
  ]);
}
