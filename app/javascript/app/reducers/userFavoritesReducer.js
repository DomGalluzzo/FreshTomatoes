import {
	ADD_FAVORITE_SUCCESS,
	FETCH_FAVORITES_FAILED,
	FETCH_FAVORITES_LOADING,
	FETCH_FAVORITES_SUCCESS,
	REMOVE_FAVORITE_FAILED,
	REMOVE_FAVORITE_LOADING,
	REMOVE_FAVORITE_SUCCESS,
} from "../actions";

const userFavoritesReducer = (state = [], action) => {
	switch (action.type) {
		// ! Create
		case ADD_FAVORITE_SUCCESS:
			return {
				...state,
				favorites: [...state.favorites, action.payload],
				loading: false,
				errorMessage: "",
			};

		// ! Read
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

		// ! Delete
		case REMOVE_FAVORITE_LOADING:
			return { ...state, loading: true, errorMessage: "" };

		case REMOVE_FAVORITE_SUCCESS:
			return {
				...state,
				loading: false,
				favorites: action.payload,
				errorMessage: "",
			};

		case REMOVE_FAVORITE_FAILED:
			return {
				...state,
				loading: false,
				errorMessage: "Unable to remove favorite",
			};

		default:
			return state;
	}
};

export default userFavoritesReducer;
