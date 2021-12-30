import { all, fork } from "redux-saga/effects";

function* rootWatcherSaga() {
  yield all([fork(() => {})]);
}

export default rootWatcherSaga;
