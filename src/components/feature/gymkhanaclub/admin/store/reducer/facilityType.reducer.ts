import { FacilityTypeStore, IFacilityTypeStore } from "../../../../../../interfaces/facilityType.model";
import { FETCH_FACILITY_TYPE_FAILED, FETCH_FACILITY_TYPE_REQUEST, FETCH_FACILITY_TYPE_SUCCESS, FacilityTypeAction } from "../.././store/actions/facilityType.action"
const initialState: IFacilityTypeStore = new FacilityTypeStore();

const facilityTypeReducer = (state = initialState, action: FacilityTypeAction) => {
    switch (action.type) {
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
                update: {
                    pending: false,
                    error: action.payload.error,

                },
            } as typeof initialState;
        default:
            return state;
    }
};

export default facilityTypeReducer;