/**
 * @Rulebook
 * Group Type, interface & function in following sequence
 * 1. Action Types
 * 2. Action interfaces
 * 3. Action functions
 * 4. Type of actions variable
 */

import { IActionsModel } from "../../interfaces/pages.model";
import { AppStore } from "../../interfaces/generic.model";

export const ACTIONS_REQUEST = "ACTIONS_REQUEST";
export const ACTIONS_SUCCESS = "ACTIONS_SUCCESS";
export const ACTIONS_FAILED = "ACTIONS_FAILED";

//#region - Action interfaces
export interface IActionsRequestAction {
  type: typeof ACTIONS_REQUEST;
}

export interface IActionsSuccessAction {
  type: typeof ACTIONS_SUCCESS;
  payload: AppStore<IActionsModel>;
}

export interface IActionsFailureAction {
  type: typeof ACTIONS_FAILED;
  payload: AppStore<IActionsModel>;
}
//#endregion

//#region - Action functions
export const fetchActionsRequest = (): IActionsRequestAction => ({
  type: ACTIONS_REQUEST,
});

export const fetchActionsSuccess = (
  payload: AppStore<IActionsModel>
): IActionsSuccessAction => ({
  type: ACTIONS_SUCCESS,
  payload,
});

export const fetchActionsFailed = (
  payload: AppStore<IActionsModel>
): IActionsFailureAction => ({
  type: ACTIONS_FAILED,
  payload,
});
//#endregion

export type ActionsActions =
  | IActionsRequestAction
  | IActionsSuccessAction
  | IActionsFailureAction;
