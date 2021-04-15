import Axios from "axios";

export const FETCH_MOVIE = "FETCH_MOVIE";
export const FETCH_MOVIES = "FETCH_MOVIES";

export const FETCH_CREDITS_ON_MOVIES = "FETCH_CREDITS_ON_MOVIES";
export const FETCH_CREDITS_ON_ACTORS = "FETCH_CREDITS_ON_ACTORS";

export const fetchMovie = (id) => {
	return async (dispatch, getState) => {
		const response = await Axios.get(`/api/v1/movies/${id}`);
		dispatch({
			type: FETCH_MOVIE,
			payload: response.data,
		});
	};
};

export const fetchMovies = () => {
	return async (dispatch, getState) => {
		const response = await Axios.get("/api/v1/movies");

		dispatch({
			type: FETCH_MOVIES,
			payload: response.data,
		});
	};
};

export const fetchCreditsOnMovies = (movieId) => {
	return async (dispatch, getState) => {
		const response = await Axios.get(`/api/v1/movies/${movieId}/credits`);

		dispatch({
			type: FETCH_CREDITS_ON_MOVIES,
			payload: response.data,
		});
	};
};

export const fetchCreditsOnActors = (actorId) => {
	return async (dispatch, getState) => {
		const response = Axios.get(`/api/v1/actors/${actorId}/credits`);

		dispatch({
			type: FETCH_CREDITS_ON_ACTORS,
			payload: response.data,
		});
	};
};
