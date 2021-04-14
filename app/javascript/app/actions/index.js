import Axios from "axios";

export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_MOVIE = "FETCH_MOVIE";

export const fetchMovies = () => {
	return async (dispatch, getState) => {
		const response = await Axios.get("/api/v1/movies");

		dispatch({
			type: FETCH_MOVIES,
			payload: response.data,
		});
	};
};

export const fetchMovie = (id) => {
	return async (dispatch, getState) => {
		const response = await Axios.get(`/api/v1/movies/${id}`);
		dispatch({
			type: FETCH_MOVIE,
			payload: response.data,
		});
	};
};
