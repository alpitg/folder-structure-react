import { BookingAppStore, IShedularStateModel } from "../../../../../../interfaces/booking-sloat.model";
import { BookingAction, FETCH_BOOK_SLOT_FAILED, FETCH_BOOK_SLOT_REQUEST, FETCH_BOOK_SLOT_SUCCESS, TOGGLE_CHECKBOX, UPDATE_BOOK_SLOT, UPDATE_BOOK_SLOT_REQUEST, UPDATE_BOOK_SLOT_SUCCESS, UPDTAE_BOOK_SLOT_FAILURE } from "../actions/book-slots.action";
import { useSelector } from "react-redux";
import { AppState } from "../../../../../../store/reducers/root.reducer";
import { time } from "console";

const initialState = new BookingAppStore();

// const initialState = false;


const bookSlotsreducer = (state = initialState, action: BookingAction) => {

    switch (action.type) {

        //     case TOGGLE_CHECKBOX:
        //   return  !state ;
        case FETCH_BOOK_SLOT_REQUEST:
            return {
                ...state,
                list: {
                    pending: true
                }
            } as typeof initialState

        case FETCH_BOOK_SLOT_SUCCESS:
            return {
                ...state,
                list: {
                    result: action.payload.result,
                    pending: false
                }
            } as typeof initialState;

        case FETCH_BOOK_SLOT_FAILED:
            return {
                ...state,
                list: {
                    pending: false,
                    error: action.payload.error
                }
            } as typeof initialState;


        case UPDATE_BOOK_SLOT:
            return {
                ...state,
                bookSlot: {
                    ...state?.bookSlot,
                    facility: action?.payload?.facility,
                    facilityCourt: action?.payload?.facilityCourt,

                     shedular: [
                        ...state.bookSlot.shedular,
                        
                          {
                            date: action.payload.shedular,
                            timeSlots : [],
                            
                          },

                     ]
                     
                     
                        
                        
                    
                },
                result: null,
                pending: false,
                error: [],
            } as typeof initialState;

        case UPDATE_BOOK_SLOT_REQUEST:
            return {
                ...state,
                result: null,
                pending: true,
                error: [],
            } as typeof initialState;

        case UPDATE_BOOK_SLOT_SUCCESS:
            return {
                ...state,
                result: action.payload.result,
                pending: false,
                error: [],
            } as typeof initialState;

        case UPDTAE_BOOK_SLOT_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                pending: false,
            } as typeof initialState;
        default:
            return state;
    }
}

export default bookSlotsreducer;