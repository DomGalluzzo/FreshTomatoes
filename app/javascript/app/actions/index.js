import Axios from "axios";

export const FETCH_MOVIE_SHOW_LOADING = "FETCH_MOVIE_SHOW_LOADING";
export const FETCH_MOVIE_SHOW_SUCCESS = "FETCH_MOVIE_SHOW_SUCCESS";
export const FETCH_MOVIE_SHOW_FAILED = "FETCH_MOVIE_SHOW_FAILED";

export const FETCH_MOVIES_LIST_LOADING = "FETCH_MOVIES_LIST_LOADING";
export const FETCH_MOVIES_LIST_SUCCESS = "FECTH_MOVIES_LIST_SUCCESS";
export const FETCH_MOVIES_LIST_FAILED = "FETCH_MOVIES_LIST_FAILED";

export const FETCH_MOVIE_REVIEWS_LOADING = "FETCH_MOVIE_REVIEWS_LOADING";
export const FETCH_MOVIE_REVIEWS_SUCCESS = "FETCH_MOVIE_REVIEWS_SUCCESS";
export const FETCH_MOVIE_REVIEWS_FAILED = "FETCH_MOVIE_REVIEWS_FAILED";

export const FETCH_FAVORITES_LOADING = "FETCH_FAVORITES_LOADING";
export const FETCH_FAVORITES_SUCCESS = "FETCH_FAVORITES_SUCCESS";
export const FETCH_FAVORITES_FAILED = "FETCH_FAVORITES_FAILED";

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

export const fetchFavorites = (id) => async (dispatch) => {
	try {
		dispatch({
			type: FETCH_FAVORITES_LOADING,
		});

		const response = await Axios.get(`/api/v1/users/${id}/favorites`);

		dispatch({
			type: FETCH_FAVORITES_SUCCESS,
			payload: response.data,
		});
	} catch (error) {
		dispatch({
			type: FETCH_FAVORITES_FAILED,
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

export const addToWatchlist = (movie) => async (dispatch) => {
	const response = await Axios.post(`/api/v1/watchlists/1/favorites`, {
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(movie),
	});
	console.log(movie);

	const data = await response.json();

	dispatch({
		type: ADD_TO_WATCHLIST,
		payload: data,
	});
};
