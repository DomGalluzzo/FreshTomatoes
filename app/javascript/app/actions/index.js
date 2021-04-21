import Axios from "axios";
import { type } from "jquery";

export const FETCH_MOVIE_SHOW_LOADING = "FETCH_MOVIE_SHOW_LOADING";
export const FETCH_MOVIE_SHOW_SUCCESS = "FETCH_MOVIE_SHOW_SUCCESS";
export const FETCH_MOVIE_SHOW_FAILED = "FETCH_MOVIE_SHOW_FAILED";

export const FETCH_MOVIES_LIST_LOADING = "FETCH_MOVIES_LIST_LOADING";
export const FETCH_MOVIES_LIST_SUCCESS = "FECTH_MOVIES_LIST_SUCCESS";
export const FETCH_MOVIES_LIST_FAILED = "FETCH_MOVIES_LIST_FAILED";

export const FETCH_REVIEWS_LIST_LOADING = "FETCH_REVIEWS_LIST_LOADING";
export const FETCH_REVIEWS_LIST_SUCCESS = "FETCH_REVIEWS_LIST_SUCCESS";
export const FETCH_REVIEWS_LIST_FAILED = "FETCH_REVIEWS_LIST_FAILED";

export const FETCH_WATCHLISTS_LOADING = "FETCH_WATCHLISTS_LOADING";
export const FETCH_WATCHLISTS_SUCCESS = "FETCH_WATCHLISTS_SUCCESS";
export const FETCH_WATCHLISTS_FAILED = "FETCH_WATCHLISTS_FAILED";

export const fetchMovieShow = (id) => async (dispatch) => {
	try {
		dispatch({
			type: FETCH_MOVIE_SHOW_LOADING,
		});

		const response = await Axios.get(`/api/v1/movies/${id}`);

		dispatch({
			type: FETCH_MOVIE_SHOW_SUCCESS,
			payload: response.data,
		});
	} catch (e) {
		dispatch({
			type: FETCH_MOVIE_SHOW_FAILED,
		});
	}
};

export const fetchMoviesList = () => async (dispatch) => {
	try {
		dispatch({
			type: FETCH_MOVIES_LIST_LOADING,
		});
		const response = await Axios.get("/api/v1/movies");

		dispatch({
			type: FETCH_MOVIES_LIST_SUCCESS,
			payload: response.data,
		});
	} catch (error) {
		dispatch({
			type: FETCH_MOVIES_LIST_FAILED,
		});
	}
};

export const fetchReviewsList = (id) => async (dispatch) => {
	try {
		dispatch({
			type: FETCH_REVIEWS_LIST_LOADING,
		});

		const response = await Axios.get(`/api/v1/movies/${id}/reviews`);

		dispatch({
			type: FETCH_REVIEWS_LIST_SUCCESS,
			payload: response.data,
		});
	} catch (error) {
		dispatch({
			type: FETCH_REVIEWS_LIST_FAILED,
		});
	}
};

export const fetchWatchlists = (id) => async (dispatch) => {
	try {
		dispatch({
			type: FETCH_WATCHLISTS_LOADING,
		});

		const response = await Axios.get(`/api/v1/users/${id}/watchlists`);

		dispatch({
			type: FETCH_WATCHLISTS_SUCCESS,
			payload: response.data,
		});
	} catch (error) {
		dispatch({
			type: FETCH_WATCHLISTS_FAILED,
		});
	}
};
