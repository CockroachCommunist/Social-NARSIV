import { all, fork } from "redux-saga/effects";
import { getUserSaga } from "./user";

export default function* rootWatcherSaga() {
  yield all([fork(getUserSaga)]);
}
