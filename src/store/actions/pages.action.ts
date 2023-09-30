/**
 * @Rulebook
 * Group Type, interface & function in following sequence
 * 1. Action Types
 * 2. Action interfaces
 * 3. Action functions
 * 4. Type of actions variable
 */

import { IPagesModel } from "../../interfaces/pages.model";
import { AppStore } from "../../interfaces/generic.model";

export const PAGES_REQUEST = "PAGES_REQUEST";
export const PAGES_SUCCESS = "PAGES_SUCCESS";
export const PAGES_FAILED = "PAGES_FAILED";

//#region - Action interfaces
export interface IPagesRequestAction {
  type: typeof PAGES_REQUEST;
}

export interface IPagesSuccessAction {
  type: typeof PAGES_SUCCESS;
  payload: AppStore<IPagesModel>;
}

export interface IPagesFailureAction {
  type: typeof PAGES_FAILED;
  payload: AppStore<IPagesModel>;
}
//#endregion

//#region - Action functions
export const fetchPagesRequest = (): IPagesRequestAction => ({
  type: PAGES_REQUEST,
});

export const fetchPagesSuccess = (
  payload: AppStore<IPagesModel>
): IPagesSuccessAction => ({
  type: PAGES_SUCCESS,
  payload,
});

export const fetchPagesFailed = (
  payload: AppStore<IPagesModel>
): IPagesFailureAction => ({
  type: PAGES_FAILED,
  payload,
});
//#endregion

export type PagesActions =
  | IPagesRequestAction
  | IPagesSuccessAction
  | IPagesFailureAction;
