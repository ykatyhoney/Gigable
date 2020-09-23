import { call, put } from "redux-saga/effects";
import API from "../../network/apis/gigs";
import * as ACTIONS from "../actions/Gigs";
import { dispatchSnackbarError } from "../../utils/Shared";
import { takeLatest } from "redux-saga/effects";
import * as TYPES from "../types/GigsType";

export function* gigsListSaga(action) {
  try {
    const response = yield call(API.getGigs, action.payload);
    yield put(ACTIONS.gigsListReceive(response.data));
  } catch (err) {
    dispatchSnackbarError(err.response.data);
  }
}

export function* gigsSagas() {
  yield takeLatest(TYPES.GET_GIGS_LIST_REQUEST, gigsListSaga);
}
