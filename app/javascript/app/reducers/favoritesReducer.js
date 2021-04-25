import {
	CREATE_FAVORITE_FAILED,
	CREATE_FAVORITE_LOADING,
	CREATE_FAVORITE_SUCCESS,
} from "../actions";

import initialState from "../components/initialState";

const favoritesReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_FAVORITE_LOADING:
			return { ...state, loading: true, errorMessage: "" };
		case CREATE_FAVORITE_SUCCESS:
			return {
				...state,
				favorite: action.payload,
				loading: false,
				errorMessage: "",
			};
		case CREATE_FAVORITE_FAILED:
			return {
				...state,
				loading: false,
				errorMessage: "Unable to add favorite",
			};
		default:
			return state;
	}
};

export default favoritesReducer;
