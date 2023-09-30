import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  DELETE_ROLE_REQUEST,
  FETCH_ROLES_REQUEST,
  FETCH_ROLE_REQUEST,
  IDeleteRoleRequestAction,
  IFetchRoleRequestAction,
  IUpdateRolesRequestAction,
  UPDATE_ROLE_REQUEST,
  deleteRoleFailed,
  deleteRoleSuccess,
  fetchRoleFailed,
  fetchRoleSuccess,
  fetchRolesFailed,
  fetchRolesSuccess,
  updateRolesFailed,
  updateRolesSuccess,
} from "../actions/role.action";
import { IAxiosResponse } from "../../../../interfaces/generic.model";
import RoleService from "../../services/role.service";

function* fetchRoles() {
  try {
    const response: IAxiosResponse<any> = yield call(RoleService.fetchRoles);

    yield put(
      fetchRolesSuccess({ result: response.data, error: [], pending: false })
    );
  } catch (error) {
    yield put(fetchRolesFailed({ result: null, error: [], pending: false }));
  }
}

function* fetchRole(action: IFetchRoleRequestAction) {
  try {
    const response: IAxiosResponse<any> = yield call(
      RoleService.fetchRole,
      action.payload
    );

    yield put(
      fetchRoleSuccess({ result: response.data, error: [], pending: false })
    );
  } catch (error) {
    yield put(fetchRoleFailed({ result: null, error: [], pending: false }));
  }
}

function* updateRole(action: IUpdateRolesRequestAction) {
  const data = action.payload;
  try {
    let response: IAxiosResponse<any>;

    if (action.payload?.id) {
      response = yield call(RoleService.updateRole, action.payload);
    } else {
      response = yield call(RoleService.addRole, action.payload);
    }

    yield put(
      updateRolesSuccess({ result: response?.data, error: [], pending: false })
    );
  } catch (error: any) {
    yield put(
      updateRolesFailed({
        result: error?.response?.data,
        error: error?.response?.data,
        pending: false,
      })
    );
  }
}

function* deleteRole(action: IDeleteRoleRequestAction) {
  const id = action.payload;
  try {
    const response: IAxiosResponse<any> = yield call(
      RoleService.deleteRole,
      action.payload
    );

    yield put(
      deleteRoleSuccess({
        result: id,
        error: [],
        pending: false,
      })
    );
  } catch (error: any) {
    yield put(
      deleteRoleFailed({
        result: error?.response?.data,
        error: [],
        pending: false,
      })
    );
  }
}

export default function* fetchRoleSaga() {
  yield all([
    takeLatest(FETCH_ROLES_REQUEST, fetchRoles),
    takeLatest(FETCH_ROLE_REQUEST, fetchRole),
    takeLatest(UPDATE_ROLE_REQUEST, updateRole),
    takeLatest(DELETE_ROLE_REQUEST, deleteRole),
  ]);
}
