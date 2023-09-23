import { AppStore, IAppStore } from "../../../../interfaces/generic.model";
import {
  IUserAppStore,
  IUserModel,
  IUserResponseModel,
  UserAppStore,
} from "../../../../interfaces/user.model";
import {
  DELETE_USER_FAILED,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  FETCH_USERS_FAILED,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  UPDATE_USERS_FAILED,
  UPDATE_USER_REQUEST,
  UPDATE_USERS_SUCCESS,
  UsersActions,
} from "../actions/user.action";

const initialState: IUserAppStore = new UserAppStore();

const userReducer = (state = initialState, action: UsersActions) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        pending: true,
      } as typeof initialState;
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        list: {
          result: action.payload.result,
          pending: false,
        },
      } as typeof initialState;
    case FETCH_USERS_FAILED:
      return {
        ...state,
        list: {
          pending: false,
          error: action.payload.error,
        },
      } as typeof initialState;
    case UPDATE_USER_REQUEST:
      return {
        ...state,
        pending: true,
      } as typeof initialState;
    case UPDATE_USERS_SUCCESS:
      return {
        ...state,
        result: state.list.result?.items?.map((x) => {
          if (x.id === action.payload.result?.id) {
            return { ...x, name: action.payload.result.name };
          }
          return x;
        }),
        pending: false,
      } as typeof initialState;
    case UPDATE_USERS_FAILED:
      return {
        ...state,
        result: state.list?.result?.items?.map((x) => {
          if (x.id === action.payload.result?.id) {
            return { ...x, name: action.payload.result.name };
          }
          return x;
        }),
        pending: false,
      } as typeof initialState;
    // return {
    //   ...state,
    //   pending: false,
    //   error: action.payload.error,
    // } as typeof initialState;

    case DELETE_USER_REQUEST:
      return {
        ...state,
        pending: true,
      } as typeof initialState;
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        delete: {
          result: action.payload.result,
          pending: false,
        },
        list: {
          result: {
            items: state.list.result?.items?.filter(
              (item) => item.id !== action.payload.result
            ),
          },
        },
      } as typeof initialState;
    case DELETE_USER_FAILED:
      // TODO: Update this once Actual API is implemented
      return {
        ...state,
        delete: {
          result: action.payload.result,
          pending: false,
        },
        list: {
          result: {
            items: state.list.result?.items?.filter(
              (item) => item.id !== action.payload.result
            ),
          },
        },
      } as typeof initialState;
    // return {
    //   ...state,
    //   pending: false,
    //   error: action.payload.error,
    // } as typeof initialState;
    default:
      return state;
  }
};

export default userReducer;
