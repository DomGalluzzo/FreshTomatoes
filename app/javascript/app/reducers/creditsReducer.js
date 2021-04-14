import { FETCH_CREDITS_ON_ACTORS, FETCH_CREDITS_ON_MOVIES } from "../actions";

const initialState = [];

const creditsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CREDITS_ON_ACTORS:
			return action.payload;
		case FETCH_CREDITS_ON_MOVIES:
			return action.payload;
		default:
			return state;
	}
};

export default creditsReducer;
