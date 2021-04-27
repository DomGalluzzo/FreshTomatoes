import {
	FETCH_MOVIE_REVIEWS_LOADING,
	FETCH_MOVIE_REVIEWS_SUCCESS,
	FETCH_MOVIE_REVIEWS_FAILED,
} from "../actions";

import initialState from "../components/initialState";

const movieReviewsReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_MOVIE_REVIEWS_LOADING:
			return { ...state, loading: true, errorMessage: "" };
		case FETCH_MOVIE_REVIEWS_SUCCESS:
			return {
				...state,
				reviews: action.payload,
				loading: false,
				errorMessage: "",
			};
		case FETCH_MOVIE_REVIEWS_FAILED:
			return {
				...state,
				loading: false,
				errorMessage: "Unable to load reviews",
			};
		default:
			return state;
	}
};

export default movieReviewsReducer;
