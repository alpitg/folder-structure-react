import { TENANT_ID_KEY } from "../../../../constants/global-contants/global-key.const";
import { TenantAppStore } from "../../../../interfaces/tenant.model";
import {
  DELETE_TENANT_FAILED,
  DELETE_TENANT_REQUEST,
  DELETE_TENANT_SUCCESS,
  FETCH_TENANTS_FAILED,
  FETCH_TENANTS_REQUEST,
  FETCH_TENANTS_SUCCESS,
  UPDATE_TENANTS_FAILED,
  UPDATE_TENANT_REQUEST,
  UPDATE_TENANTS_SUCCESS,
  RESET_UPDATE_TENANT,
  RESET_DELETE_TENANT,
  RESET_FETCH_TENANTS,
  TenantsActions,
  FETCH_TENANT_REQUEST,
  FETCH_TENANT_SUCCESS,
  FETCH_TENANT_FAILED,
  UPDATE_GLOBAL_SELECTED_TENANT,
} from "../actions/tenant.action";

const initialState: TenantAppStore = new TenantAppStore();

const tenantReducer = (state = initialState, action: TenantsActions) => {
  switch (action.type) {
    case UPDATE_GLOBAL_SELECTED_TENANT:
      localStorage.setItem(TENANT_ID_KEY, action.payload);
      return {
        ...state,
        globalSelectedTenant: action.payload,
      } as typeof initialState;

    //#region FETCH ALL
    case FETCH_TENANTS_REQUEST:
      return {
        ...state,
        list: {
          pending: true,
        },
      } as typeof initialState;
    case FETCH_TENANTS_SUCCESS:
      return {
        ...state,
        list: {
          result: action.payload.result,
          pending: false,
        },
      } as typeof initialState;
    case FETCH_TENANTS_FAILED:
      return {
        ...state,
        list: {
          pending: false,
          error: action.payload.error,
        },
      } as typeof initialState;
    case RESET_FETCH_TENANTS:
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
    case FETCH_TENANT_REQUEST:
      return {
        ...state,
        update: {
          pending: true,
        },
      } as typeof initialState;
    case FETCH_TENANT_SUCCESS:
      return {
        ...state,
        update: {
          result: action.payload.result,
          pending: false,
        },
      } as typeof initialState;
    case FETCH_TENANT_FAILED:
      return {
        ...state,
        update: {
          pending: false,
          error: action.payload.error,
        },
      } as typeof initialState;
    //#endregion

    //#region UPDATE
    case UPDATE_TENANT_REQUEST:
      return {
        ...state,
        update: {
          result: null,
          pending: true,
          error: [],
        },
      } as typeof initialState;
    case UPDATE_TENANTS_SUCCESS:
      return {
        ...state,
        update: {
          result: action.payload.result,
          pending: false,
          error: [],
        },
      } as typeof initialState;
    case UPDATE_TENANTS_FAILED:
      return {
        ...state,
        update: {
          result: action.payload.result,
          error: action.payload.error,
          pending: false,
        },
      } as typeof initialState;
    case RESET_UPDATE_TENANT:
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
    case DELETE_TENANT_REQUEST:
      return {
        ...state,
        delete: {
          pending: true,
        },
      } as typeof initialState;
    case DELETE_TENANT_SUCCESS:
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
    case DELETE_TENANT_FAILED:
      return {
        ...state,
        delete: {
          error: action.payload.result,
          pending: false,
        },
      } as typeof initialState;
    case RESET_DELETE_TENANT:
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

export default tenantReducer;
