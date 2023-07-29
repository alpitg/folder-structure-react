import { IAuthenticationModel } from "../../interfaces/auth.model";
import { IAppStore, AppStore } from "../../interfaces/generic.model";
import {
  AuthenticateActions,
  AUTHENTICATE_USER_FAILED,
  AUTHENTICATE_USER_REQUEST,
  AUTHENTICATE_USER_SUCCESS,
} from "../actions/auth.action";

const initialState: IAppStore<IAuthenticationModel> =
  new AppStore<IAuthenticationModel>();

const authenticateReducer = (
  state = initialState,
  action: AuthenticateActions
) => {
  switch (action.type) {
    case AUTHENTICATE_USER_REQUEST:
      return {
        ...state,
        pending: true,
      } as typeof initialState;
    case AUTHENTICATE_USER_SUCCESS:
      return {
        ...state,
        result: action.payload.result,
        pending: false,
      } as typeof initialState;
    case AUTHENTICATE_USER_FAILED:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      } as typeof initialState;
    default:
      return state;
  }
};

export default authenticateReducer;
