import { AppStore } from "../../../../../../interfaces/generic.model";
import { FacilityTypeModel, IFacilityTypeRequestModel } from "../../../../../../interfaces/facilityType.model";

export const FETCH_FACILITY_TYPE_REQUEST = "FETCH_FACILITY_TYPE_REQUEST";
export const FETCH_FACILITY_TYPE_SUCCESS = "FETCH_FACILITY_TYPE_SUCCESS";
export const FETCH_FACILITY_TYPE_FAILED = "FETCH_FACILITY_TYPE_FAILED";
export const UPDATE_FACILITY_TYPE_REQUEST = "UPDATE_FACILITY_TYPE_REQUEST";
export const UPDATE_FACILITY_TYPE_SUCCESS = "UPDATE_FACILITY_TYPE_SUCCESS";
export const UPDATE_FACILITY_TYPE_FAILED = "UPDATE_FACILITY_TYPE_FAILED";
export const FETCH_FACILITY_TYPES_FAILED = "FETCH_FACILITY_TYPES_FAILED";
export const FETCH_FACILITY_TYPES_REQUEST = "FETCH_FACILITY_TYPES_REQUEST";
export const FETCH_FACILITY_TYPES_SUCCESS = "FETCH_FACILITY_TYPES_SUCCESS";


// FETCH ALL
export interface IFecthFacilityTypeRequestAction {
    type: typeof FETCH_FACILITY_TYPE_REQUEST;
    payload: IFacilityTypeRequestModel,
}

export interface IFetchFacilityTypeSuccessAction {
    type: typeof FETCH_FACILITY_TYPE_SUCCESS;
    payload : AppStore<FacilityTypeModel[]>;
}

export interface IFetchFacilityTypeFailedAction {
    type : typeof FETCH_FACILITY_TYPE_FAILED;
    payload: AppStore<FacilityTypeModel[]>;
}


//ADD AND UPDATE
export interface IUpdateFacilityTypeRequestAction {
    type: typeof UPDATE_FACILITY_TYPE_REQUEST;
    payload: FacilityTypeModel;
  }

  export interface IUpdateFacilityTypeSuccessAction {
    type: typeof UPDATE_FACILITY_TYPE_SUCCESS;
    payload: AppStore<FacilityTypeModel>;
  }
 
  export interface IUpdateFacilityTypeFailureAction {
    type: typeof UPDATE_FACILITY_TYPE_FAILED;
    payload: AppStore<FacilityTypeModel>;
  }  

  export interface IFetchFacilityTypesRequestAction {
    type: typeof FETCH_FACILITY_TYPES_REQUEST;
    payload: string;
  }
  
//   export interface IFetchFacilityTypesSuccessAction {
//     type: typeof FETCH_FACILITY_TYPES_SUCCESS;
//     payload: AppStore<FacilityTypeModel[]>;
//   }
  
//   export interface IFetchFacilityTypesFailureAction {
//     type: typeof FETCH_FACILITY_TYPES_FAILED;
//     payload: AppStore<FacilityTypeModel[]>;
//   }  
export const fetchFacilityTypeRequest = (payload: IFacilityTypeRequestModel): IFecthFacilityTypeRequestAction => ({
    type: FETCH_FACILITY_TYPE_REQUEST,
    payload,
}) ;

export const fetchFacilityTypeSuccess = (
    payload: AppStore<FacilityTypeModel[]>
): IFetchFacilityTypeSuccessAction => ({
    type: FETCH_FACILITY_TYPE_SUCCESS,
    payload,
});

export const  fetchFacilityTypeFailed= (
    payload: AppStore<FacilityTypeModel[]>
  ): IFetchFacilityTypeFailedAction => ({
    type: FETCH_FACILITY_TYPE_FAILED,
    payload,
  });

  export const fetchFacilityTypesRequest = (payload: string): IFetchFacilityTypesRequestAction => ({
    type: FETCH_FACILITY_TYPES_REQUEST,
    payload,
  });
  
//   export const fetchFacilityTypesSuccess = (
//     payload: AppStore<FacilityTypeModel[]>
//   ): IFetchFacilityTypesSuccessAction => ({
//     type: FETCH_FACILITY_TYPES_SUCCESS,
//     payload,
//   });
  
//   export const fetchFacilityTypesFailed = (
//     payload: AppStore<FacilityTypeModel[]>
//   ): IFetchFacilityTypesFailureAction => ({
//     type: FETCH_FACILITY_TYPES_FAILED,
//     payload,
//   });  

  export const updateFacilityTypeRequest = (
    payload: FacilityTypeModel
  ): IUpdateFacilityTypeRequestAction => ({
    type: UPDATE_FACILITY_TYPE_REQUEST,
    payload,
  });

  export const updateFacilityTypeSuccess = (
    payload: AppStore<FacilityTypeModel>
  ): IUpdateFacilityTypeSuccessAction => ({
    type: UPDATE_FACILITY_TYPE_SUCCESS,
    payload,
  });


  export const updateFacilityTypeFailed = (
    payload: AppStore<FacilityTypeModel>
  ): IUpdateFacilityTypeFailureAction => ({
    type: UPDATE_FACILITY_TYPE_FAILED,
    payload,
  });
export type FacilityTypeAction =
| IFecthFacilityTypeRequestAction
| IFetchFacilityTypeSuccessAction
| IFetchFacilityTypeFailedAction
| IFetchFacilityTypesRequestAction
// | IFetchFacilityTypesSuccessAction
// | IFetchFacilityTypesFailureAction
| IUpdateFacilityTypeRequestAction
| IUpdateFacilityTypeSuccessAction
| IUpdateFacilityTypeFailureAction;