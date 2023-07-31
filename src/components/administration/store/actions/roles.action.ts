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
import { IUserModel } from "../../../../interfaces/user.model";

export const FETCH_ROLES_REQUEST = "FETCH_ROLES_REQUEST";
export const FETCH_ROLES_SUCCESS = "FETCH_ROLES_SUCCESS";
export const FETCH_ROLES_FAILED = "FETCH_ROLES_FAILED";

export const UPDATE_ROLES_REQUEST = "UPDATE_ROLES_REQUEST";
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
  payload: IAppStore<IUserModel[]>;
}

export interface IFetchRolesFailureAction {
  type: typeof FETCH_ROLES_FAILED;
  payload: IAppStore<IUserModel[]>;
}

// UPDATE
export interface IUpdateRolesRequestAction {
  type: typeof UPDATE_ROLES_REQUEST;
  payload: IRolesRequestModel;
}

export interface IUpdateRolesSuccessAction {
  type: typeof UPDATE_ROLES_SUCCESS;
  payload: IAppStore<IUserModel>;
}

export interface IUpdateRolesFailureAction {
  type: typeof UPDATE_ROLES_FAILED;
  payload: IAppStore<IUserModel>;
}

// DELETE
export interface IDeleteUserRequestAction {
  type: typeof DELETE_ROLE_REQUEST;
  payload: string;
}

export interface IDeleteUserSuccessAction {
  type: typeof DELETE_ROLE_SUCCESS;
  payload: IAppStore<string>;
}

export interface IDeleteUserFailedAction {
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
  payload: IAppStore<IUserModel[]>
): IFetchRolesSuccessAction => ({
  type: FETCH_ROLES_SUCCESS,
  payload,
});

export const fetchRolesFailed = (
  payload: IAppStore<IUserModel[]>
): IFetchRolesFailureAction => ({
  type: FETCH_ROLES_FAILED,
  payload,
});

export const updateRolesRequest = (
  payload: IRolesRequestModel
): IUpdateRolesRequestAction => ({
  type: UPDATE_ROLES_REQUEST,
  payload,
});

export const updateRolesSuccess = (
  payload: IAppStore<IUserModel>
): IUpdateRolesSuccessAction => ({
  type: UPDATE_ROLES_SUCCESS,
  payload,
});

export const updateRolesFailed = (
  payload: IAppStore<IUserModel>
): IUpdateRolesFailureAction => ({
  type: UPDATE_ROLES_FAILED,
  payload,
});

export const deleteUserRequest = (
  payload: string
): IDeleteUserRequestAction => ({
  type: DELETE_ROLE_REQUEST,
  payload,
});

export const deleteUserSuccess = (
  payload: IAppStore<string>
): IDeleteUserSuccessAction => ({
  type: DELETE_ROLE_SUCCESS,
  payload,
});

export const deleteUserFailed = (
  payload: IAppStore<string>
): IDeleteUserFailedAction => ({
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
  | IDeleteUserRequestAction
  | IDeleteUserSuccessAction
  | IDeleteUserFailedAction;
