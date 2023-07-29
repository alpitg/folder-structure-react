/**
 * @Rulebook
 * Group Type, interface & function in following sequence
 * 1. Action Types
 * 2. Action interfaces
 * 3. Action functions
 * 4. Type of actions variable
 */

import { IAppStore } from "../../interfaces/generic.model";
import {
  IFetchUsersRequestModel,
  IUserModel,
} from "../../interfaces/user.model";

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

//#region - Action interfaces
export interface IFetchUsersRequestAction {
  type: typeof FETCH_USERS_REQUEST;
  payload: IFetchUsersRequestModel;
}

export interface IFetchUsersSuccessAction {
  type: typeof FETCH_USERS_SUCCESS;
  payload: IAppStore<IUserModel[]>;
}

export interface IFetchUsersFailureAction {
  type: typeof FETCH_USERS_FAILED;
  payload: IAppStore<IUserModel[]>;
}
//#endregion

//#region - Action functions
export const fetchUsersRequest = (
  payload: IFetchUsersRequestModel
): IFetchUsersRequestAction => ({
  type: FETCH_USERS_REQUEST,
  payload,
});

export const fetchUsersSuccess = (
  payload: IAppStore<IUserModel[]>
): IFetchUsersSuccessAction => ({
  type: FETCH_USERS_SUCCESS,
  payload,
});

export const fetchUsersFailed = (
  payload: IAppStore<IUserModel[]>
): IFetchUsersFailureAction => ({
  type: FETCH_USERS_FAILED,
  payload,
});
//#endregion

export type UsersActions =
  | IFetchUsersRequestAction
  | IFetchUsersSuccessAction
  | IFetchUsersFailureAction;
