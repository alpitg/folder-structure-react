import { AppStore } from "../../../../../../interfaces/generic.model";
import { FacilityTypeModel, IFacilityTypeModel, IFacilityTypeRequestModel } from "../../../../../../interfaces/facilityType.model";

export const FETCH_FACILITIES_TYPE_REQUEST = "FETCH_FACILITIES_TYPE_REQUEST";
export const FETCH_FACILITIES_TYPE_SUCCESS = "FETCH_FACILITIES_TYPE_SUCCESS";
export const FETCH_FACILITIES_TYPE_FAILED = "FETCH_FACILITIES_TYPE_FAILED";
export const FETCH_FACILITY_TYPE_REQUEST = "FETCH_FACILITY_TYPE_REQUEST";
export const FETCH_FACILITY_TYPE_SUCCESS = "FETCH_FACILITY_TYPE_SUCCESS";
export const FETCH_FACILITY_TYPE_FAILED = "FETCH_FACILITY_TYPE_FAILED";
export const UPDATE_FACILITY_TYPE_REQUEST = "UPDATE_FACILITY_TYPE_REQUEST";
export const UPDATE_FACILITY_TYPE_SUCCESS = "UPDATE_FACILITY_TYPE_SUCCESS";
export const UPDATE_FACILITY_TYPE_FAILED = "UPDATE_FACILITY_TYPE_FAILED";
export const DELETE_FACILITY_TYPE_REQUEST = "DELETE_FACILITY_TYPE_REQUEST";
export const DELETE_FACILITY_TYPE_SUCCESS = "DELETE_FACILITY_TYPE_SUCCESS";
export const DELETE_FACILITY_TYPE_FAILED = "DELETE_FACILITY_TYPE_FAILED";
export const RESET_FETCH_FACILITY_TYPE = "RESET_FETCH_FACILITY_TYPE";
export const RESET_UPDATE_FACILITY_TYPE = "RESET_UPDATE_FACILITY_TYPE";
export const RESET_DELETE_FACILITY_TYPE = "RESET_DELETE_FACILITY_TYPE";

// FETCH ALL
export interface IFecthFacilitiesTypeRequestAction {
  type: typeof FETCH_FACILITIES_TYPE_REQUEST;
  payload: IFacilityTypeRequestModel;
}

export interface IFetchFacilitiesTypeSuccessAction {
  type: typeof FETCH_FACILITIES_TYPE_SUCCESS;
  payload: AppStore<FacilityTypeModel[]>;
}

export interface IFetchFacilitiesTypeFailedAction {
  type: typeof FETCH_FACILITIES_TYPE_FAILED;
  payload: AppStore<FacilityTypeModel[]>;
}

//FETCH
export interface IFetchFacilityTypeRequestAction {
  type: typeof FETCH_FACILITY_TYPE_REQUEST
  payload: string;
}

export interface IFetchFacilityTypeSucessAction {
  type: typeof FETCH_FACILITY_TYPE_SUCCESS
  payload: AppStore<FacilityTypeModel[]>
}

export interface IFetchFacilityTypeFailedAction {
  type: typeof FETCH_FACILITY_TYPE_FAILED
  payload: AppStore<FacilityTypeModel[]>
}

//ADD AND UPDATE

export interface IUpdateFacilityTypeRequestAction {
  type: typeof UPDATE_FACILITY_TYPE_REQUEST
  payload: FacilityTypeModel
}


export interface IUpdateFacilityTypeSuccessAction {
  type: typeof UPDATE_FACILITY_TYPE_SUCCESS
  payload: AppStore<FacilityTypeModel>
}

export interface IUpdateFacilityTypeFailedAction {
  type: typeof UPDATE_FACILITY_TYPE_FAILED
  payload: AppStore<FacilityTypeModel>
}

//DELETE

export interface IDeleteFacilityTypeRequestAction {
  type : typeof DELETE_FACILITY_TYPE_REQUEST;
  payload: string;
}

export interface IDeleteFacilityTypeSuccessAction {
  type : typeof DELETE_FACILITY_TYPE_SUCCESS;
  payload: AppStore<string>;
}

export interface IDeleteFacilityTypeFailedAction {
  type : typeof DELETE_FACILITY_TYPE_FAILED;
  payload: AppStore<string>
}

export interface IResetFetchFacilityType {
  type: typeof RESET_FETCH_FACILITY_TYPE;
}

