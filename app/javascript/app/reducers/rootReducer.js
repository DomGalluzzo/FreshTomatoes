import { combineReducers } from "redux";

import moviesListReducer from "./moviesListReducer";
import movieShowReducer from "./movieShowReducer";
import movieReviewsReducer from "./movieReviewsReducer";
import userFavoritesReducer from "./userFavoritesReducer";
import genresReducer from "./genresReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
	moviesList: moviesListReducer,
	movieShow: movieShowReducer,
	movieReviews: movieReviewsReducer,
	genres: genresReducer,
	favorites: userFavoritesReducer,
	currentUser: userReducer,
});

export default rootReducer;
