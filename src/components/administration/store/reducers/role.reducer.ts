import { AppStore, IAppStore } from "../../../../interfaces/generic.model";
import { IRoleModel } from "../../../../interfaces/role.model";
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
  RolesActions,
} from "../actions/roles.action";

const initialState: IAppStore<IRoleModel[]> = new AppStore<IRoleModel[]>();

const roleReducer = (state = initialState, action: RolesActions) => {
  switch (action.type) {
    case FETCH_ROLES_REQUEST:
      return {
        ...state,
        pending: true,
      } as typeof initialState;
    case FETCH_ROLES_SUCCESS:
      return {
        ...state,
        result: action.payload.result,
        pending: false,
      } as typeof initialState;
    case FETCH_ROLES_FAILED:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      } as typeof initialState;
    case UPDATE_ROLE_REQUEST:
      return {
        ...state,
        pending: true,
      } as typeof initialState;
    case UPDATE_ROLES_SUCCESS:
      return {
        ...state,
        result: state.result?.map((x) => {
          if (x.id === action.payload.result?.id) {
            return { ...x, name: action.payload.result.name };
          }
          return x;
        }),
        pending: false,
      } as typeof initialState;
    case UPDATE_ROLES_FAILED:
      return {
        ...state,
        result: state.result?.map((x) => {
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

    case DELETE_ROLE_REQUEST:
      return {
        ...state,
        pending: true,
      } as typeof initialState;
    case DELETE_ROLE_SUCCESS:
      return {
        ...state,
        result: state.result?.filter(
          (item) => item.id !== action.payload.result
        ),
        pending: false,
      } as typeof initialState;
    case DELETE_ROLE_FAILED:
      // TODO: Update this once Actual API is implemented
      return {
        ...state,
        result: state.result?.filter(
          (item) => item.id !== action.payload.result
        ),
        pending: false,
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

export default roleReducer;
