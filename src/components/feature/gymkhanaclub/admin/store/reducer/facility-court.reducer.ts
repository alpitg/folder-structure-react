import { FacilityCourtAppStore } from "../../../../../../interfaces/facility-court.model";
import FacilityCourtItemApp from "../../facility-costing/list/Item/facility-court.item";
import { DELETE_FACILITY_COURT_FAILED, DELETE_FACILITY_COURT_REQUEST, DELETE_FACILITY_COURT_SUCCESS, FETCH_FACILITY_COURTS_FAILED, FETCH_FACILITY_COURTS_REQUEST, FETCH_FACILITY_COURTS_SUCCESS, FETCH_FACILITY_COURT_FAILED, FETCH_FACILITY_COURT_REQUEST, FETCH_FACILITY_COURT_SUCCESS, FacilityCourtAction, RESET_DELETE_FACILITY_COURT, RESET_UPDATE_FACILITY_COURT, UPDATE_FACILITY_COURT_FAILED, UPDATE_FACILITY_COURT_REQUEST, UPDATE_FACILITY_COURT_SUCCESS } from "../actions/facilityCourt.action";

const initialState: FacilityCourtAppStore = new FacilityCourtAppStore();


const facilityCourtReducer = (state = initialState, action: FacilityCourtAction) => {
    switch (action.type) {
        case FETCH_FACILITY_COURTS_REQUEST:
            return {
                ...state,
                list: {
                    pending: true
                },
            } as typeof initialState;

        case FETCH_FACILITY_COURTS_SUCCESS:
            return {
                ...state,
                list: {
                    result: action.payload.result,
                    pending: false,
                },
            } as typeof initialState;

        case FETCH_FACILITY_COURTS_FAILED:
            return {
                ...state,
                list: {
                    pending: false,
                    error: action.payload.error,
                },
            } as typeof initialState;
        case FETCH_FACILITY_COURT_REQUEST:
            return {
                ...state,
                update: {
                    pending: true,
                },
            } as typeof initialState;
        case FETCH_FACILITY_COURT_SUCCESS:
            return {
                ...state,
                update: {
                    result: action.payload.result,
                    pending: false,
                },
            } as typeof initialState;
        case FETCH_FACILITY_COURT_FAILED:
            return {
                ...state,
                update: {
                    pending: false,
                    error: action.payload.error,
                },
            } as typeof initialState;

        // UPDATE

        case UPDATE_FACILITY_COURT_REQUEST:
            return {
                ...state,
                update: {
                    result: null,
                    pending: true,
                    error: [],
                },
            } as typeof initialState;
        case UPDATE_FACILITY_COURT_SUCCESS:
            return {
                ...state,
                update: {
                    result: action.payload.result,
                    pending: false,
                    error: [],
                },
            } as typeof initialState;
        case UPDATE_FACILITY_COURT_FAILED:
            return {
                ...state,
                update: {
                    error: action.payload.error,
                    pending: false,
                },
            } as typeof initialState;
            case RESET_UPDATE_FACILITY_COURT:
                return {
                    ...state,
                    update: {
                        error: [],
                        pending: false,
                        result: null,
                    },
                } as typeof initialState;
        case DELETE_FACILITY_COURT_REQUEST:
            return {
                ...state,
                delete: {
                    pending: true,
                },
            } as typeof initialState;
        case DELETE_FACILITY_COURT_SUCCESS:
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
        case DELETE_FACILITY_COURT_FAILED:
            return {
                ...state,
                delete: {
                    error: action.payload.result,
                    pending: false,
                },
            } as unknown as typeof initialState;
            case RESET_DELETE_FACILITY_COURT:
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
}

export default facilityCourtReducer;