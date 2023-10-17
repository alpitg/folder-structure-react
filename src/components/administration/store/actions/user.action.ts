/**
 * @Rulebook
 * Group Type, interface & function in following sequence
 * 1. Action Types
 * 2. Action interfaces
 * 3. Action functions
 * 4. Type of actions variable
 */

import { AppStore } from "../../../../interfaces/generic.model";
import {
  UserModel,
  IUsersRequestModel,
} from "../../../../interfaces/user.model";

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILED = "FETCH_USER_FAILED";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILED = "UPDATE_USER_FAILED";

export const UPDATE_USER_CLAIM_REQUEST = "UPDATE_USER_CLAIM_REQUEST";
export const UPDATE_USER_CLAIM_SUCCESS = "UPDATE_USER_CLAIM_SUCCESS";
export const UPDATE_USER_CLAIM_FAILED = "UPDATE_USER_CLAIM_FAILED";

export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILED = "DELETE_USER_FAILED";

export const RESET_FETCH_USERS = "RESET_FETCH_USERS";
export const RESET_UPDATE_USER = "RESET_UPDATE_USER";
export const RESET_DELETE_USER = "RESET_DELETE_USER";

//#region - Action interfaces

// FETCH ALL
export interface IFetchUsersRequestAction {
  type: typeof FETCH_USERS_REQUEST;
  payload: IUsersRequestModel;
}

export interface IFetchUsersSuccessAction {
  type: typeof FETCH_USERS_SUCCESS;
  payload: AppStore<UserModel[]>;
}

export interface IFetchUsersFailureAction {
  type: typeof FETCH_USERS_FAILED;
  payload: AppStore<UserModel[]>;
}

// FETCH
export interface IFetchUserRequestAction {
  type: typeof FETCH_USER_REQUEST;
  payload: string;
}

export interface IFetchUserSuccessAction {
  type: typeof FETCH_USER_SUCCESS;
  payload: AppStore<UserModel[]>;
}

export interface IFetchUserFailureAction {
  type: typeof FETCH_USER_FAILED;
  payload: AppStore<UserModel[]>;
}

// UPDATE
export interface IUpdateUserRequestAction {
  type: typeof UPDATE_USER_REQUEST;
  payload: UserModel;
}

export interface IUpdateUserSuccessAction {
  type: typeof UPDATE_USER_SUCCESS;
  payload: AppStore<UserModel>;
}

export interface IUpdateUserFailureAction {
  type: typeof UPDATE_USER_FAILED;
  payload: AppStore<UserModel>;
}

// UPDATE CLAIM
export interface IUpdateUserClaimRequestAction {
  type: typeof UPDATE_USER_CLAIM_REQUEST;
  payload: UserModel;
}
export interface IUpdateUserClaimSuccessAction {
  type: typeof UPDATE_USER_CLAIM_SUCCESS;
  payload: AppStore<UserModel>;
}
export interface IUpdateUserClaimFailureAction {
  type: typeof UPDATE_USER_CLAIM_FAILED;
  payload: AppStore<UserModel>;
}

// DELETE
export interface IDeleteUserRequestAction {
  type: typeof DELETE_USER_REQUEST;
  payload: string;
}

export interface IDeleteUserSuccessAction {
  type: typeof DELETE_USER_SUCCESS;
  payload: AppStore<string>;
}

export interface IDeleteUserFailedAction {
  type: typeof DELETE_USER_FAILED;
  payload: AppStore<string>;
}

export interface IResetFetchUsers {
  type: typeof RESET_FETCH_USERS;
}

export interface IResetUpdateUser {
  type: typeof RESET_UPDATE_USER;
}

export interface IResetDeleteUser {
  type: typeof RESET_DELETE_USER;
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
  payload: AppStore<UserModel[]>
): IFetchUsersSuccessAction => ({
  type: FETCH_USERS_SUCCESS,
  payload,
});

export const fetchUsersFailed = (
  payload: AppStore<UserModel[]>
): IFetchUsersFailureAction => ({
  type: FETCH_USERS_FAILED,
  payload,
});

export const fetchUserRequest = (payload: string): IFetchUserRequestAction => ({
  type: FETCH_USER_REQUEST,
  payload,
});

export const fetchUserSuccess = (
  payload: AppStore<UserModel[]>
): IFetchUserSuccessAction => ({
  type: FETCH_USER_SUCCESS,
  payload,
});

export const fetchUserFailed = (
  payload: AppStore<UserModel[]>
): IFetchUserFailureAction => ({
  type: FETCH_USER_FAILED,
  payload,
});

export const updateUserRequest = (
  payload: UserModel
): IUpdateUserRequestAction => ({
  type: UPDATE_USER_REQUEST,
  payload,
});

export const updateUserSuccess = (
  payload: AppStore<UserModel>
): IUpdateUserSuccessAction => ({
  type: UPDATE_USER_SUCCESS,
  payload,
});

export const updateUserFailed = (
  payload: AppStore<UserModel>
): IUpdateUserFailureAction => ({
  type: UPDATE_USER_FAILED,
  payload,
});

export const updateUserClaimRequest = (
  payload: UserModel
): IUpdateUserClaimRequestAction => ({
  type: UPDATE_USER_CLAIM_REQUEST,
  payload,
});

export const updateUserClaimSuccess = (
  payload: AppStore<UserModel>
): IUpdateUserClaimSuccessAction => ({
  type: UPDATE_USER_CLAIM_SUCCESS,
  payload,
});

export const updateUserClaimFailed = (
  payload: AppStore<UserModel>
): IUpdateUserClaimFailureAction => ({
  type: UPDATE_USER_CLAIM_FAILED,
  payload,
});

export const deleteUserRequest = (
  payload: string
): IDeleteUserRequestAction => ({
  type: DELETE_USER_REQUEST,
  payload,
});

export const deleteUserSuccess = (
  payload: AppStore<string>
): IDeleteUserSuccessAction => ({
  type: DELETE_USER_SUCCESS,
  payload,
});

export const deleteUserFailed = (
  payload: AppStore<string>
): IDeleteUserFailedAction => ({
  type: DELETE_USER_FAILED,
  payload,
});

export const resetFetchUser = (): IResetFetchUsers => ({
  type: RESET_FETCH_USERS,
});
export const resetUpdateUser = (): IResetUpdateUser => ({
  type: RESET_UPDATE_USER,
});
export const resetDeleteUser = (): IResetDeleteUser => ({
  type: RESET_DELETE_USER,
});
//#endregion

export type UsersActions =
  | IFetchUsersRequestAction
  | IFetchUsersSuccessAction
  | IFetchUsersFailureAction
  | IFetchUserRequestAction
  | IFetchUserSuccessAction
  | IFetchUserFailureAction
  | IUpdateUserRequestAction
  | IUpdateUserSuccessAction
  | IUpdateUserFailureAction
  | IUpdateUserClaimRequestAction
  | IUpdateUserClaimSuccessAction
  | IUpdateUserClaimFailureAction
  | IDeleteUserRequestAction
  | IDeleteUserSuccessAction
  | IDeleteUserFailedAction
  | IResetFetchUsers
  | IResetUpdateUser
  | IResetDeleteUser;
