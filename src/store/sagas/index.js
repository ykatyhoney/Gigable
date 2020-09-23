import { gigsSagas } from './GigsSagas';
import { fork, all } from "redux-saga/effects";

export function* watchSagas() {
  //Combine sagas with 
  yield all([gigsSagas()]);
  // OR
  // yield all([fork(saga1)]);
}
