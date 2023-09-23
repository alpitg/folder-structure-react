import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  DELETE_TENANT_REQUEST,
  FETCH_TENANTS_REQUEST,
  IDeleteTenantRequestAction,
  IFetchTenantsRequestAction,
  IUpdateTenantsRequestAction,
  UPDATE_TENANT_REQUEST,
  deleteTenantFailed,
  deleteTenantSuccess,
  fetchTenantsFailed,
  fetchTenantsSuccess,
  updateTenantFailed,
  updateTenantSuccess,
} from "../actions/tenant.action";
import { IAxiosResponse } from "../../../../interfaces/generic.model";
import TenantService from "../../services/tenant.service";

function* fetchTenants(action: IFetchTenantsRequestAction) {
  try {
    const response: IAxiosResponse<any> = yield call(
      TenantService.fetchTenants,
      action.payload
    );

    yield put(
      fetchTenantsSuccess({ result: response.data, error: "", pending: false })
    );
  } catch (error) {
    yield put(
      fetchTenantsFailed({ result: null, error: "error", pending: false })
    );
  }
}

function* updateTenants(action: IUpdateTenantsRequestAction) {
  const data = action.payload;
  try {
    const response: IAxiosResponse<any> = yield call(
      TenantService.updateTenant,
      action.payload
    );

    yield put(updateTenantSuccess({ result: data, error: "", pending: false }));
  } catch (error) {
    yield put(
      updateTenantFailed({ result: data, error: "error", pending: false })
    );
  }
}

function* deleteTenant(action: IDeleteTenantRequestAction) {
  const id = action.payload;
  try {
    const response: IAxiosResponse<any> = yield call(
      TenantService.deleteTenant,
      action.payload
    );

    yield put(
      deleteTenantSuccess({
        result: id,
        error: "",
        pending: false,
      })
    );
  } catch (error) {
    yield put(
      deleteTenantFailed({
        result: id,
        error: "error",
        pending: false,
      })
    );
  }
}

export default function* fetchTenantSaga() {
  yield all([
    takeLatest(FETCH_TENANTS_REQUEST, fetchTenants),
    takeLatest(UPDATE_TENANT_REQUEST, updateTenants),
    takeLatest(DELETE_TENANT_REQUEST, deleteTenant),
  ]);
}
