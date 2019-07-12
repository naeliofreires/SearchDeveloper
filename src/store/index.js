import ReduxThunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";

import reducers from "./ducks/index";
import sagas from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  compose(applyMiddleware(sagaMiddleware, ReduxThunk))
);

sagaMiddleware.run(sagas);

export default store;
