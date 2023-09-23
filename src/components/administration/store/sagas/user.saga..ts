import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  DELETE_USER_REQUEST,
  FETCH_USERS_REQUEST,
  IDeleteUserRequestAction,
  IFetchUsersRequestAction,
  IUpdateUsersRequestAction,
  UPDATE_USER_REQUEST,
  deleteUserFailed,
  deleteUserSuccess,
  fetchUsersFailed,
  fetchUsersSuccess,
  updateUsersFailed,
  updateUsersSuccess,
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
      fetchUsersSuccess({ result: response.data, error: "", pending: false })
    );
  } catch (error) {
    yield put(
      fetchUsersFailed({ result: null, error: "error", pending: false })
    );
  }
}

function* updateUsers(action: IUpdateUsersRequestAction) {
  const data = action.payload;
  try {
    const response: IAxiosResponse<any> = yield call(
      UserService.updateUser,
      action.payload
    );

    yield put(updateUsersSuccess({ result: data, error: "", pending: false }));
  } catch (error) {
    yield put(
      updateUsersFailed({ result: data, error: "error", pending: false })
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

export default function* fetchUserSaga() {
  yield all([
    takeLatest(FETCH_USERS_REQUEST, fetchUsers),
    takeLatest(UPDATE_USER_REQUEST, updateUsers),
    takeLatest(DELETE_USER_REQUEST, deleteUser),
  ]);
}
