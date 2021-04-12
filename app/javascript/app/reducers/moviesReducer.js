import { FETCH_MOVIE, FETCH_MOVIES } from "../actions";

const initialState = [];

const moviesReducer = (state = initialState, action) => {
	Object.freeze(state);
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
