
/**
 * @Rulebook
 * Group Type, interface & function in following sequence
 * 1. Action Types
 * 2. Action interfaces
 * 3. Action functions
 * 4. Type of actions variable
 */

import { IAuthenticationModel, IAuthenticationRequestModel } from "../../interfaces/auth.model";
import { IAppStore } from "../../interfaces/generic.model";

export const AUTHENTICATE_USER_REQUEST = "AUTHENTICATE_USER_REQUEST";
export const AUTHENTICATE_USER_SUCCESS = "AUTHENTICATE_USER_SUCCESS";
export const AUTHENTICATE_USER_FAILED = "AUTHENTICATE_USER_FAILED";

//#region - Action interfaces
export interface IAuthenticationRequest {
    type: typeof AUTHENTICATE_USER_REQUEST;
    payload: IAuthenticationRequestModel;
}

export interface IAuthenticationSuccess {
    type: typeof AUTHENTICATE_USER_SUCCESS;
    payload: IAppStore<IAuthenticationModel>;
}

export interface IAuthenticationFailure {
    type: typeof AUTHENTICATE_USER_FAILED;
    payload: IAppStore<IAuthenticationModel>;
}
//#endregion

//#region - Action functions
export const authenticate = (payload: any): IAuthenticationRequest => ({
    type: AUTHENTICATE_USER_REQUEST,
    payload
});

export const authenticateSuccess = (payload: IAppStore<IAuthenticationModel>): IAuthenticationSuccess => ({
    type: AUTHENTICATE_USER_SUCCESS,
    payload
});

export const authenticateFailed = (payload: IAppStore<IAuthenticationModel>): IAuthenticationFailure => ({
    type: AUTHENTICATE_USER_FAILED,
    payload
});
//#endregion

export type AuthenticateActions = IAuthenticationRequest | IAuthenticationSuccess | IAuthenticationFailure;
