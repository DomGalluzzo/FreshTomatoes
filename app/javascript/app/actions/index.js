// import { useDispatch as dispatch } from "react-redux";

// export const fetchMovies = () => async (dispatch) => {
// 	const response = await fetch("/api/v1/movies");
// 	// const data = await response.json();

// 	dispatch({
// 		payload: response.data,
// 	});

// 	console.log(data);
// };

// export const INCREMENT = "INCREMENT";

// export const DECREMENT = "DECREMENT";

// export const increment = () => ({
// 	type: "INCREMENT",
// });

// export const decrement = () => ({
// 	type: "DECREMENT",
// });

// export const initialState = {
// 	count: 0,
// };

export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_MOVIE = "FETCH_MOVIE";

export const FETCH_USER = "FETCH_USER";
export const SET_USER = "SET_USER";

// * Fetch Movies
// export const fetchMovies = async () => {
// 	const response = await fetch("/api/v1/movies");
// 	const data = await response.json();

// 	return {
// 		type: FETCH_MOVIES,
// 		payload: data,
// 	};
// };

// * Fetch Movie
// export const fetchMovie = async (id) => {
// 	const response = await fetch(`/api/v1/movies/${id}`);
// 	const data = await response.json();

// 	return {
// 		type: FETCH_MOVIE,
// 		payload: data,
// 	};
// };

// * Fetch User
export const fetchUser = () => ({
	type: FETCH_USER,
});

// * Set User
export const setUser = (user) => ({
	type: SET_USER,
	user,
	// ^^^ === user: user
});
