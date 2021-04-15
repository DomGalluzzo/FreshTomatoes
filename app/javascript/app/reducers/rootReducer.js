import { combineReducers } from "redux";

import moviesReducer from "./moviesReducer";
import creditsReducer from "./creditsReducer";

const rootReducer = combineReducers({
	movies: moviesReducer,
	credits: creditsReducer,
});

export default rootReducer;
