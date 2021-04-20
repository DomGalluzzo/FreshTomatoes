import {
	FETCH_WATCHLISTS_LOADING,
	FETCH_WATCHLISTS_SUCCESS,
	FETCH_WATCHLISTS_FAILED,
} from "../actions";
import initialState from "../components/initialState";

const watchlistsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_WATCHLISTS_LOADING:
			return { ...state, loading: true, errorMessage: "" };
		case FETCH_WATCHLISTS_SUCCESS:
			return {
				...state,
				loading: false,
				watchlists: action.payload,
				errorMessage: "",
			};
		case FETCH_WATCHLISTS_FAILED:
			return {
				...state,
				loading: false,
				errorMessage: "Unable to fetch watchlists",
			};
		default:
			return state;
	}
};

export default watchlistsReducer;
