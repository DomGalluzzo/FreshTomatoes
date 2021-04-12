import { combineReducers } from "redux";
// import counterReducer from "./counterReducer";
import moviesReducer from "./moviesReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
	// counter: counterReducer,
	movies: moviesReducer,
	user: userReducer,
});

export default rootReducer;
