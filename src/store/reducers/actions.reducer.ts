import { IActionsModel } from "../../interfaces/pages.model";
import { AppStore } from "../../interfaces/generic.model";
import {
  ActionsActions,
  ACTIONS_REQUEST,
  ACTIONS_SUCCESS,
  ACTIONS_FAILED,
} from "../actions/actions.action";

const initialState: AppStore<IActionsModel[]> = new AppStore<IActionsModel[]>();

const pagesReducer = (state = initialState, action: ActionsActions) => {
  switch (action.type) {
    case ACTIONS_REQUEST:
      return {
        ...state,
        pending: true,
      } as typeof initialState;
    case ACTIONS_SUCCESS:
      return {
        ...state,
        result: action.payload.result,
        pending: false,
      } as typeof initialState;
    case ACTIONS_FAILED:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      } as typeof initialState;
    default:
      return state;
  }
};

export default pagesReducer;
