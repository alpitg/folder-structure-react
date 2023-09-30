import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  DELETE_TENANT_REQUEST,
  FETCH_TENANTS_REQUEST,
  FETCH_TENANT_REQUEST,
  IDeleteTenantRequestAction,
  IFetchTenantRequestAction,
  IUpdateTenantsRequestAction,
  UPDATE_TENANT_REQUEST,
  deleteTenantFailed,
  deleteTenantSuccess,
  fetchTenantFailed,
  fetchTenantSuccess,
  fetchTenantsFailed,
  fetchTenantsSuccess,
  updateTenantsFailed,
  updateTenantsSuccess,
} from "../actions/tenant.action";
import { IAxiosResponse } from "../../../../interfaces/generic.model";
import TenantService from "../../services/tenant.service";

function* fetchTenants() {
  try {
    const response: IAxiosResponse<any> = yield call(
      TenantService.fetchTenants
    );

    yield put(
      fetchTenantsSuccess({ result: response.data, error: [], pending: false })
    );
  } catch (error) {
    yield put(
      fetchTenantsFailed({ result: null, error: ["error"], pending: false })
    );
  }
}

function* fetchTenant(action: IFetchTenantRequestAction) {
  try {
    const response: IAxiosResponse<any> = yield call(
      TenantService.fetchTenant,
      action.payload
    );

    yield put(
      fetchTenantSuccess({ result: response.data, error: [], pending: false })
    );
  } catch (error) {
    yield put(
      fetchTenantFailed({ result: null, error: ["error"], pending: false })
    );
  }
}

function* updateTenant(action: IUpdateTenantsRequestAction) {
  const data = action.payload;
  try {
    let response: IAxiosResponse<any>;

    if (action.payload?.id) {
      response = yield call(TenantService.updateTenant, action.payload);
    } else {
      response = yield call(TenantService.addTenant, action.payload);
    }

    yield put(
      updateTenantsSuccess({
        result: response?.data,
        error: [],
        pending: false,
      })
    );
  } catch (error: any) {
    yield put(
      updateTenantsFailed({
        error:
          typeof error?.response?.data === "string"
            ? [error?.response?.data]
            : error?.response?.data,
        pending: false,
      })
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
        error: [],
        pending: false,
      })
    );
  } catch (error: any) {
    yield put(
      deleteTenantFailed({
        result: error?.response?.data,
        error: ["error"],
        pending: false,
      })
    );
  }
}

export default function* fetchTenantSaga() {
  yield all([
    takeLatest(FETCH_TENANTS_REQUEST, fetchTenants),
    takeLatest(FETCH_TENANT_REQUEST, fetchTenant),
    takeLatest(UPDATE_TENANT_REQUEST, updateTenant),
    takeLatest(DELETE_TENANT_REQUEST, deleteTenant),
  ]);
}
