import {
	FETCH_FAVORITES_FAILED,
	FETCH_FAVORITES_LOADING,
	FETCH_FAVORITES_SUCCESS,
} from "../actions";

import initialState from "../components/initialState";

const userFavoritesReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_FAVORITES_LOADING:
			return { ...state, loading: true, errorMessage: "" };

		case FETCH_FAVORITES_SUCCESS:
			return {
				...state,
				favorites: action.payload,
				loading: false,
				errorMessage: "",
			};

		case FETCH_FAVORITES_FAILED:
			return {
				...state,
				loading: false,
				errorMessage: "Unable to load favorites",
			};
		default:
			return state;
	}
};

export default userFavoritesReducer;
