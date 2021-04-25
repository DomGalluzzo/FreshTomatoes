import Axios from "axios";
import { type } from "jquery";

export const FETCH_MOVIE_SHOW_LOADING = "FETCH_MOVIE_SHOW_LOADING";
export const FETCH_MOVIE_SHOW_SUCCESS = "FETCH_MOVIE_SHOW_SUCCESS";
export const FETCH_MOVIE_SHOW_FAILED = "FETCH_MOVIE_SHOW_FAILED";

export const FETCH_MOVIES_LIST_LOADING = "FETCH_MOVIES_LIST_LOADING";
export const FETCH_MOVIES_LIST_SUCCESS = "FECTH_MOVIES_LIST_SUCCESS";
export const FETCH_MOVIES_LIST_FAILED = "FETCH_MOVIES_LIST_FAILED";

export const FETCH_MOVIE_REVIEWS_LOADING = "FETCH_MOVIE_REVIEWS_LOADING";
export const FETCH_MOVIE_REVIEWS_SUCCESS = "FETCH_MOVIE_REVIEWS_SUCCESS";
export const FETCH_MOVIE_REVIEWS_FAILED = "FETCH_MOVIE_REVIEWS_FAILED";

export const FETCH_WATCHLISTS_LOADING = "FETCH_WATCHLISTS_LOADING";
export const FETCH_WATCHLISTS_SUCCESS = "FETCH_WATCHLISTS_SUCCESS";
export const FETCH_WATCHLISTS_FAILED = "FETCH_WATCHLISTS_FAILED";

export const FETCH_GENRES_LOADING = "FETCH_GENRES_LOADING";
export const FETCH_GENRES_SUCCESS = "FETCH_GENRES_SUCCESS";
export const FETCH_GENRES_FAILED = "FETCH_GENRES_FAILED";

export const ADD_TO_WATCHLIST = "ADD_TO_WATCHLIST";

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
	} catch (error) {
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

export const fetchMovieReviews = (id) => async (dispatch) => {
	try {
		dispatch({
			type: FETCH_MOVIE_REVIEWS_LOADING,
		});

		const response = await Axios.get(`/api/v1/movies/${id}/reviews`);

		dispatch({
			type: FETCH_MOVIE_REVIEWS_SUCCESS,
			payload: response.data,
		});
	} catch (error) {
		dispatch({
			type: FETCH_MOVIE_REVIEWS_FAILED,
		});
	}
};

export const fetchWatchlists = (id) => async (dispatch) => {
	try {
		dispatch({
			type: FETCH_WATCHLISTS_LOADING,
		});

		const watchlist_id = id - 1;
		const response = await Axios.get(
			`/api/v1/users/${id}/watchlists/${watchlist_id}`
		);

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

export const fetchGenres = () => async (dispatch) => {
	try {
		dispatch({
			type: FETCH_GENRES_LOADING,
		});

		const response = await Axios.get("/api/v1/genres");

		dispatch({
			type: FETCH_GENRES_SUCCESS,
			payload: response.data,
		});
	} catch (error) {
		dispatch({
			type: FETCH_GENRES_FAILED,
		});
	}
};

// export const createFavorite = (user_id, movie_id) => async (dispatch) => {
// 	try {
// 		dispatch({
// 			type: CREATE_FAVORITE_LOADING,
// 		});

// 		const body = { user_id, watchlist_id, movie_id };
// 		const watchlist_id = id - 1;
// 		const response = await Axios.post(
// 			`/api/v1/users/${user_id}/watchlists/${watchlist_id}`,
// 			{ body }
// 		);

// 		console.log(response);
// 		dispatch({
// 			type: CREATE_FAVORITE_SUCCESS,
// 			payload: response,
// 		});
// 	} catch (error) {
// 		dispatch({
// 			type: CREATE_FAVORITE_FAILED,
// 		});
// 	}
// };

export const addToWatchlist = (user_id, movie) => async (dispatch) => {
	const watchlist_id = user_id - 1;
	const response = await fetch(
		`/api/v1/users/${user_id}/watchlists/${watchlist_id}`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(movie),
		}
	);

	const data = await response.json;

	dispatch({
		type: ADD_TO_WATCHLIST,
		payload: data.movie,
	});
};
