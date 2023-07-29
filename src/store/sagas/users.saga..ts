import { all, call, put, takeLatest } from "redux-saga/effects";
import { IAxiosResponse } from "../../interfaces/generic.model";
import UsersService from "../../services/users.service";
import {
  FETCH_USERS_REQUEST,
  IFetchUsersRequestAction,
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

export default function* fetchUsersSaga() {
  yield all([takeLatest(FETCH_USERS_REQUEST, fetchUsers)]);
}
