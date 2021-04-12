import { FETCH_MOVIE, FETCH_MOVIES } from "../actions";

const moviesReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_MOVIES:
			return action.payload;
		case FETCH_MOVIE:
			return [action.payload];
		default:
			return state;
	}
};

export default moviesReducer;
