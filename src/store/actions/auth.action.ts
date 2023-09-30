/**
 * @Rulebook
 * Group Type, interface & function in following sequence
 * 1. Action Types
 * 2. Action interfaces
 * 3. Action functions
 * 4. Type of actions variable
 */

import {
  AuthenticationModel,
  IAuthenticationRequestModel,
} from "../../interfaces/auth.model";
import { AppStore } from "../../interfaces/generic.model";

export const AUTHENTICATE_USER_REQUEST = "AUTHENTICATE_USER_REQUEST";
export const AUTHENTICATE_USER_SUCCESS = "AUTHENTICATE_USER_SUCCESS";
export const AUTHENTICATE_USER_FAILED = "AUTHENTICATE_USER_FAILED";
export const LOGOUT_USER_REQUEST = "LOGOUT_USER_REQUEST";

//#region - Action interfaces
export interface IAuthenticationRequestAction {
  type: typeof AUTHENTICATE_USER_REQUEST;
  payload: IAuthenticationRequestModel;
}

export interface IAuthenticationSuccessAction {
  type: typeof AUTHENTICATE_USER_SUCCESS;
  payload: AppStore<AuthenticationModel>;
}

export interface IAuthenticationFailureAction {
  type: typeof AUTHENTICATE_USER_FAILED;
  payload: AppStore<AuthenticationModel>;
}

export interface ILogoutUserRequestAction {
  type: typeof LOGOUT_USER_REQUEST;
  payload: any;
}
//#endregion

//#region - Action functions
export const authenticateRequest = (
  payload: any
): IAuthenticationRequestAction => ({
  type: AUTHENTICATE_USER_REQUEST,
  payload,
});

export const authenticateSuccess = (
  payload: AppStore<AuthenticationModel>
): IAuthenticationSuccessAction => ({
  type: AUTHENTICATE_USER_SUCCESS,
  payload,
});

export const authenticateFailed = (
  payload: AppStore<AuthenticationModel>
): IAuthenticationFailureAction => ({
  type: AUTHENTICATE_USER_FAILED,
  payload,
});

export const logoutUserRequest = (payload: any): ILogoutUserRequestAction => ({
  type: LOGOUT_USER_REQUEST,
  payload,
});

//#endregion

export type AuthenticateActions =
  | IAuthenticationRequestAction
  | IAuthenticationSuccessAction
  | IAuthenticationFailureAction
  | ILogoutUserRequestAction;
