import { combineReducers } from "redux";

import moviesListReducer from "./moviesListReducer";
import movieShowReducer from "./movieShowReducer";
import reviewsListReducer from "./reviewsListReducer";
import watchlistsReducer from "./watchlistsReducer";

const rootReducer = combineReducers({
	moviesList: moviesListReducer,
	movieShow: movieShowReducer,
	reviewsList: reviewsListReducer,
	watchlists: watchlistsReducer,
});

export default rootReducer;
