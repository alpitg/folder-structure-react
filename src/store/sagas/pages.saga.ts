import { all, call, put, takeLatest } from "redux-saga/effects";
import { IAxiosResponse } from "../../interfaces/generic.model";
import pagesService from "../../services/pages.service";
import {
  PAGES_REQUEST,
  fetchPagesSuccess,
  fetchPagesFailed,
} from "../actions/pages.action";

function* pages() {
  try {
    const response: IAxiosResponse<any> = yield call(pagesService.fetchPages);
    yield put(
      fetchPagesSuccess({ result: response.data, error: [], pending: false })
    );
  } catch (error) {
    yield put(
      fetchPagesFailed({ result: null, error: ["error"], pending: false })
    );
  }
}

export default function* pagesSaga() {
  yield all([takeLatest(PAGES_REQUEST, pages)]);
}
