
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
export interface IAuthenticationRequestAction {
    type: typeof AUTHENTICATE_USER_REQUEST;
    payload: IAuthenticationRequestModel;
}

export interface IAuthenticationSuccessAction {
    type: typeof AUTHENTICATE_USER_SUCCESS;
    payload: IAppStore<IAuthenticationModel>;
}

export interface IAuthenticationFailureAction {
    type: typeof AUTHENTICATE_USER_FAILED;
    payload: IAppStore<IAuthenticationModel>;
}
//#endregion

//#region - Action functions
export const authenticateRequest = (payload: any): IAuthenticationRequestAction => ({
    type: AUTHENTICATE_USER_REQUEST,
    payload
});

export const authenticateSuccess = (payload: IAppStore<IAuthenticationModel>): IAuthenticationSuccessAction => ({
    type: AUTHENTICATE_USER_SUCCESS,
    payload
});

export const authenticateFailed = (payload: IAppStore<IAuthenticationModel>): IAuthenticationFailureAction => ({
    type: AUTHENTICATE_USER_FAILED,
    payload
});
//#endregion

export type AuthenticateActions = IAuthenticationRequestAction | IAuthenticationSuccessAction | IAuthenticationFailureAction;
