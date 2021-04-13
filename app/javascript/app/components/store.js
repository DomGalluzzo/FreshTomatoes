import { logger } from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import reduxPromise from "redux-promise";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";

const root = document.getElementById("root");
const initialState = { movies: JSON.parse(root.dataset.movies) };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, initialState, middlewares);

export default store;
