import { type } from "os";
import { FacilityModel, IFacilityModel, IFacilityRequestModel } from "../../../../../../interfaces/facility.model";
import { AppStore } from "../../../../../../interfaces/generic.model";
import { FacilityCourtModel, IFacilityCourtModel, IFacilityCourtRequestModel } from "../../../../../../interfaces/facility-court.model";
export const FETCH_FACILITY_REQUEST = "FETCH_FACILITY_REQUEST";
export const FETCH_FACILITY_SUCCESS = "FETCH_FACILITY_SUCCESS";
export const FETCH_FACILITY_FAILED = "FETCH_FACILITY_FAILED";
export const FETCH_FACILITE_REQUEST = "FETCH_FACILITE_REQUEST";
export const FETCH_FACILITE_SUCCESS = "FETCH_FACILITE_SUCCESS";
export const FETCH_FACILITE_FAILED = "FETCH_FACILITE_FAILED";
export const UPDATE_FACILITY_REQUEST = "UPDATE_FACILITY_REQUEST";
export const UPDATE_FACILITY_SUCCESS = "UPDATE_FACILITY_SUCCESS";
export const UPDATE_FACILITY_FAILED = "UPDATE_FACILITY_FAILED";
export const DELETE_FACILITY_REQUEST = "DELETE_FACILITY_REQUEST";
export const DELETE_FACILITY_SUCCESS = "DELETE_FACILITY_SUCCESS";
export const DELETE_FACILITY_FAILED = "DELETE_FACILITY_FAILED";
export const RESET_FETCH_FACILITY = "RESET_FETCH_FACILITY";
export const RESET_UPDATE_FACILITY = "RESET_UPDATE_FACILITY";
export const RESET_DELETE_FACILITY = "RESET_DELETE_FACILITY"


export interface IFetchFacilityRequestAction {
  type: typeof FETCH_FACILITY_REQUEST;
  payload: IFacilityRequestModel;
}

export interface IFetchFacilitySuccessAction {
  type: typeof FETCH_FACILITY_SUCCESS;
  payload: AppStore<FacilityModel[]>
}

export interface IFetchFacilityFailedAction {
  type: typeof FETCH_FACILITY_FAILED;
  payload: AppStore<FacilityModel[]>
}






export interface IFetchFaciliteRequestAction {
  type: typeof FETCH_FACILITE_REQUEST
  payload: string;
}

export interface IFetchFaciliteSuccessAction {
  type: typeof FETCH_FACILITE_SUCCESS
  payload: AppStore<IFacilityModel>;
}

export interface IFetchFaciliteFailedAction {
  type: typeof FETCH_FACILITE_FAILED
  payload: AppStore<IFacilityModel>
}

export interface IUpdateFacilityRequestAction {
  type: typeof UPDATE_FACILITY_REQUEST
  payload: FacilityModel
}

export interface IUpdateFacilitySuccessAction {
  type: typeof UPDATE_FACILITY_SUCCESS
  payload: AppStore<FacilityModel>
}

export interface IUpdateFacilityFailedAction {
  type: typeof UPDATE_FACILITY_FAILED
  payload: AppStore<FacilityModel>
}

//DELETE

export interface IDeleteFacilityRequestAction {
  type: typeof DELETE_FACILITY_REQUEST;
  payload: string;
}

export interface IDeleteFacilitySuccessAction {
  type: typeof DELETE_FACILITY_SUCCESS;
  payload: AppStore<string>;
}

export interface IDeleteFacilityFailedAction {
  type: typeof DELETE_FACILITY_FAILED;
  payload: AppStore<string>;
}

export interface IResetFetchFacility {
  type: typeof RESET_FETCH_FACILITY;
}

export interface IResetUpdateFacility {
  type: typeof RESET_UPDATE_FACILITY;
}

export interface IResetDeleteFacility {
  type: typeof RESET_DELETE_FACILITY
}
export const fetchFacilityRequest = (payload: IFacilityRequestModel): IFetchFacilityRequestAction => ({
  type: FETCH_FACILITY_REQUEST,
  payload,
});


export const fetchFacilitySuccess = (
  payload: AppStore<FacilityModel[]>
): IFetchFacilitySuccessAction => ({
  type: FETCH_FACILITY_SUCCESS,
  payload,
})

export const fetchFacilityFailed = (
  payload: AppStore<FacilityModel[]>
): IFetchFacilityFailedAction => ({
  type: FETCH_FACILITY_FAILED,
  payload,
})


export const fetchFaciliteRequest = (payload: string): IFetchFaciliteRequestAction => ({
  type: FETCH_FACILITE_REQUEST,
  payload,
})

export const fetchFaciliteSuccess = (
  payload: AppStore<IFacilityModel>
): IFetchFaciliteSuccessAction => ({
  type: FETCH_FACILITE_SUCCESS,
  payload,
})

export const fetchFaciliteCourtFailed = (
  payload: AppStore<IFacilityModel>
): IFetchFaciliteFailedAction => ({
  type: FETCH_FACILITE_FAILED,
  payload,
})


//ADD AND UPDATE

export const updateFacilityRequest = (
  payload: FacilityModel
): IUpdateFacilityRequestAction => ({
  type: UPDATE_FACILITY_REQUEST,
  payload,
})

export const updateFacilitySuccess = (
  payload: AppStore<FacilityModel>
): IUpdateFacilitySuccessAction => ({
  type: UPDATE_FACILITY_SUCCESS,
  payload,
})

export const updateFacilityFailed = (
  payload: AppStore<FacilityModel>
): IUpdateFacilityFailedAction => ({
  type: UPDATE_FACILITY_FAILED,
  payload,
})

//DELETE

export const deleteFacilityRequest = (
  payload: string
): IDeleteFacilityRequestAction => ({
  type: DELETE_FACILITY_REQUEST,
  payload,
});

export const deleteFacilitySuccess = (
  payload: AppStore<string>
): IDeleteFacilitySuccessAction => ({
  type: DELETE_FACILITY_SUCCESS,
  payload,
});

export const deleteFacilityFailed = (
  payload: AppStore<string>
): IDeleteFacilityFailedAction => ({
  type: DELETE_FACILITY_FAILED,
  payload,
});

export const resetFetchFacility = (): IResetFetchFacility => ({
  type: RESET_FETCH_FACILITY,
});

export const resetUpdateFacility = (): IResetUpdateFacility => ({
  type: RESET_UPDATE_FACILITY,
});
export const resetDeleteFacility = (): IResetDeleteFacility => ({
  type: RESET_DELETE_FACILITY,
});
export type FacilityAction =
  | IFetchFacilityRequestAction
  | IFetchFacilitySuccessAction
  | IFetchFacilityFailedAction
  | IFetchFaciliteSuccessAction
  | IFetchFaciliteRequestAction
  | IFetchFaciliteFailedAction
  | IUpdateFacilityRequestAction
  | IUpdateFacilitySuccessAction
  | IUpdateFacilityFailedAction
  | IDeleteFacilityRequestAction
  | IDeleteFacilitySuccessAction
  | IDeleteFacilityFailedAction
  | IResetFetchFacility
  | IResetUpdateFacility
  | IResetDeleteFacility;
