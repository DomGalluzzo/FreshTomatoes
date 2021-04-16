import {
	FETCH_MOVIES_LIST_LOADING,
	FETCH_MOVIES_LIST_FAILED,
	FETCH_MOVIES_LIST_SUCCESS,
} from "../actions";

const initialState = {
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
};

const moviesListReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_MOVIES_LIST_LOADING:
			return { ...state, loading: true, errorMessage: "" };
		case FETCH_MOVIES_LIST_FAILED:
			return {
				...state,
				loading: false,
				errorMessage: "Unable to load movies",
			};
		case FETCH_MOVIES_LIST_SUCCESS:
			return {
				...state,
				loading: false,
				movies: action.payload,
				errorMessage: "",
			};
		default:
			return state;
	}
};

export default moviesListReducer;
