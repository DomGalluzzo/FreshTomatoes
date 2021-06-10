import {
	FETCH_GENRES_LOADING,
	FETCH_GENRES_SUCCESS,
	FETCH_GENRES_FAILED,
} from "../actions";

const genresReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_GENRES_LOADING:
			return { ...state, loading: true, errorMessage: "" };
		case FETCH_GENRES_SUCCESS:
			return {
				...state,
				genres: action.payload,
				loading: false,
				errorMessage: "",
			};
		case FETCH_GENRES_FAILED:
			return {
				...state,
				loading: false,
				errorMessage: "Unable to load genres",
			};
		default:
			return state;
	}
};

export default genresReducer;
