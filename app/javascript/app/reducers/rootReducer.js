import { combineReducers } from "redux";

import moviesListReducer from "./moviesListReducer";
import movieShowReducer from "./movieShowReducer";
import movieReviewsReducer from "./movieReviewsReducer";
import watchlistsReducer from "./watchlistsReducer";
import genresReducer from "./genresReducer";
import favoritesReducer from "./favoritesReducer";
import addToWatchlist from "./watchlistsReducer";

const rootReducer = combineReducers({
	moviesList: moviesListReducer,
	movieShow: movieShowReducer,
	movieReviews: movieReviewsReducer,
	watchlists: watchlistsReducer,
	genres: genresReducer,
	favorite: favoritesReducer,
	addToWatchlist,
});

export default rootReducer;
