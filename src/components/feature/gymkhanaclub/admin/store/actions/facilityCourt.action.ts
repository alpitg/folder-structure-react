import { FacilityCourtModel, IFacilityCourtModel, IFacilityCourtRequestModel } from "../../../../../../interfaces/facility-court.model";
import { AppStore } from "../../../../../../interfaces/generic.model";

export const FETCH_FACILITY_COURTS_REQUEST = "FETCH_FACILITY_COURTS_REQUEST";
export const FETCH_FACILITY_COURTS_SUCCESS= "FETCH_FACILITY_COURTS_SUCCESS";
export const FETCH_FACILITY_COURTS_FAILED = "FETCH_FACILITY_COURTS_FAILED";
export const FETCH_FACILITY_COURT_REQUEST = "FETCH_FACILITY_COURT_REQUEST";
export const FETCH_FACILITY_COURT_SUCCESS = "FETCH_FACILITY_COURT_SUCCESS";
export const FETCH_FACILITY_COURT_FAILED = "FETCH_FACILITY_COURT_FAILED";
export const UPDATE_FACILITY_COURT_REQUEST = "UPDATE_FACILITY_COURT_REQUEST";
export const UPDATE_FACILITY_COURT_SUCCESS = "UPDATE_FACILITY_COURT_SUCCESS";
export const UPDATE_FACILITY_COURT_FAILED = "UPDATE_FACILITY_COURT_FAILED";
export const DELETE_FACILITY_COURT_REQUEST = "DELETE_FACILITY_COURT_REQUEST";
export const DELETE_FACILITY_COURT_SUCCESS = "DELETE_FACILITY_COURT_SUCCESS";
export const DELETE_FACILITY_COURT_FAILED = "DELETE_FACILITY_COURT_FAILED";
export const RESET_FETCH_FACILITY_COURT = "RESET_FETCH_FACILITY_COURT";
export const RESET_UPDATE_FACILITY_COURT = "RESET_UPDATE_FACILITY_COURT";
export const RESET_DELETE_FACILITY_COURT = "RESET_DELETE_FACILITY_COURT";

export interface IFetchFacilityCourtsRequestAction {
    type: typeof FETCH_FACILITY_COURTS_REQUEST;
    payload: IFacilityCourtRequestModel;
}

export interface IFetchFacilityCourtsSuccessAction {
   type: typeof FETCH_FACILITY_COURTS_SUCCESS;
   payload: AppStore<FacilityCourtModel[]>
}

export interface IFetchFacilityCourtsFailedAction {
    type: typeof FETCH_FACILITY_COURTS_FAILED;
    payload: AppStore<FacilityCourtModel[]>
}


// ID
export interface IFetchFacilityCourtRequestAction {
    type: typeof FETCH_FACILITY_COURT_REQUEST
    payload: string;
}


export interface IFetchFacilityCourtSuccessAction {
    type: typeof FETCH_FACILITY_COURT_SUCCESS
    payload: AppStore<IFacilityCourtModel>;
}

export interface IFetchFacilityCourtFailedAction {
    type: typeof FETCH_FACILITY_COURT_FAILED
    payload: AppStore<IFacilityCourtModel>
}


//ADD AND UPDATE

export interface IUpdateFacilityCourtRequestAction {
    type: typeof UPDATE_FACILITY_COURT_REQUEST
    payload: FacilityCourtModel
}

export interface IUpdateFacilityCourtSuccessAction {
    type: typeof UPDATE_FACILITY_COURT_SUCCESS
    payload: AppStore<FacilityCourtModel>
}

export interface IUpdateFacilityCourtFailedAction {
    type: typeof UPDATE_FACILITY_COURT_FAILED
    payload: AppStore<FacilityCourtModel>
}


////DELETE

export interface IDeleteFacilityCourtRequestAction {
    type: typeof DELETE_FACILITY_COURT_REQUEST;
    payload: string
}

export interface IDeleteFacilityCourtSuccessAction {
    type: typeof DELETE_FACILITY_COURT_SUCCESS;
    payload: AppStore<string>
}

export interface IDeleteFacilityCourtFailedAction {
    type: typeof DELETE_FACILITY_COURT_FAILED;
    payload: AppStore<string>
}

export interface IResetFetchFacilityCourt {
    type: typeof RESET_FETCH_FACILITY_COURT
}

