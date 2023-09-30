import { all, call, put, takeLatest } from "redux-saga/effects";
import { IAxiosResponse } from "../../interfaces/generic.model";
import PagesService from "../../services/pages.service";
import {
  ACTIONS_REQUEST,
  fetchActionsSuccess,
  fetchActionsFailed,
} from "../actions/actions.action";

function* actions() {
  try {
    const response: IAxiosResponse<any> = yield call(PagesService.fetchActions);
    yield put(
      fetchActionsSuccess({ result: response.data, error: [], pending: false })
    );
  } catch (error) {
    yield put(
      fetchActionsFailed({ result: null, error: ["error"], pending: false })
    );
  }
}

export default function* actionsSaga() {
  yield all([takeLatest(ACTIONS_REQUEST, actions)]);
}
