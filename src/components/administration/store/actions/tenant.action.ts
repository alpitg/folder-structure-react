/**
 * @Rulebook
 * Group Type, interface & function in following sequence
 * 1. Action Types
 * 2. Action interfaces
 * 3. Action functions
 * 4. Type of actions variable
 */

import { AppStore } from "../../../../interfaces/generic.model";
import { TenantModel } from "../../../../interfaces/tenant.model";

export const FETCH_GLOBAL_SELECTED_TENANT = "FETCH_GLOBAL_SELECTED_TENANT";
export const UPDATE_GLOBAL_SELECTED_TENANT = "UPDATE_GLOBAL_SELECTED_TENANT";

export const FETCH_TENANTS_REQUEST = "FETCH_TENANTS_REQUEST";
export const FETCH_TENANTS_SUCCESS = "FETCH_TENANTS_SUCCESS";
export const FETCH_TENANTS_FAILED = "FETCH_TENANTS_FAILED";

export const FETCH_TENANT_REQUEST = "FETCH_TENANT_REQUEST";
export const FETCH_TENANT_SUCCESS = "FETCH_TENANT_SUCCESS";
export const FETCH_TENANT_FAILED = "FETCH_TENANT_FAILED";

export const UPDATE_TENANT_REQUEST = "UPDATE_TENANT_REQUEST";
export const UPDATE_TENANTS_SUCCESS = "UPDATE_TENANTS_SUCCESS";
export const UPDATE_TENANTS_FAILED = "UPDATE_TENANTS_FAILED";

export const DELETE_TENANT_REQUEST = "DELETE_TENANT_REQUEST";
export const DELETE_TENANT_SUCCESS = "DELETE_TENANT_SUCCESS";
export const DELETE_TENANT_FAILED = "DELETE_TENANT_FAILED";

export const RESET_FETCH_TENANTS = "RESET_FETCH_TENANTS";
export const RESET_UPDATE_TENANT = "RESET_UPDATE_TENANT";
export const RESET_DELETE_TENANT = "RESET_DELETE_TENANT";

//#region - Action interfaces

export interface IUpdateGlobalSelectedTenantAction {
  type: typeof UPDATE_GLOBAL_SELECTED_TENANT;
  payload: string;
}

// FETCH ALL
export interface IFetchTenantsRequestAction {
  type: typeof FETCH_TENANTS_REQUEST;
}

export interface IFetchTenantsSuccessAction {
  type: typeof FETCH_TENANTS_SUCCESS;
  payload: AppStore<TenantModel>;
}

export interface IFetchTenantsFailureAction {
  type: typeof FETCH_TENANTS_FAILED;
  payload: AppStore<TenantModel>;
}

// FETCH
export interface IFetchTenantRequestAction {
  type: typeof FETCH_TENANT_REQUEST;
  payload: string;
}

export interface IFetchTenantSuccessAction {
  type: typeof FETCH_TENANT_SUCCESS;
  payload: AppStore<TenantModel>;
}

export interface IFetchTenantFailureAction {
  type: typeof FETCH_TENANT_FAILED;
  payload: AppStore<TenantModel>;
}

// UPDATE
export interface IUpdateTenantsRequestAction {
  type: typeof UPDATE_TENANT_REQUEST;
  payload: TenantModel;
}

export interface IUpdateTenantsSuccessAction {
  type: typeof UPDATE_TENANTS_SUCCESS;
  payload: AppStore<TenantModel>;
}

export interface IUpdateTenantsFailureAction {
  type: typeof UPDATE_TENANTS_FAILED;
  payload: AppStore<TenantModel>;
}

// DELETE
export interface IDeleteTenantRequestAction {
  type: typeof DELETE_TENANT_REQUEST;
  payload: string;
}

export interface IDeleteTenantSuccessAction {
  type: typeof DELETE_TENANT_SUCCESS;
  payload: AppStore<string>;
}

