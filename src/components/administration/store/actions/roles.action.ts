/**
 * @Rulebook
 * Group Type, interface & function in following sequence
 * 1. Action Types
 * 2. Action interfaces
 * 3. Action functions
 * 4. Type of actions variable
 */

import { IAppStore } from "../../../../interfaces/generic.model";
import { IRolesRequestModel } from "../../../../interfaces/role.model";
import { IRoleModel } from "../../../../interfaces/role.model";

export const FETCH_ROLES_REQUEST = "FETCH_ROLES_REQUEST";
export const FETCH_ROLES_SUCCESS = "FETCH_ROLES_SUCCESS";
export const FETCH_ROLES_FAILED = "FETCH_ROLES_FAILED";

export const UPDATE_ROLE_REQUEST = "UPDATE_ROLE_REQUEST";
export const UPDATE_ROLES_SUCCESS = "UPDATE_ROLES_SUCCESS";
export const UPDATE_ROLES_FAILED = "UPDATE_ROLES_FAILED";

export const DELETE_ROLE_REQUEST = "DELETE_ROLE_REQUEST";
export const DELETE_ROLE_SUCCESS = "DELETE_ROLE_SUCCESS";
export const DELETE_ROLE_FAILED = "DELETE_ROLE_FAILED";

//#region - Action interfaces

// FETCH
export interface IFetchRolesRequestAction {
  type: typeof FETCH_ROLES_REQUEST;
  payload: IRolesRequestModel;
}

export interface IFetchRolesSuccessAction {
  type: typeof FETCH_ROLES_SUCCESS;
  payload: IAppStore<IRoleModel[]>;
}

export interface IFetchRolesFailureAction {
  type: typeof FETCH_ROLES_FAILED;
  payload: IAppStore<IRoleModel[]>;
}

// UPDATE
export interface IUpdateRolesRequestAction {
  type: typeof UPDATE_ROLE_REQUEST;
  payload: IRolesRequestModel;
}

export interface IUpdateRolesSuccessAction {
  type: typeof UPDATE_ROLES_SUCCESS;
  payload: IAppStore<IRoleModel>;
}

export interface IUpdateRolesFailureAction {
  type: typeof UPDATE_ROLES_FAILED;
  payload: IAppStore<IRoleModel>;
}

// DELETE
export interface IDeleteRoleRequestAction {
  type: typeof DELETE_ROLE_REQUEST;
  payload: string;
}

export interface IDeleteRoleSuccessAction {
  type: typeof DELETE_ROLE_SUCCESS;
  payload: IAppStore<string>;
}

export interface IDeleteRoleFailedAction {
  type: typeof DELETE_ROLE_FAILED;
  payload: IAppStore<string>;
}

//#endregion

//#region - Action functions
export const fetchRolesRequest = (
  payload: IRolesRequestModel
): IFetchRolesRequestAction => ({
  type: FETCH_ROLES_REQUEST,
  payload,
});

export const fetchRolesSuccess = (
  payload: IAppStore<IRoleModel[]>
): IFetchRolesSuccessAction => ({
  type: FETCH_ROLES_SUCCESS,
  payload,
});

export const fetchRolesFailed = (
  payload: IAppStore<IRoleModel[]>
): IFetchRolesFailureAction => ({
  type: FETCH_ROLES_FAILED,
  payload,
});

export const updateRolesRequest = (
  payload: IRolesRequestModel
): IUpdateRolesRequestAction => ({
  type: UPDATE_ROLE_REQUEST,
  payload,
});

export const updateRolesSuccess = (
  payload: IAppStore<IRoleModel>
): IUpdateRolesSuccessAction => ({
  type: UPDATE_ROLES_SUCCESS,
  payload,
});

export const updateRolesFailed = (
  payload: IAppStore<IRoleModel>
): IUpdateRolesFailureAction => ({
  type: UPDATE_ROLES_FAILED,
  payload,
});

export const deleteRoleRequest = (
  payload: string
): IDeleteRoleRequestAction => ({
  type: DELETE_ROLE_REQUEST,
  payload,
});

export const deleteRoleSuccess = (
  payload: IAppStore<string>
): IDeleteRoleSuccessAction => ({
  type: DELETE_ROLE_SUCCESS,
  payload,
});

export const deleteRoleFailed = (
  payload: IAppStore<string>
): IDeleteRoleFailedAction => ({
  type: DELETE_ROLE_FAILED,
  payload,
});
//#endregion

export type RolesActions =
  | IFetchRolesRequestAction
  | IFetchRolesSuccessAction
  | IFetchRolesFailureAction
  | IUpdateRolesRequestAction
  | IUpdateRolesSuccessAction
  | IUpdateRolesFailureAction
  | IDeleteRoleRequestAction
  | IDeleteRoleSuccessAction
  | IDeleteRoleFailedAction;
