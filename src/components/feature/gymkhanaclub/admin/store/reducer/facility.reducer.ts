import { FacilityAppStore } from "../../../../../../interfaces/facility.model";
import { FETCH_FACILITIES_FAILED, FETCH_FACILITIES_REQUEST, FETCH_FACILITIES_SUCCESS, FacilityAction } from "../actions/facility.action";

const initialState: FacilityAppStore = new FacilityAppStore();

const facilityReducer = (state = initialState, action: FacilityAction) => {
    switch (action.type) {
        
            case FETCH_FACILITIES_REQUEST:
                return {
                    ...state,
                    list: {
                        pending: true
                    },
                } as typeof initialState;
            case FETCH_FACILITIES_SUCCESS:
                return {
                    ...state,
                    list: {
                        result: action.payload.result,
                        pending: false,
                    },
                } as typeof initialState;
            case FETCH_FACILITIES_FAILED:
                return {
                    ...state,
                    list: {
                        pending: false,
                        error: action.payload.error,
    
                    },
                } as typeof initialState;
          
            default:
                return state;
        }
    };

    export default facilityReducer;
