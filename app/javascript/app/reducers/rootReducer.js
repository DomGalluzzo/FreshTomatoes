import { combineReducers } from "redux";

import moviesListReducer from "./moviesListReducer";
import movieShowReducer from "./movieShowReducer";

const rootReducer = combineReducers({
	moviesList: moviesListReducer,
	movieShow: movieShowReducer,
});

export default rootReducer;
