import { INCREMENT, DECREMENT, initialState } from "../actions/index";

export default (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return { ...state, count: state.count + 1 };
		case DECREMENT:
			return { ...state, count: state.count - 1 };
		default:
			console.log(action);
			return state;
	}
};
