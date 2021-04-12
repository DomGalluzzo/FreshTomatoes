import { SET_USER } from "../actions/index";

const initialState = {
	user: undefined,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
			const { user } = action;
			return { ...state, user };

		default:
			return state;
	}
};
