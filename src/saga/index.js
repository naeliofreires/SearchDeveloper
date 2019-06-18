import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";
import { GoogleKey } from "../key";

export function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

async function fetchUser(username) {
  const { data: user } = await axios({
    method: "get",
    url: `https://api.github.com/users/${username}`
  });

  const coordenadas = await axios({
    method: "get",
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${
      user.location
    }&key=${GoogleKey}`
  });

  const coordenadas_ = coordenadas.data.results[0].geometry.location;
  return {
    id: user.id,
    login: user.login,
    name: user.name,
    avatar: user.avatar_url,
    url: user.html_url,
    location: user.location,
    coordenadas_
  };
}

function* workerSaga(action) {
  try {
    const user = yield call(fetchUser, action.user);

    yield put({
      type: "API_CALL_SUCCESS",
      user: {
        ...user
      }
    });
  } catch (error) {
    yield put({ type: "API_CALL_FAILURE", error });
  }
}
