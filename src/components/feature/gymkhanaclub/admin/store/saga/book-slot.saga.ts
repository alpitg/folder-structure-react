import { all, call, put, takeLatest } from "redux-saga/effects";
import { IAxiosResponse } from "../../../../../../interfaces/generic.model";
import BookSlotService from "../../facility-type/service/book.service";
import { FETCH_BOOK_SLOT_REQUEST, IUpdateBookingSlotsRequestAction, UPDATE_BOOK_SLOT_REQUEST, fetchBookSlotFailed, fetchBookSlotSuccess, updateBookingSlotsFailure, updateBookingSlotsSuccess } from "../actions/book-slots.action";

function* fetchBookSlot() {
    try {
        const response: IAxiosResponse<any> = yield call(
          BookSlotService.fetchBookSlot
          );
    
        yield put(
          fetchBookSlotSuccess({ result: response.data, error: [], pending: false })
        );
      } catch (error) {
        yield put(fetchBookSlotFailed({ result: null, error: [], pending: false }));
      }
}

function* updateBookSlot(action: IUpdateBookingSlotsRequestAction) {
    const data = action.payload;
    try {
      let response: IAxiosResponse<any>;
  
      if (action.payload) {
        response = yield call(BookSlotService.updateBookSlot, action.payload);
      } else {
        response = yield call(BookSlotService.addBookSlot, action.payload);
      }
  
      yield put(
        updateBookingSlotsSuccess({ result: response?.data, error: [], pending: false })
      );
    } catch (error: any) {
      yield put(
        updateBookingSlotsFailure({
          error:
            typeof error?.response?.data === "string"
              ? [error?.response?.data]
              : error?.response?.data,
          pending: false,
        })
      );
    }
  }

  export default function* fetchBookSlotSaga() {
    yield all([
      takeLatest(FETCH_BOOK_SLOT_REQUEST, fetchBookSlot),
      takeLatest(UPDATE_BOOK_SLOT_REQUEST, updateBookSlot),
    ]);
  }