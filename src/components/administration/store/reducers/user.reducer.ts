import { UserAppStore } from "../../../../interfaces/user.model";
import {
  DELETE_USER_FAILED,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  FETCH_USERS_FAILED,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  UPDATE_USER_FAILED,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UsersActions,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
  RESET_DELETE_USER,
  RESET_UPDATE_USER,
  UPDATE_USER_CLAIM_REQUEST,
  UPDATE_USER_CLAIM_SUCCESS,
  UPDATE_USER_CLAIM_FAILED,
} from "../actions/user.action";

const initialState: UserAppStore = new UserAppStore();

const userReducer = (state = initialState, action: UsersActions) => {
  switch (action.type) {
    //#region FETCH ALL
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        list: {
          pending: true,
        },
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
    //#endregion

    //#region FETCH
    case FETCH_USER_REQUEST:
      return {
        ...state,
        update: {
          pending: true,
        },
      } as typeof initialState;
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        update: {
          result: action.payload.result,
          pending: false,
        },
      } as typeof initialState;
    case FETCH_USER_FAILED:
      return {
        ...state,
        update: {
          pending: false,
          error: action.payload.error,
        },
      } as typeof initialState;
    //#endregion

    //#region UPDATE
    case UPDATE_USER_REQUEST:
      return {
        ...state,
        update: {
          result: null,
          pending: true,
          error: [],
        },
      } as typeof initialState;
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        update: {
          result: action.payload.result,
          pending: false,
          error: [],
        },
      } as typeof initialState;
    case UPDATE_USER_FAILED:
      return {
        ...state,
        update: {
          error: action.payload.error,
          pending: false,
        },
      } as typeof initialState;
    case UPDATE_USER_CLAIM_REQUEST:
      return {
        ...state,
        update: {
          result: null,
          pending: true,
          error: [],
        },
      } as typeof initialState;
    case UPDATE_USER_CLAIM_SUCCESS:
      return {
        ...state,
        update: {
          result: action.payload.result,
          pending: false,
          error: [],
        },
      } as typeof initialState;
    case UPDATE_USER_CLAIM_FAILED:
      return {
        ...state,
        update: {
          result: action.payload.result,
          error: action.payload.error,
          pending: false,
        },
      } as typeof initialState;

    case RESET_UPDATE_USER:
      return {
        ...state,
        update: {
          error: [],
          pending: false,
          result: null,
        },
      } as typeof initialState;

    //#endregion

    //#region DELETE
    case DELETE_USER_REQUEST:
      return {
        ...state,
        delete: {
          pending: true,
        },
      } as typeof initialState;
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        delete: {
          result: action.payload.result,
          pending: false,
        },
        list: {
          result: state.list.result?.filter(
            (item) => item.id !== action.payload.result
          ),
        },
      } as typeof initialState;
    case DELETE_USER_FAILED:
      return {
        ...state,
        delete: {
          error: action.payload.error,
          pending: false,
        },
      } as typeof initialState;
    case RESET_DELETE_USER:
      return {
        ...state,
        delete: {
          error: [],
          pending: false,
          result: null,
        },
      } as typeof initialState;
    //#endregion

    default:
      return state;
  }
};

export default userReducer;
