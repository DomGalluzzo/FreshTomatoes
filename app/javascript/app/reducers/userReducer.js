import { FETCH_USER } from "../actions/index";

const initialState = {
	user: undefined,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USER:
			return action.payload;
		default:
			return state;
	}
};
