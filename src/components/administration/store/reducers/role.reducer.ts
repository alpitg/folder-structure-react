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
  RESET_FETCH_ROLE,
  RolesActions,
} from "../actions/role.action";

const initialState: IRoleAppStore = new RoleAppStore();

const roleReducer = (state = initialState, action: RolesActions) => {
  switch (action.type) {
    //#region FETCH
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
    case RESET_FETCH_ROLE:
      return {
        ...state,
        list: {
          error: "",
          pending: false,
          result: null,
        },
      } as typeof initialState;
    //#endregion

    //#region UPDATE
    case UPDATE_ROLE_REQUEST:
      return {
        ...state,
        update: {
          pending: true,
        },
      } as typeof initialState;
    case UPDATE_ROLES_SUCCESS:
      return {
        ...state,
        update: {
          result: state.list.result?.map((x) => {
            if (x.id === action.payload.result?.id) {
              return { ...x, name: action.payload.result.name };
            }
            return x;
          }),
          pending: false,
        },
      } as typeof initialState;
    case UPDATE_ROLES_FAILED:
      // TODO: Update this once Actual API is implemented
      return {
        ...state,
        update: {
          result: state.list.result?.map((x) => {
            if (x.id === action.payload.result?.id) {
              return { ...x, name: action.payload.result.name };
            }
            return x;
          }),
          error: action.payload.error,
          pending: false,
        },
      } as typeof initialState;
    case RESET_UPDATE_ROLE:
      return {
        ...state,
        update: {
          error: "",
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
      // TODO: Update this once Actual API is implemented
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
    case RESET_DELETE_ROLE:
      return {
        ...state,
        delete: {
          error: "",
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
