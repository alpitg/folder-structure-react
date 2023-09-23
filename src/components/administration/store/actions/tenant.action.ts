/**
 * @Rulebook
 * Group Type, interface & function in following sequence
 * 1. Action Types
 * 2. Action interfaces
 * 3. Action functions
 * 4. Type of actions variable
 */

import { IAppStore } from "../../../../interfaces/generic.model";
import {
  ITenantModel,
  ITenantResponseModel,
  ITenantsRequestModel,
} from "../../../../interfaces/tenant.model";

export const FETCH_TENANTS_REQUEST = "FETCH_TENANTS_REQUEST";
export const FETCH_TENANTS_SUCCESS = "FETCH_TENANTS_SUCCESS";
export const FETCH_TENANTS_FAILED = "FETCH_TENANTS_FAILED";

export const UPDATE_TENANT_REQUEST = "UPDATE_TENANT_REQUEST";
export const UPDATE_TENANTS_SUCCESS = "UPDATE_TENANTS_SUCCESS";
export const UPDATE_TENANTS_FAILED = "UPDATE_TENANTS_FAILED";

export const DELETE_TENANT_REQUEST = "DELETE_TENANT_REQUEST";
export const DELETE_TENANT_SUCCESS = "DELETE_TENANT_SUCCESS";
export const DELETE_TENANT_FAILED = "DELETE_TENANT_FAILED";

//#region - Action interfaces

// FETCH
export interface IFetchTenantsRequestAction {
  type: typeof FETCH_TENANTS_REQUEST;
  payload: ITenantsRequestModel;
}

export interface IFetchTenantsSuccessAction {
  type: typeof FETCH_TENANTS_SUCCESS;
  payload: IAppStore<ITenantResponseModel[]>;
}

export interface IFetchTenantsFailureAction {
  type: typeof FETCH_TENANTS_FAILED;
  payload: IAppStore<ITenantResponseModel[]>;
}

// UPDATE
export interface IUpdateTenantsRequestAction {
  type: typeof UPDATE_TENANT_REQUEST;
  payload: ITenantModel;
}

export interface IUpdateTenantsSuccessAction {
  type: typeof UPDATE_TENANTS_SUCCESS;
  payload: IAppStore<ITenantModel>;
}

export interface IUpdateTenantsFailureAction {
  type: typeof UPDATE_TENANTS_FAILED;
  payload: IAppStore<ITenantModel>;
}

// DELETE
export interface IDeleteTenantRequestAction {
  type: typeof DELETE_TENANT_REQUEST;
  payload: string;
}

export interface IDeleteTenantSuccessAction {
  type: typeof DELETE_TENANT_SUCCESS;
  payload: IAppStore<string>;
}

export interface IDeleteTenantFailedAction {
  type: typeof DELETE_TENANT_FAILED;
  payload: IAppStore<string>;
}

//#endregion

//#region - Action functions
export const fetchTenantsRequest = (
  payload: ITenantsRequestModel
): IFetchTenantsRequestAction => ({
  type: FETCH_TENANTS_REQUEST,
  payload,
});

export const fetchTenantsSuccess = (
  payload: IAppStore<ITenantResponseModel[]>
): IFetchTenantsSuccessAction => ({
  type: FETCH_TENANTS_SUCCESS,
  payload,
});

export const fetchTenantsFailed = (
  payload: IAppStore<ITenantResponseModel[]>
): IFetchTenantsFailureAction => ({
  type: FETCH_TENANTS_FAILED,
  payload,
});

export const updateTenantRequest = (
  payload: ITenantModel
): IUpdateTenantsRequestAction => ({
  type: UPDATE_TENANT_REQUEST,
  payload,
});

export const updateTenantSuccess = (
  payload: IAppStore<ITenantModel>
): IUpdateTenantsSuccessAction => ({
  type: UPDATE_TENANTS_SUCCESS,
  payload,
});

export const updateTenantFailed = (
  payload: IAppStore<ITenantModel>
): IUpdateTenantsFailureAction => ({
  type: UPDATE_TENANTS_FAILED,
  payload,
});

export const deleteTenantRequest = (
  payload: string
): IDeleteTenantRequestAction => ({
  type: DELETE_TENANT_REQUEST,
  payload,
});

export const deleteTenantSuccess = (
  payload: IAppStore<string>
): IDeleteTenantSuccessAction => ({
  type: DELETE_TENANT_SUCCESS,
  payload,
});

export const deleteTenantFailed = (
  payload: IAppStore<string>
): IDeleteTenantFailedAction => ({
  type: DELETE_TENANT_FAILED,
  payload,
});
//#endregion

export type TenantsActions =
  | IFetchTenantsRequestAction
  | IFetchTenantsSuccessAction
  | IFetchTenantsFailureAction
  | IUpdateTenantsRequestAction
  | IUpdateTenantsSuccessAction
  | IUpdateTenantsFailureAction
  | IDeleteTenantRequestAction
  | IDeleteTenantSuccessAction
  | IDeleteTenantFailedAction;
