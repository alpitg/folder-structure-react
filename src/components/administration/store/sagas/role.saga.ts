import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  DELETE_ROLE_REQUEST,
  FETCH_ROLES_REQUEST,
  IDeleteRoleRequestAction,
  IFetchRolesRequestAction,
  UPDATE_ROLE_REQUEST,
  deleteRoleFailed,
  deleteRoleSuccess,
  fetchRolesFailed,
  fetchRolesSuccess,
  updateRolesFailed,
  updateRolesSuccess,
} from "../actions/roles.action";
import { IAxiosResponse } from "../../../../interfaces/generic.model";
import RoleService from "../../services/role.service";

function* fetchRoles(action: IFetchRolesRequestAction) {
  try {
    const response: IAxiosResponse<any> = yield call(
      RoleService.fetchRoles,
      action.payload
    );

    yield put(
      fetchRolesSuccess({ result: response.data, error: "", pending: false })
    );
  } catch (error) {
    yield put(
      fetchRolesFailed({ result: null, error: "error", pending: false })
    );
  }
}

function* updateRoles(action: IFetchRolesRequestAction) {
  const id = action.payload;
  try {
    const response: IAxiosResponse<any> = yield call(
      RoleService.updateRole,
      action.payload
    );

    yield put(updateRolesSuccess({ result: id, error: "", pending: false }));
  } catch (error) {
    yield put(
      updateRolesFailed({ result: id, error: "error", pending: false })
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
        error: "",
        pending: false,
      })
    );
  } catch (error) {
    yield put(
      deleteRoleFailed({
        result: id,
        error: "error",
        pending: false,
      })
    );
  }
}

export default function* fetchRoleSaga() {
  yield all([
    takeLatest(FETCH_ROLES_REQUEST, fetchRoles),
    takeLatest(UPDATE_ROLE_REQUEST, updateRoles),
    takeLatest(DELETE_ROLE_REQUEST, deleteRole),
  ]);
}
