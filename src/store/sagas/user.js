import axios from "axios";
import { call, put } from "redux-saga/effects";
import { GoogleKey } from "../../key";

import { Creators as UserActions } from "../ducks/user";

async function request(username) {
  try {
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
  } catch (error) {
    console.log("error:", error);
  }
}

export function* getUser(action) {
  try {
    const user = yield call(request, action.payload.username);

    yield put(UserActions.userSuccess(user));
  } catch (error) {
    // yield put({ type: "API_CALL_FAILURE", error });
  }
}
