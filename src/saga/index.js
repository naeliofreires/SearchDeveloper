import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";

export function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

function fetchUser(user) {
  return axios({
    method: "get",
    url: `https://api.github.com/users/${user}`
  });
}

function* workerSaga(action) {
  try {
    const response = yield call(fetchUser, action.user);
    const user = response.data;

    // dispatch a success action to the store with the new user
    yield put({ type: "API_CALL_SUCCESS", user });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}
