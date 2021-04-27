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

export const ADD_FAVORITE_LOADING = "ADD_FAVORITE_LOADING";
export const ADD_FAVORITE_SUCCESS = "ADD_FAVORITE_SUCCESS";
export const ADD_FAVORITE_FAILED = "ADD_FAVORITE_FAILED";

export const FETCH_GENRES_LOADING = "FETCH_GENRES_LOADING";
export const FETCH_GENRES_SUCCESS = "FETCH_GENRES_SUCCESS";
export const FETCH_GENRES_FAILED = "FETCH_GENRES_FAILED";

export const FETCH_USER_LOADING = "FETCH_USER_LOADING";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILED = "FETCH_USER_FAILED";

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

export const addFavorite = (user_id, movie) => async (dispatch) => {
	try {
		dispatch({
			type: ADD_FAVORITE_LOADING,
		});

		const response = await Axios.post(`/api/v1/users/${user_id}/favorites`, {
			favorite: { movie },
		});

		dispatch({
			type: ADD_FAVORITE_SUCCESS,
			payload: response.data,
		});
	} catch (error) {
		dispatch({
			type: ADD_FAVORITE_FAILED,
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

export const fetchUser = () => async (dispatch) => {
	try {
		dispatch({
			type: FETCH_USER_LOADING,
		});

		const user = await root.getAttribute("data-user");
		const userJson = await JSON.parse(user);

		dispatch({
			type: FETCH_USER_SUCCESS,
			payload: userJson,
		});
	} catch (error) {
		dispatch({
			type: FETCH_USER_FAILED,
		});
	}
};