export interface IResetUpdateFacilityCourt {
    type: typeof RESET_UPDATE_FACILITY_COURT
}

export interface IResetDeleteFacilityCourt {
    type: typeof RESET_DELETE_FACILITY_COURT
}
export const fetchFacilityCourtsRequest = (payload: IFacilityCourtRequestModel): IFetchFacilityCourtsRequestAction => ({
    type: FETCH_FACILITY_COURTS_REQUEST,
    payload,
});

export const fetchFacilityCourtsSuccess = (
    payload: AppStore<FacilityCourtModel[]>
): IFetchFacilityCourtsSuccessAction => ({
    type: FETCH_FACILITY_COURTS_SUCCESS,
    payload,
});

export const fetchFacilityCourtsFailed = (
    payload: AppStore<FacilityCourtModel[]>
): IFetchFacilityCourtsFailedAction => ({
    type: FETCH_FACILITY_COURTS_FAILED,
    payload,
});


//// id

export const fetchFacilityCourtRequest = (payload: string): IFetchFacilityCourtRequestAction => ({
    type: FETCH_FACILITY_COURT_REQUEST,
    payload,
}) 

export const fetchFacilityCourtSuccess = (
    payload: AppStore<IFacilityCourtModel>
  ): IFetchFacilityCourtSuccessAction => ({
    type: FETCH_FACILITY_COURT_SUCCESS,
    payload,
  })

  export const fetchFacilityCourtFailed = (
    payload: AppStore<IFacilityCourtModel>
  ): IFetchFacilityCourtFailedAction => ({
    type: FETCH_FACILITY_COURT_FAILED,
    payload,
  })


  //! ADD AND UPDATE

  export const updateFacilityCourtRequest = (
    payload: FacilityCourtModel
  ): IUpdateFacilityCourtRequestAction => ({
    type: UPDATE_FACILITY_COURT_REQUEST,
    payload, 
  })

  export const updateFacilityCourtSuccess = (
    payload: AppStore<FacilityCourtModel>
  ): IUpdateFacilityCourtSuccessAction => ({
    type: UPDATE_FACILITY_COURT_SUCCESS,
    payload,
  })

  export const updateFacilityCourtFailed = (
    payload: AppStore<FacilityCourtModel>
  ): IUpdateFacilityCourtFailedAction => ({
    type: UPDATE_FACILITY_COURT_FAILED,
    payload,
  })


  ////DELETE

  export const deleteFacilityCourtRequest = (
    payload: string
  ): IDeleteFacilityCourtRequestAction => ({
    type:   DELETE_FACILITY_COURT_REQUEST,
    payload,
  });

  export const deleteFacilityCourtSuccess = (
    payload: AppStore<string>
  ): IDeleteFacilityCourtSuccessAction => ({
    type: DELETE_FACILITY_COURT_SUCCESS,
    payload,
  });

  export const deleteFacilityCourtFailed = (
    payload: AppStore<string>
  ): IDeleteFacilityCourtFailedAction => ({
    type: DELETE_FACILITY_COURT_FAILED,
    payload,
  })

  /////LINK - 

  export const resetFetchFacilityCourt = (): IResetFetchFacilityCourt => ({
    type: RESET_FETCH_FACILITY_COURT
  })

  export const resetUpdateFacilityCourt = (): IResetUpdateFacilityCourt => ({
    type: RESET_UPDATE_FACILITY_COURT
  }) 

  export const resetDeleteFacilityCourt = (): IResetDeleteFacilityCourt => ({
    type: RESET_DELETE_FACILITY_COURT
  })
export type FacilityCourtAction = 
| IFetchFacilityCourtsRequestAction
| IFetchFacilityCourtsSuccessAction
| IFetchFacilityCourtsFailedAction
| IFetchFacilityCourtFailedAction
| IFetchFacilityCourtRequestAction
| IFetchFacilityCourtSuccessAction
| IUpdateFacilityCourtRequestAction
| IUpdateFacilityCourtSuccessAction
| IUpdateFacilityCourtFailedAction
| IDeleteFacilityCourtRequestAction
| IDeleteFacilityCourtSuccessAction
| IDeleteFacilityCourtFailedAction
| IResetFetchFacilityCourt
| IResetUpdateFacilityCourt
| IResetDeleteFacilityCourt;