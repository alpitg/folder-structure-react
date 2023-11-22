import { FacilityTypeAppStore } from "../../../../../../interfaces/facilityType.model";
import {
    FETCH_FACILITY_TYPES_FAILED,
    FETCH_FACILITY_TYPES_REQUEST,
    FETCH_FACILITY_TYPES_SUCCESS,
    FETCH_FACILITY_TYPE_FAILED,
    FETCH_FACILITY_TYPE_REQUEST,
    FETCH_FACILITY_TYPE_SUCCESS,
    FacilityTypeAction, 
    UPDATE_FACILITY_TYPE_FAILED,
    UPDATE_FACILITY_TYPE_REQUEST,
    UPDATE_FACILITY_TYPE_SUCCESS
} from "../.././store/actions/facilityType.action"
const initialState: FacilityTypeAppStore = new FacilityTypeAppStore();

const facilityTypeReducer = (state = initialState, action: FacilityTypeAction) => {
    switch (action.type) {
    //     case FETCH_FACILITY_TYPES_REQUEST:
    //   return {
    //     ...state,
    //     list: {
    //       pending: true,
    //     },
    //   } as typeof initialState;
    // case FETCH_FACILITY_TYPES_SUCCESS:
    //   return {
    //     ...state,
    //     list: {
    //       result: action.payload.result,
    //       pending: false,
    //     },
    //   } as typeof initialState;
    // case FETCH_FACILITY_TYPES_FAILED:
    //   return {
    //     ...state,
    //     list: {
    //       pending: false,
    //       error: action.payload.error,
    //     },
    //   } as typeof initialState;
        case FETCH_FACILITY_TYPE_REQUEST:
            return {
                ...state,
                list: {
                    pending: true
                },
            } as typeof initialState;
        case FETCH_FACILITY_TYPE_SUCCESS:
            return {
                ...state,
                list: {
                    result: action.payload.result,
                    pending: false,
                },
            } as typeof initialState;
        case FETCH_FACILITY_TYPE_FAILED:
            return {
                ...state,
                list: {
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
        default:
            return state;
    }
};

export default facilityTypeReducer;