export interface IDeleteTenantFailedAction {
  type: typeof DELETE_TENANT_FAILED;
  payload: AppStore<string>;
}

export interface IResetFetchTenants {
  type: typeof RESET_FETCH_TENANTS;
}

export interface IResetUpdateTenant {
  type: typeof RESET_UPDATE_TENANT;
}

export interface IResetDeleteTenant {
  type: typeof RESET_DELETE_TENANT;
}

//#endregion

//#region - Action functions

export const updateGlobalSelectedTenantAction = (
  payload: string
): IUpdateGlobalSelectedTenantAction => ({
  type: UPDATE_GLOBAL_SELECTED_TENANT,
  payload,
});

// FETCH ALL
export const fetchTenantsRequest = (): IFetchTenantsRequestAction => ({
  type: FETCH_TENANTS_REQUEST,
});

export const fetchTenantsSuccess = (
  payload: AppStore<TenantModel>
): IFetchTenantsSuccessAction => ({
  type: FETCH_TENANTS_SUCCESS,
  payload,
});

export const fetchTenantsFailed = (
  payload: AppStore<TenantModel>
): IFetchTenantsFailureAction => ({
  type: FETCH_TENANTS_FAILED,
  payload,
});

// FETCH
export const fetchTenantRequest = (
  payload: string
): IFetchTenantRequestAction => ({
  type: FETCH_TENANT_REQUEST,
  payload,
});

export const fetchTenantSuccess = (
  payload: AppStore<TenantModel>
): IFetchTenantSuccessAction => ({
  type: FETCH_TENANT_SUCCESS,
  payload,
});

export const fetchTenantFailed = (
  payload: AppStore<TenantModel>
): IFetchTenantFailureAction => ({
  type: FETCH_TENANT_FAILED,
  payload,
});

// UPDATE
export const updateTenantsRequest = (
  payload: TenantModel
): IUpdateTenantsRequestAction => ({
  type: UPDATE_TENANT_REQUEST,
  payload,
});

export const updateTenantsSuccess = (
  payload: AppStore<TenantModel>
): IUpdateTenantsSuccessAction => ({
  type: UPDATE_TENANTS_SUCCESS,
  payload,
});

export const updateTenantsFailed = (
  payload: AppStore<TenantModel>
): IUpdateTenantsFailureAction => ({
  type: UPDATE_TENANTS_FAILED,
  payload,
});

// DELETE
export const deleteTenantRequest = (
  payload: string
): IDeleteTenantRequestAction => ({
  type: DELETE_TENANT_REQUEST,
  payload,
});

export const deleteTenantSuccess = (
  payload: AppStore<string>
): IDeleteTenantSuccessAction => ({
  type: DELETE_TENANT_SUCCESS,
  payload,
});

export const deleteTenantFailed = (
  payload: AppStore<string>
): IDeleteTenantFailedAction => ({
  type: DELETE_TENANT_FAILED,
  payload,
});

export const resetFetchTenant = (): IResetFetchTenants => ({
  type: RESET_FETCH_TENANTS,
});
export const resetUpdateTenant = (): IResetUpdateTenant => ({
  type: RESET_UPDATE_TENANT,
});
export const resetDeleteTenant = (): IResetDeleteTenant => ({
  type: RESET_DELETE_TENANT,
});
//#endregion

export type TenantsActions =
  | IUpdateGlobalSelectedTenantAction
  | IFetchTenantsRequestAction
  | IFetchTenantsSuccessAction
  | IFetchTenantsFailureAction
  | IFetchTenantRequestAction
  | IFetchTenantSuccessAction
  | IFetchTenantFailureAction
  | IUpdateTenantsRequestAction
  | IUpdateTenantsSuccessAction
  | IUpdateTenantsFailureAction
  | IDeleteTenantRequestAction
  | IDeleteTenantSuccessAction
  | IDeleteTenantFailedAction
  | IResetFetchTenants
  | IResetUpdateTenant
  | IResetDeleteTenant;