export interface IResetUpdateFacilityType {
  type: typeof RESET_UPDATE_FACILITY_TYPE;
}


export interface IResetDeleteFacilityType {
  type: typeof RESET_DELETE_FACILITY_TYPE;
}
export interface IResetFetchFacilityType {
  type: typeof RESET_FETCH_FACILITY_TYPE;
}

//FETCH ALL

export const fetchFacilitiesTypeRequest = (payload : IFacilityTypeRequestModel): IFecthFacilitiesTypeRequestAction => ({
  type: FETCH_FACILITIES_TYPE_REQUEST,
  payload,
});

export const fetchFacilitiesTypeSuccess = (
  payload: AppStore<FacilityTypeModel[]>
): IFetchFacilitiesTypeSuccessAction => ({
  type: FETCH_FACILITIES_TYPE_SUCCESS,
  payload,
});

export const fetchFacilitiesTypeFailed = (
  payload: AppStore<FacilityTypeModel[]>
): IFetchFacilitiesTypeFailedAction => ({
  type: FETCH_FACILITIES_TYPE_FAILED,
  payload,
});

//FETCH

export const fetchFacilityTypeRequest = (payload: string): IFetchFacilityTypeRequestAction => ({
  type: FETCH_FACILITY_TYPE_REQUEST,
  payload,
})

export const fetchFacilityTypeSuccess = (
  payload: AppStore<FacilityTypeModel[]>
): IFetchFacilityTypeSucessAction => ({
  type: FETCH_FACILITY_TYPE_SUCCESS,
  payload,
})

export const fetchFacilityTypeFailed = (
  payload: AppStore<FacilityTypeModel[]>
): IFetchFacilityTypeFailedAction => ({
  type: FETCH_FACILITY_TYPE_FAILED,
  payload,
})

//ADD AND UPDATE

export const updateFacilityTypeRequest = (
  payload: FacilityTypeModel
): IUpdateFacilityTypeRequestAction => ({
  type: UPDATE_FACILITY_TYPE_REQUEST,
  payload,
})

export const updateFacilityTypeSuccess = (
  payload: AppStore<FacilityTypeModel>
): IUpdateFacilityTypeSuccessAction => ({
  type: UPDATE_FACILITY_TYPE_SUCCESS,
  payload,
})

export const updateFacilityTypeFailed = (
  payload: AppStore<FacilityTypeModel>
): IUpdateFacilityTypeFailedAction => ({
  type: UPDATE_FACILITY_TYPE_FAILED,
  payload,
})

//DELETE

export const deleteFacilityTypeRequest = (
  payload : string
) : IDeleteFacilityTypeRequestAction => ({
  type: DELETE_FACILITY_TYPE_REQUEST,
  payload,
})

export const deleteFacilityTypeSuccess = (
  payload: AppStore<string>
) : IDeleteFacilityTypeSuccessAction => ({
  type: DELETE_FACILITY_TYPE_SUCCESS,
  payload,
})

export const deleteFacilityTypeFailed = (
  payload : AppStore<string>
): IDeleteFacilityTypeFailedAction => ({
  type : DELETE_FACILITY_TYPE_FAILED,
  payload,
})

export const resetFetchFacilityType = (): IResetFetchFacilityType => ({
  type: RESET_FETCH_FACILITY_TYPE,
});

export const resetUpdateFacilityType = (): IResetUpdateFacilityType => ({
  type: RESET_UPDATE_FACILITY_TYPE,
});

export const resetDeleteFacilityType = (): IResetDeleteFacilityType => ({
  type: RESET_DELETE_FACILITY_TYPE,
});
export type FacilityTypeAction =
  | IFecthFacilitiesTypeRequestAction
  | IFetchFacilitiesTypeSuccessAction
  | IFetchFacilitiesTypeFailedAction
  | IFetchFacilityTypeRequestAction
  | IFetchFacilityTypeSucessAction
  | IFetchFacilityTypeFailedAction
  | IUpdateFacilityTypeRequestAction
  | IUpdateFacilityTypeSuccessAction
  | IUpdateFacilityTypeFailedAction
  | IDeleteFacilityTypeRequestAction
  | IDeleteFacilityTypeSuccessAction
  | IDeleteFacilityTypeFailedAction
  | IResetFetchFacilityType
  | IResetUpdateFacilityType
  | IResetDeleteFacilityType;
