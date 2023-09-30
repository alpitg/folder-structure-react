import { IRoleAppStore, RoleAppStore } from "../../../../interfaces/role.model";
import {
  DELETE_ROLE_FAILED,
  DELETE_ROLE_REQUEST,
  DELETE_ROLE_SUCCESS,
  FETCH_ROLES_FAILED,
  FETCH_ROLES_REQUEST,
  FETCH_ROLES_SUCCESS,
  UPDATE_ROLES_FAILED,
  UPDATE_ROLE_REQUEST,
  UPDATE_ROLES_SUCCESS,
  RESET_UPDATE_ROLE,
  RESET_DELETE_ROLE,
  RESET_FETCH_ROLES,
  RolesActions,
  FETCH_ROLE_REQUEST,
  FETCH_ROLE_SUCCESS,
  FETCH_ROLE_FAILED,
} from "../actions/role.action";

const initialState: IRoleAppStore = new RoleAppStore();

const roleReducer = (state = initialState, action: RolesActions) => {
  switch (action.type) {
    //#region FETCH ALL
    case FETCH_ROLES_REQUEST:
      return {
        ...state,
        list: {
          pending: true,
        },
      } as typeof initialState;
    case FETCH_ROLES_SUCCESS:
      return {
        ...state,
        list: {
          result: action.payload.result,
          pending: false,
        },
      } as typeof initialState;
    case FETCH_ROLES_FAILED:
      return {
        ...state,
        list: {
          pending: false,
          error: action.payload.error,
        },
      } as typeof initialState;
    case RESET_FETCH_ROLES:
      return {
        ...state,
        list: {
          error: [],
          pending: false,
          result: null,
        },
      } as typeof initialState;
    //#endregion

    //#region FETCH
    case FETCH_ROLE_REQUEST:
      return {
        ...state,
        update: {
          pending: true,
        },
      } as typeof initialState;
    case FETCH_ROLE_SUCCESS:
      return {
        ...state,
        update: {
          result: action.payload.result,
          pending: false,
        },
      } as typeof initialState;
    case FETCH_ROLE_FAILED:
      return {
        ...state,
        update: {
          pending: false,
          error: action.payload.error,
        },
      } as typeof initialState;
    //#endregion

    //#region UPDATE
    case UPDATE_ROLE_REQUEST:
      return {
        ...state,
        update: {
          result: null,
          pending: true,
          error: [],
        },
      } as typeof initialState;
    case UPDATE_ROLES_SUCCESS:
      return {
        ...state,
        update: {
          result: action.payload.result,
          pending: false,
          error: [],
        },
      } as typeof initialState;
    case UPDATE_ROLES_FAILED:
      return {
        ...state,
        update: {
          result: action.payload.result,
          error: action.payload.error,
          pending: false,
        },
      } as typeof initialState;
    case RESET_UPDATE_ROLE:
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
    case DELETE_ROLE_REQUEST:
      return {
        ...state,
        delete: {
          pending: true,
        },
      } as typeof initialState;
    case DELETE_ROLE_SUCCESS:
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
    case DELETE_ROLE_FAILED:
      return {
        ...state,
        delete: {
          error: action.payload.result,
          pending: false,
        },
      } as typeof initialState;
    case RESET_DELETE_ROLE:
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

export default roleReducer;
