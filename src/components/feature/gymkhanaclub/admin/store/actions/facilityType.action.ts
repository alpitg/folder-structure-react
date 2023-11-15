import { AppStore } from "../../../../../../interfaces/generic.model";
import { IFacilityTypeModel } from "../../../../../../interfaces/facilityType.model";

export const FETCH_FACILITY_TYPE_REQUEST = "FETCH_FACILITY_TYPE_REQUEST";
export const FETCH_FACILITY_TYPE_SUCCESS = "FETCH_FACILITY_TYPE_SUCCESS";
export const FETCH_FACILITY_TYPE_FAILED = "FETCH_FACILITY_TYPE_FAILED";

export interface IFecthFacilityTypeRequestAction {
    type: typeof FETCH_FACILITY_TYPE_REQUEST;
}

export interface IFetchFacilityTypeSuccessAction {
    type: typeof FETCH_FACILITY_TYPE_SUCCESS;
    payload : AppStore<IFacilityTypeModel>;
}

export interface IFetchFacilityTypeFailedAction {
    type : typeof FETCH_FACILITY_TYPE_FAILED;
    payload: AppStore<IFacilityTypeModel>;
}

export const fetchFacilityTypeRequest = (): IFecthFacilityTypeRequestAction => ({
    type: FETCH_FACILITY_TYPE_REQUEST,
}) ;

export const fetchFacilityTypeSuccess = (
    payload: AppStore<IFacilityTypeModel>
): IFetchFacilityTypeSuccessAction => ({
    type: FETCH_FACILITY_TYPE_SUCCESS,
    payload,
});

export const  fetchFacilityTypeFailed= (
    payload: AppStore<IFacilityTypeModel>
  ): IFetchFacilityTypeFailedAction => ({
    type: FETCH_FACILITY_TYPE_FAILED,
    payload,
  });

export type FacilityTypeAction =
| IFecthFacilityTypeRequestAction
| IFetchFacilityTypeSuccessAction
| IFetchFacilityTypeFailedAction;