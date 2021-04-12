import Axios from "axios";

export const FETCH_MOVIES = "FETCH_MOVIES";

export const fetchMovies = () => {
	return async (dispatch, getState) => {
		const response = await Axios.get("/api/v1/movies");

		dispatch({
			type: FETCH_MOVIES,
			payload: response.data,
		});
	};
};
