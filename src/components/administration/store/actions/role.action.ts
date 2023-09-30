/**
 * @Rulebook
 * Group Type, interface & function in following sequence
 * 1. Action Types
 * 2. Action interfaces
 * 3. Action functions
 * 4. Type of actions variable
 */

import { AppStore } from "../../../../interfaces/generic.model";
import { IRoleModel } from "../../../../interfaces/role.model";

export const FETCH_ROLES_REQUEST = "FETCH_ROLES_REQUEST";
export const FETCH_ROLES_SUCCESS = "FETCH_ROLES_SUCCESS";
export const FETCH_ROLES_FAILED = "FETCH_ROLES_FAILED";

export const FETCH_ROLE_REQUEST = "FETCH_ROLE_REQUEST";
export const FETCH_ROLE_SUCCESS = "FETCH_ROLE_SUCCESS";
export const FETCH_ROLE_FAILED = "FETCH_ROLE_FAILED";

export const UPDATE_ROLE_REQUEST = "UPDATE_ROLE_REQUEST";
export const UPDATE_ROLES_SUCCESS = "UPDATE_ROLES_SUCCESS";
export const UPDATE_ROLES_FAILED = "UPDATE_ROLES_FAILED";

export const DELETE_ROLE_REQUEST = "DELETE_ROLE_REQUEST";
export const DELETE_ROLE_SUCCESS = "DELETE_ROLE_SUCCESS";
export const DELETE_ROLE_FAILED = "DELETE_ROLE_FAILED";

export const RESET_FETCH_ROLES = "RESET_FETCH_ROLES";
export const RESET_UPDATE_ROLE = "RESET_UPDATE_ROLE";
export const RESET_DELETE_ROLE = "RESET_DELETE_ROLE";

//#region - Action interfaces

// FETCH ALL
export interface IFetchRolesRequestAction {
  type: typeof FETCH_ROLES_REQUEST;
}

export interface IFetchRolesSuccessAction {
  type: typeof FETCH_ROLES_SUCCESS;
  payload: AppStore<IRoleModel>;
}

export interface IFetchRolesFailureAction {
  type: typeof FETCH_ROLES_FAILED;
  payload: AppStore<IRoleModel>;
}

// FETCH
export interface IFetchRoleRequestAction {
  type: typeof FETCH_ROLE_REQUEST;
  payload: string;
}

export interface IFetchRoleSuccessAction {
  type: typeof FETCH_ROLE_SUCCESS;
  payload: AppStore<IRoleModel>;
}

export interface IFetchRoleFailureAction {
  type: typeof FETCH_ROLE_FAILED;
  payload: AppStore<IRoleModel>;
}

// UPDATE
export interface IUpdateRolesRequestAction {
  type: typeof UPDATE_ROLE_REQUEST;
  payload: IRoleModel;
}

export interface IUpdateRolesSuccessAction {
  type: typeof UPDATE_ROLES_SUCCESS;
  payload: AppStore<IRoleModel>;
}

export interface IUpdateRolesFailureAction {
  type: typeof UPDATE_ROLES_FAILED;
  payload: AppStore<IRoleModel>;
}

// DELETE
export interface IDeleteRoleRequestAction {
  type: typeof DELETE_ROLE_REQUEST;
  payload: string;
}

export interface IDeleteRoleSuccessAction {
  type: typeof DELETE_ROLE_SUCCESS;
  payload: AppStore<string>;
}

export interface IDeleteRoleFailedAction {
  type: typeof DELETE_ROLE_FAILED;
  payload: AppStore<string>;
}

export interface IResetFetchRoles {
  type: typeof RESET_FETCH_ROLES;
}

export interface IResetUpdateRole {
  type: typeof RESET_UPDATE_ROLE;
}

export interface IResetDeleteRole {
  type: typeof RESET_DELETE_ROLE;
}

//#endregion

//#region - Action functions
// FETCH ALL
export const fetchRolesRequest = (): IFetchRolesRequestAction => ({
  type: FETCH_ROLES_REQUEST,
});

export const fetchRolesSuccess = (
  payload: AppStore<IRoleModel>
): IFetchRolesSuccessAction => ({
  type: FETCH_ROLES_SUCCESS,
  payload,
});

export const fetchRolesFailed = (
  payload: AppStore<IRoleModel>
): IFetchRolesFailureAction => ({
  type: FETCH_ROLES_FAILED,
  payload,
});

// FETCH
export const fetchRoleRequest = (payload: string): IFetchRoleRequestAction => ({
  type: FETCH_ROLE_REQUEST,
  payload,
});

export const fetchRoleSuccess = (
  payload: AppStore<IRoleModel>
): IFetchRoleSuccessAction => ({
  type: FETCH_ROLE_SUCCESS,
  payload,
});

export const fetchRoleFailed = (
  payload: AppStore<IRoleModel>
): IFetchRoleFailureAction => ({
  type: FETCH_ROLE_FAILED,
  payload,
});

// UPDATE
export const updateRolesRequest = (
  payload: IRoleModel
): IUpdateRolesRequestAction => ({
  type: UPDATE_ROLE_REQUEST,
  payload,
});

export const updateRolesSuccess = (
  payload: AppStore<IRoleModel>
): IUpdateRolesSuccessAction => ({
  type: UPDATE_ROLES_SUCCESS,
  payload,
});

export const updateRolesFailed = (
  payload: AppStore<IRoleModel>
): IUpdateRolesFailureAction => ({
  type: UPDATE_ROLES_FAILED,
  payload,
});

// DELETE
export const deleteRoleRequest = (
  payload: string
): IDeleteRoleRequestAction => ({
  type: DELETE_ROLE_REQUEST,
  payload,
});

export const deleteRoleSuccess = (
  payload: AppStore<string>
): IDeleteRoleSuccessAction => ({
  type: DELETE_ROLE_SUCCESS,
  payload,
});

export const deleteRoleFailed = (
  payload: AppStore<string>
): IDeleteRoleFailedAction => ({
  type: DELETE_ROLE_FAILED,
  payload,
});

export const resetFetchRole = (): IResetFetchRoles => ({
  type: RESET_FETCH_ROLES,
});
export const resetUpdateRole = (): IResetUpdateRole => ({
  type: RESET_UPDATE_ROLE,
});
export const resetDeleteRole = (): IResetDeleteRole => ({
  type: RESET_DELETE_ROLE,
});
//#endregion

export type RolesActions =
  | IFetchRolesRequestAction
  | IFetchRolesSuccessAction
  | IFetchRolesFailureAction
  | IFetchRoleRequestAction
  | IFetchRoleSuccessAction
  | IFetchRoleFailureAction
  | IUpdateRolesRequestAction
  | IUpdateRolesSuccessAction
  | IUpdateRolesFailureAction
  | IDeleteRoleRequestAction
  | IDeleteRoleSuccessAction
  | IDeleteRoleFailedAction
  | IResetFetchRoles
  | IResetUpdateRole
  | IResetDeleteRole;
