import { AppStore, IAppStore } from "../../../../interfaces/generic.model";
import {
  ITenantAppStore,
  ITenantModel,
  ITenantResponseModel,
  TenantAppStore,
} from "../../../../interfaces/tenant.model";
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
  TenantsActions,
} from "../actions/tenant.action";

const initialState: ITenantAppStore = new TenantAppStore();

const tenantReducer = (state = initialState, action: TenantsActions) => {
  switch (action.type) {
    case FETCH_TENANTS_REQUEST:
      return {
        ...state,
        pending: true,
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
    case UPDATE_TENANT_REQUEST:
      return {
        ...state,
        pending: true,
      } as typeof initialState;
    case UPDATE_TENANTS_SUCCESS:
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
    case UPDATE_TENANTS_FAILED:
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

    case DELETE_TENANT_REQUEST:
      return {
        ...state,
        pending: true,
      } as typeof initialState;
    case DELETE_TENANT_SUCCESS:
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
    case DELETE_TENANT_FAILED:
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

export default tenantReducer;
