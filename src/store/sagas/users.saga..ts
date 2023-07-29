import { all, call, put, takeLatest } from "redux-saga/effects";
import { IAxiosResponse } from "../../interfaces/generic.model";
import UsersService from "../../services/users.service";
import {
  DELETE_USER_REQUEST,
  FETCH_USERS_REQUEST,
  IDeleteUserRequestAction,
  IFetchUsersRequestAction,
  deleteUserFailed,
  deleteUserSuccess,
  fetchUsersFailed,
  fetchUsersSuccess,
} from "../actions/users.action";

function* fetchUsers(action: IFetchUsersRequestAction) {
  try {
    const response: IAxiosResponse<any> = yield call(
      UsersService.fetchUsers,
      action.payload
    );

    yield put(
      fetchUsersSuccess({ result: response.data, error: "", pending: false })
    );
  } catch (error) {
    yield put(
      fetchUsersFailed({ result: null, error: "error", pending: false })
    );
  }
}

function* deleteUser(action: IDeleteUserRequestAction) {
  const id = action.payload;
  try {
    const response: IAxiosResponse<any> = yield call(
      UsersService.deleteUser,
      action.payload
    );

    yield put(
      deleteUserSuccess({
        result: id,
        error: "",
        pending: false,
      })
    );
  } catch (error) {
    yield put(
      deleteUserFailed({
        result: id,
        error: "error",
        pending: false,
      })
    );
  }
}

export default function* fetchUsersSaga() {
  yield all([
    takeLatest(FETCH_USERS_REQUEST, fetchUsers),
    takeLatest(DELETE_USER_REQUEST, deleteUser),
  ]);
}
