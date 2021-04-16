import { combineReducers } from "redux";

import moviesListReducer from "./moviesListReducer";

const rootReducer = combineReducers({
	moviesList: moviesListReducer,
});

export default rootReducer;
