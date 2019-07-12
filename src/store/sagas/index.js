import { all, takeLatest } from "redux-saga/effects";

import { Types as UserActions } from "../ducks/user";

import { getUser } from "./user";

export default function* rootSaga() {
  yield all([takeLatest(UserActions.USE_REQUEST, getUser)]);
}
