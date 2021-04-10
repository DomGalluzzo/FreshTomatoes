// import { createStore } from "redux";
// import rootReducer from "../reducers/rootReducer";
import { logger } from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import reduxPromise from "redux-promise";
import rootReducer from "../reducers/rootReducer";

const initialState = {
	count: 0,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));

const store = createStore(rootReducer, initialState, middlewares);

export default store;
