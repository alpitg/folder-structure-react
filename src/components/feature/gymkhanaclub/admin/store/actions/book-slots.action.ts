import { IBookSloatRequestModel } from "../../../../../../interfaces/book-facility.model";
import { IBookSloatModel, IBooking } from "../../../../../../interfaces/booking-sloat.model";
import { AppStore } from "../../../../../../interfaces/generic.model";


export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';
export const UPDATE_BOOK_SLOT = "UPDATE_BOOK_SLOT";
export const UPDATE_BOOK_SLOT_REQUEST = "UPDATE_BOOK_SLOT_REQUEST";
export const UPDATE_BOOK_SLOT_SUCCESS = "UPDATE_BOOK_SLOT_SUCCESS";
export const UPDTAE_BOOK_SLOT_FAILURE = "UPDTAE_BOOK_SLOT_FAILURE";
export const FETCH_BOOK_SLOT_REQUEST = "FETCH_BOOK_SLOT_REQUEST";
export const FETCH_BOOK_SLOT_SUCCESS = "FETCH_BOOK_SLOT_SUCCESS";
export const FETCH_BOOK_SLOT_FAILED = "FETCH_BOOK_SLOT_FAILED";


export interface IFetchBookingSlotRequestAction {
    type: typeof FETCH_BOOK_SLOT_REQUEST
    payload: IBookSloatModel
}

export interface IFetchBookingSlotSuccessAction {
    type: typeof FETCH_BOOK_SLOT_SUCCESS
    payload: AppStore<IBookSloatModel[]>
}

export interface IFetchBookingSlotFailedAction {
    type: typeof FETCH_BOOK_SLOT_FAILED
    payload: AppStore<IBookSloatModel[]>
}

export interface IUpdateBookingSlotsAction {
    type: typeof UPDATE_BOOK_SLOT
    payload: IBooking
}

export interface IUpdateBookingSlotsRequestAction {
    type: typeof UPDATE_BOOK_SLOT_REQUEST
    payload: IBooking
}

export interface IUpdateBookingSlotsSuccessAction {
    type: typeof UPDATE_BOOK_SLOT_SUCCESS
    payload: AppStore<IBooking>
}

export interface IUpdateBookingSlotsFailureAction {
    type: typeof UPDTAE_BOOK_SLOT_FAILURE
    payload: AppStore<IBooking>
}

export const fetchBookSlotRequest = (
    payload: IBookSloatModel
): IFetchBookingSlotRequestAction => ({
    type: FETCH_BOOK_SLOT_REQUEST,
    payload
})

export const fetchBookSlotSuccess = (
    payload: AppStore<IBookSloatModel[]>
): IFetchBookingSlotSuccessAction => ({
    type: FETCH_BOOK_SLOT_SUCCESS,
    payload,
})

export const fetchBookSlotFailed = (
    payload: AppStore<IBookSloatModel[]>
): IFetchBookingSlotFailedAction => ({
    type: FETCH_BOOK_SLOT_FAILED,
    payload,
})

export const updateBookingSlots = (
    payload: IBooking
): IUpdateBookingSlotsAction => ({
    type: UPDATE_BOOK_SLOT,
    payload,
})

export const updateBookingSlotsRequest = (
    payload: IBooking
): IUpdateBookingSlotsRequestAction => ({
    type: UPDATE_BOOK_SLOT_REQUEST,
    payload,
})

export const updateBookingSlotsSuccess = (
    payload: AppStore<IBooking>
): IUpdateBookingSlotsSuccessAction => ({
    type: UPDATE_BOOK_SLOT_SUCCESS,
    payload
});

export const updateBookingSlotsFailure = (
    payload: AppStore<IBooking>
): IUpdateBookingSlotsFailureAction => ({
    type: UPDTAE_BOOK_SLOT_FAILURE,
    payload,
})

export const toggleCheckbox = () => ({
    type: TOGGLE_CHECKBOX,
});


export type BookingAction =
    | IFetchBookingSlotRequestAction
    | IFetchBookingSlotSuccessAction
    | IFetchBookingSlotFailedAction
    | IUpdateBookingSlotsAction
    | IUpdateBookingSlotsRequestAction
    | IUpdateBookingSlotsSuccessAction
    | IUpdateBookingSlotsFailureAction;