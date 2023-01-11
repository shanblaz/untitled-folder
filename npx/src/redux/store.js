import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchFetchData } from "./saga";
import rootReducer from "./reducer";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(watchFetchData);

export default store;
