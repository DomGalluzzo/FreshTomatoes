import { combineReducers } from "redux";

import moviesListReducer from "./moviesListReducer";
import movieShowReducer from "./movieShowReducer";
import movieReviewsReducer from "./movieReviewsReducer";
import userFavoritesReducer from "./userFavoritesReducer";
import genresReducer from "./genresReducer";
import userReducer from "./userReducer";
import addFavoriteReducer from "./addFavoriteReducer";

const rootReducer = combineReducers({
	moviesList: moviesListReducer,
	movieShow: movieShowReducer,
	movieReviews: movieReviewsReducer,
	genres: genresReducer,
	favorites: userFavoritesReducer,
	user: userReducer,
	// addFavorite: addFavoriteReducer,
});

export default rootReducer;
