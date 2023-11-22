import { FacilityModel, IFacilityRequestModel } from "../../../../../../interfaces/facility.model";
import { AppStore } from "../../../../../../interfaces/generic.model";

export const FETCH_FACILITIES_REQUEST = "FETCH_FACILITIES_REQUEST";
export const FETCH_FACILITIES_SUCCESS = "FETCH_FACILITIES_SUCCESS";
export const FETCH_FACILITIES_FAILED = "FETCH_FACILITIES_FAILED";

export interface IFecthFacilityRequestAction {
    type: typeof FETCH_FACILITIES_REQUEST;
    payload: IFacilityRequestModel,
}

export interface IFetchFacilitySuccessAction {
    type: typeof FETCH_FACILITIES_SUCCESS;
    payload : AppStore<FacilityModel[]>;
}

export interface IFetchFacilityFailedAction {
    type : typeof FETCH_FACILITIES_FAILED;
    payload: AppStore<FacilityModel[]>;
}

export const fetchFacilityRequest = (payload: IFacilityRequestModel): IFecthFacilityRequestAction => ({
    type: FETCH_FACILITIES_REQUEST,
    payload,
}) ;

export const fetchFacilitySuccess = (
    payload: AppStore<FacilityModel[]>
): IFetchFacilitySuccessAction => ({
    type: FETCH_FACILITIES_SUCCESS,
    payload,
});

export const  fetchFacilityFailed= (
    payload: AppStore<FacilityModel[]>
  ): IFetchFacilityFailedAction => ({
    type: FETCH_FACILITIES_FAILED,
    payload,
  });

export type FacilityAction =
| IFecthFacilityRequestAction
| IFetchFacilitySuccessAction
| IFetchFacilityFailedAction;


