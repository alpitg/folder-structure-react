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
  IUserModel,
  IUserResponseModel,
  IUsersRequestModel,
} from "../../../../interfaces/user.model";

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USERS_SUCCESS = "UPDATE_USERS_SUCCESS";
export const UPDATE_USERS_FAILED = "UPDATE_USERS_FAILED";

export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILED = "DELETE_USER_FAILED";

//#region - Action interfaces

// FETCH
export interface IFetchUsersRequestAction {
  type: typeof FETCH_USERS_REQUEST;
  payload: IUsersRequestModel;
}

export interface IFetchUsersSuccessAction {
  type: typeof FETCH_USERS_SUCCESS;
  payload: IAppStore<IUserResponseModel[]>;
}

export interface IFetchUsersFailureAction {
  type: typeof FETCH_USERS_FAILED;
  payload: IAppStore<IUserResponseModel[]>;
}

// UPDATE
export interface IUpdateUsersRequestAction {
  type: typeof UPDATE_USER_REQUEST;
  payload: IUserModel;
}

export interface IUpdateUsersSuccessAction {
  type: typeof UPDATE_USERS_SUCCESS;
  payload: IAppStore<IUserModel>;
}

export interface IUpdateUsersFailureAction {
  type: typeof UPDATE_USERS_FAILED;
  payload: IAppStore<IUserModel>;
}

// DELETE
export interface IDeleteUserRequestAction {
  type: typeof DELETE_USER_REQUEST;
  payload: string;
}

export interface IDeleteUserSuccessAction {
  type: typeof DELETE_USER_SUCCESS;
  payload: IAppStore<string>;
}

export interface IDeleteUserFailedAction {
  type: typeof DELETE_USER_FAILED;
  payload: IAppStore<string>;
}

//#endregion

//#region - Action functions
export const fetchUsersRequest = (
  payload: IUsersRequestModel
): IFetchUsersRequestAction => ({
  type: FETCH_USERS_REQUEST,
  payload,
});

export const fetchUsersSuccess = (
  payload: IAppStore<IUserResponseModel[]>
): IFetchUsersSuccessAction => ({
  type: FETCH_USERS_SUCCESS,
  payload,
});

export const fetchUsersFailed = (
  payload: IAppStore<IUserResponseModel[]>
): IFetchUsersFailureAction => ({
  type: FETCH_USERS_FAILED,
  payload,
});

export const updateUsersRequest = (
  payload: IUserModel
): IUpdateUsersRequestAction => ({
  type: UPDATE_USER_REQUEST,
  payload,
});

export const updateUsersSuccess = (
  payload: IAppStore<IUserModel>
): IUpdateUsersSuccessAction => ({
  type: UPDATE_USERS_SUCCESS,
  payload,
});

export const updateUsersFailed = (
  payload: IAppStore<IUserModel>
): IUpdateUsersFailureAction => ({
  type: UPDATE_USERS_FAILED,
  payload,
});

export const deleteUserRequest = (
  payload: string
): IDeleteUserRequestAction => ({
  type: DELETE_USER_REQUEST,
  payload,
});

export const deleteUserSuccess = (
  payload: IAppStore<string>
): IDeleteUserSuccessAction => ({
  type: DELETE_USER_SUCCESS,
  payload,
});

export const deleteUserFailed = (
  payload: IAppStore<string>
): IDeleteUserFailedAction => ({
  type: DELETE_USER_FAILED,
  payload,
});
//#endregion

export type UsersActions =
  | IFetchUsersRequestAction
  | IFetchUsersSuccessAction
  | IFetchUsersFailureAction
  | IUpdateUsersRequestAction
  | IUpdateUsersSuccessAction
  | IUpdateUsersFailureAction
  | IDeleteUserRequestAction
  | IDeleteUserSuccessAction
  | IDeleteUserFailedAction;
