import { takeLatest, put, call } from "redux-saga/effects";
import { start, error, success, stop } from "../slices/get";

async function getUsers() {
  await fetch("/api/users", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
}

function* getUserSagaWorker() {
  try {
    yield call(() => getUsers());
  } catch (e) {
    yield put(error(e));
  }
}

export default function* () {
  yield takeLatest(start.type, getUserSagaWorker);
}
