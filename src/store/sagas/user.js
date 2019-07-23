import axios from "axios";
import { call, put } from "redux-saga/effects";
import { GoogleKey } from "../../key";

import { Creators as UserActions } from "../ducks/user";
import { Creators as ErrorActions } from "../ducks/error";

async function getCoordinates(location) {
  return await axios({
    method: "get",
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${GoogleKey}`
  });
}
async function request(username) {
  const result = await axios({
    method: "get",
    url: `https://api.github.com/users/${username}`
  })
    .then(resp => resp)
    .catch(({ response }) => response);

  if (result.status === 404) return null;

  const user = result.data;
  const {
    data: { results }
  } = await getCoordinates(user.location);

  const coordenadas_ = results[0].geometry.location;

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

export function* getUser(action) {
  try {
    const user = yield call(request, action.payload.username);

    if (user) {
      yield put(UserActions.userSuccess(user));
    } else {
      yield put(ErrorActions.setError("Usuario não encontrado!"));
    }
  } catch (error) {
    yield put(
      ErrorActions.setError("Desculpe, algo não ocorreu como esperado!")
    );
  }
}
