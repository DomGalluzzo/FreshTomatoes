import {
	CREATE_REVIEW_LOADING,
	CREATE_REVIEW_SUCCESS,
	CREATE_REVIEW_FAILED,
	FETCH_MOVIE_REVIEWS_LOADING,
	FETCH_MOVIE_REVIEWS_SUCCESS,
	FETCH_MOVIE_REVIEWS_FAILED,
	UPDATE_REVIEW_LOADING,
	UPDATE_REVIEW_SUCCESS,
	UPDATE_REVIEW_FAILED,
	DELETE_REVIEW_LOADING,
	DELETE_REVIEW_SUCCESS,
	DELETE_REVIEW_FAILED,
} from "../actions";

const movieReviewsReducer = (state = [], action) => {
	switch (action.type) {
		// ! Create
		case CREATE_REVIEW_LOADING:
			return { ...state, loading: true, errorMessage: "" };

		case CREATE_REVIEW_SUCCESS:
			return {
				...state,
				reviews: [...state.reviews, { review: action.payload }],
				loading: false,
				errorMessage: "",
			};

		case CREATE_REVIEW_FAILED:
			return { ...state, loading: false, errorMessage: "Unable to add review" };

		// ! Read

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

		// ! Update
		case UPDATE_REVIEW_LOADING:
			return { ...state, loading: true, errorMessage: "" };

		case UPDATE_REVIEW_SUCCESS:
			return {
				...state,
				loading: false,
				reviews: [...state.reviews, action.payload],
				errorMessage: "",
			};

		case UPDATE_REVIEW_FAILED:
			return {
				...state,
				loading: false,
				errorMessage: "Unable to update review",
			};

		// ! Destroy
		case DELETE_REVIEW_LOADING:
			return {
				...state,
				loading: true,
				errorMessage: "",
			};

		case DELETE_REVIEW_SUCCESS:
			return {
				...state,
				loading: false,
				reviews: state.reviews.filter(
					(review) => review.id != action.payload.id
				),
				errorMessage: "",
			};

		case DELETE_REVIEW_FAILED:
			return {
				...state,
				loading: false,
				errorMessage: "Unable to delete review",
			};

		default:
			return state;
	}
};

export default movieReviewsReducer;
