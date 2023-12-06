import { FacilityTypeAppStore } from "../../../../../../interfaces/facilityType.model";
import {
    DELETE_FACILITY_TYPE_FAILED,
    DELETE_FACILITY_TYPE_REQUEST,
    DELETE_FACILITY_TYPE_SUCCESS,
    FETCH_FACILITIES_TYPE_FAILED,
    FETCH_FACILITIES_TYPE_REQUEST,
    FETCH_FACILITIES_TYPE_SUCCESS,
    FETCH_FACILITY_TYPE_FAILED,
    FETCH_FACILITY_TYPE_REQUEST,
    FETCH_FACILITY_TYPE_SUCCESS,
    FacilityTypeAction,
    RESET_DELETE_FACILITY_TYPE,
    RESET_UPDATE_FACILITY_TYPE,
    UPDATE_FACILITY_TYPE_FAILED,
    UPDATE_FACILITY_TYPE_REQUEST,
    UPDATE_FACILITY_TYPE_SUCCESS,
} from "../.././store/actions/facilityType.action"
const initialState: FacilityTypeAppStore = new FacilityTypeAppStore();

const facilityTypeReducer = (state = initialState, action: FacilityTypeAction) => {
    switch (action.type) {
        case FETCH_FACILITIES_TYPE_REQUEST:
            return {
                ...state,
                list: {
                    pending: true
                },
            } as typeof initialState;
        case FETCH_FACILITIES_TYPE_SUCCESS:
            return {
                ...state,
                list: {
                    result: action.payload.result,
                    pending: false,
                },
            } as typeof initialState;
        case FETCH_FACILITIES_TYPE_FAILED:
            return {
                ...state,
                list: {
                    pending: false,
                    error: action.payload.error,

                },
            } as typeof initialState;
        case FETCH_FACILITY_TYPE_REQUEST:
            return {
                ...state,
                update: {
                    pending: true,
                },
            } as typeof initialState;
        case FETCH_FACILITY_TYPE_SUCCESS:
            return {
                ...state,
                update: {
                    result: action.payload.result,
                    pending: false,
                },
            } as typeof initialState;
        case FETCH_FACILITY_TYPE_FAILED:
            return {
                ...state,
                update: {
                    pending: false,
                    error: action.payload.error,
                },
            } as typeof initialState;
        case UPDATE_FACILITY_TYPE_REQUEST:
            return {
                ...state,
                update: {
                    result: null,
                    pending: true,
                    error: [],
                },
            } as typeof initialState;
        case UPDATE_FACILITY_TYPE_SUCCESS:
            return {
                ...state,
                update: {
                    result: action.payload.result,
                    pending: false,
                    error: [],
                },
            } as typeof initialState;
        case UPDATE_FACILITY_TYPE_FAILED:
            return {
                ...state,
                update: {
                    error: action.payload.error,
                    pending: false,
                },
            } as typeof initialState;
            case RESET_UPDATE_FACILITY_TYPE:
                return {
                    ...state,
                    update: {
                        error: [],
                        pending: false,
                        result: null,
                    },
                } as typeof initialState;
        case DELETE_FACILITY_TYPE_REQUEST:
            return {
                ...state,
                delete: {
                    pending: true,
                },
            } as typeof initialState;
        case DELETE_FACILITY_TYPE_SUCCESS:
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
        case DELETE_FACILITY_TYPE_FAILED:
            return {
                ...state,
                delete: {
                    error: action.payload.result,
                    pending: false,
                },
            } as unknown as typeof initialState;
            case RESET_DELETE_FACILITY_TYPE:
                return {
                  ...state,
                  delete: {
                    error: [],
                    pending: false,
                    result: null,
                  },
                } as typeof initialState;
        default:
            return state;
    }
};

export default facilityTypeReducer;