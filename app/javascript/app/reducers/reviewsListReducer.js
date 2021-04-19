import {
	FETCH_REVIEWS_LIST_LOADING,
	FETCH_REVIEWS_LIST_SUCCESS,
	FETCH_REVIEWS_LIST_FAILED,
} from "../actions";

const initialState = {
	loading: false,
	movies: [
		{
			movie: {
				actors: [
					{
						actor: {},
					},
				],
				director: {},
				genre: {},
				reviews: [
					{
						review: {},
					},
				],
			},
		},
	],
	errorMessage: "",
};

const reviewsListReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_REVIEWS_LIST_LOADING:
			return { ...state, loading: true, errorMessage: "" };
		case FETCH_REVIEWS_LIST_SUCCESS:
			return {
				...state,
				reviews: action.payload,
				loading: false,
				errorMessage: "",
			};
		case FETCH_REVIEWS_LIST_FAILED:
			return {
				...state,
				loading: false,
				errorMessage: "Unable to load reviews",
			};
		default:
			return state;
	}
};

export default reviewsListReducer;
