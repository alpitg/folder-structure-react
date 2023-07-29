import { IAppStore, AppStore } from "../../interfaces/generic.model";
import { IUserModel } from "../../interfaces/user.model";
import {
  FETCH_USERS_FAILED,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  UsersActions,
} from "../actions/users.action";

const initialState: IAppStore<IUserModel[]> = new AppStore<IUserModel[]>();

const usersReducer = (state = initialState, action: UsersActions) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        pending: true,
      } as typeof initialState;
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        result: action.payload.result,
        pending: false,
      } as typeof initialState;
    case FETCH_USERS_FAILED:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      } as typeof initialState;
    default:
      return state;
  }
};

export default usersReducer;
