import {
	FETCH_FAVORITES_FAILED,
	FETCH_FAVORITES_LOADING,
	FETCH_FAVORITES_SUCCESS,
	ADD_FAVORITE_SUCCESS,
} from "../actions";

import initialState from "../components/initialState";

const userFavoritesReducer = (state = [], action) => {
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
		case ADD_FAVORITE_SUCCESS:
			return { ...state, favorites: [action.payload, ...state.favorites] };

		default:
			return state;
	}
};

export default userFavoritesReducer;
