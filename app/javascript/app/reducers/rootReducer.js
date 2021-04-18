import { combineReducers } from "redux";

import moviesListReducer from "./moviesListReducer";
import movieShowReducer from "./movieShowReducer";
import reviewsListReducer from "./reviewsListReducer";

const rootReducer = combineReducers({
	moviesList: moviesListReducer,
	movieShow: movieShowReducer,
	reviewsList: reviewsListReducer,
});

export default rootReducer;
