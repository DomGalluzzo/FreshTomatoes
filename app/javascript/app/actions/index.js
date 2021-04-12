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

export const FETCH_MOVIES = "FETCH MOVIES";

export const fetchMovies = async () => {
	const response = await fetch("/api/v1/movies");
	const data = await response.json();

	return {
		type: FETCH_MOVIES,
		payload: data,
	};
};
