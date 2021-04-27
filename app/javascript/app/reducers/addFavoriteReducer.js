// import {
// 	ADD_FAVORITE_FAILED,
// 	ADD_FAVORITE_LOADING,
// 	ADD_FAVORITE_SUCCESS,
// } from "../actions";

// const addFavoriteReducer = (state = [], action) => {
// 	switch (action.type) {
// 		case ADD_FAVORITE_LOADING:
// 			return { ...state, loading: true, errorMessage: "" };
// 		case ADD_FAVORITE_SUCCESS:
// 			return {
// 				...state,
// 				favorite: action.payload.movie,
// 				loading: false,
// 				errorMessage: "",
// 			};
// 		case ADD_FAVORITE_FAILED:
// 			return {
// 				...state,
// 				loading: false,
// 				errorMessage: "Unable to add favorite",
// 			};

// 		default:
// 			return state;
// 	}
// };

// export default addFavoriteReducer;
