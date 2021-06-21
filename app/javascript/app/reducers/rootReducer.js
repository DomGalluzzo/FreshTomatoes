import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";

import moviesListReducer from "./moviesListReducer";
import movieShowReducer from "./movieShowReducer";
import movieReviewsReducer from "./movieReviewsReducer";
import userFavoritesReducer from "./userFavoritesReducer";
import genresReducer from "./genresReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  toastr: toastrReducer,
  moviesList: moviesListReducer,
  movieShow: movieShowReducer,
  movieReviews: movieReviewsReducer,
  genres: genresReducer,
  favorites: userFavoritesReducer,
  user: userReducer,
});

export default rootReducer;
