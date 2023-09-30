import { IPagesModel } from "../../interfaces/pages.model";
import { AppStore } from "../../interfaces/generic.model";
import {
  PagesActions,
  PAGES_REQUEST,
  PAGES_SUCCESS,
  PAGES_FAILED,
} from "../actions/pages.action";

const initialState: AppStore<IPagesModel[]> = new AppStore<IPagesModel[]>();

const pagesReducer = (state = initialState, action: PagesActions) => {
  switch (action.type) {
    case PAGES_REQUEST:
      return {
        ...state,
        pending: true,
      } as typeof initialState;
    case PAGES_SUCCESS:
      return {
        ...state,
        result: action.payload.result,
        pending: false,
      } as typeof initialState;
    case PAGES_FAILED:
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
