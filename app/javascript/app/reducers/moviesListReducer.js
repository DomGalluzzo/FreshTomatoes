import {
	FETCH_MOVIES_LIST_LOADING,
	FETCH_MOVIES_LIST_SUCCESS,
	FETCH_MOVIES_LIST_FAILED,
} from "../actions";

import initialState from "../components/initialState";

const moviesListReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_MOVIES_LIST_LOADING:
			return { ...state, loading: true, errorMessage: "" };
		case FETCH_MOVIES_LIST_SUCCESS:
			return {
				...state,
				loading: false,
				movies: action.payload,
				errorMessage: "",
			};
		case FETCH_MOVIES_LIST_FAILED:
			return {
				...state,
				loading: false,
				errorMessage: "Unable to load movies",
			};
		default:
			return state;
	}
};

export default moviesListReducer;
