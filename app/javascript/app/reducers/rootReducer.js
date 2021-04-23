import { combineReducers } from "redux";

import moviesListReducer from "./moviesListReducer";
import movieShowReducer from "./movieShowReducer";
import movieReviewsReducer from "./movieReviewsReducer";
import watchlistsReducer from "./watchlistsReducer";

const rootReducer = combineReducers({
	moviesList: moviesListReducer,
	movieShow: movieShowReducer,
	movieReviews: movieReviewsReducer,
	watchlists: watchlistsReducer,
});

export default rootReducer;
