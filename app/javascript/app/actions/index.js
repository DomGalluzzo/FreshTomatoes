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

export const CREATE_REVIEW_LOADING = "CREATE_REVIEW_LOADING";
export const CREATE_REVIEW_SUCCESS = "CREATE_REVIEW_SUCCESS";
export const CREATE_REVIEW_FAILED = "CREATE_REVIEW_FAILED";

export const UPDATE_REVIEW_LOADING = "UPDATE_REVIEW_LOADING";
export const UPDATE_REVIEW_SUCCESS = "UPDATE_REVIEW_SUCCESS";
export const UPDATE_REVIEW_FAILED = "UPDATE_REVIEW_FAILED";

export const FETCH_FAVORITES_LOADING = "FETCH_FAVORITES_LOADING";
export const FETCH_FAVORITES_SUCCESS = "FETCH_FAVORITES_SUCCESS";
export const FETCH_FAVORITES_FAILED = "FETCH_FAVORITES_FAILED";

export const ADD_FAVORITE_LOADING = "ADD_FAVORITE_LOADING";
export const ADD_FAVORITE_SUCCESS = "ADD_FAVORITE_SUCCESS";
export const ADD_FAVORITE_FAILED = "ADD_FAVORITE_FAILED";

export const REMOVE_FAVORITE_LOADING = "REMOVE_FAVORITE_LOADING";
export const REMOVE_FAVORITE_SUCCESS = "REMOVE_FAVORITE_SUCCESS";
export const REMOVE_FAVORITE_FAILED = "REMOVE_FAVORITE_FAILED";

export const FETCH_GENRES_LOADING = "FETCH_GENRES_LOADING";
export const FETCH_GENRES_SUCCESS = "FETCH_GENRES_SUCCESS";
export const FETCH_GENRES_FAILED = "FETCH_GENRES_FAILED";

export const FETCH_USER_LOADING = "FETCH_USER_LOADING";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILED = "FETCH_USER_FAILED";

// ! Movies

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

// ! Reviews

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

export const createReview = (movie_id, currentUser, comment, rating) => async (
	dispatch
) => {
	const userId = currentUser.id;

	try {
		dispatch({
			type: CREATE_REVIEW_LOADING,
		});

		const response = await Axios.post(`/api/v1/movies/${movie_id}/reviews`, {
			user_id: userId,
			comment,
			rating,
		});

		const data = JSON.parse(response.config.data);

		dispatch({
			type: CREATE_REVIEW_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: CREATE_REVIEW_FAILED,
		});
	}
};

export const updateReview = (movie_id, currentUser, comment, rating) => async (
	dispatch
) => {
	const userId = currentUser.id;

	try {
		dispatch({
			type: UPDATE_REVIEW_LOADING,
		});

		const response = await Axios.put(`/api/v1/movies/${movie_id}/reviews`, {
			user_id: userId,
			comment,
			rating,
		});

		const data = JSON.parse(response.config.data);

		dispatch({
			type: UPDATE_REVIEW_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: UPDATE_REVIEW_FAILED,
		});
	}
};

// ! Favorites

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
	const movieId = movie.id;
	try {
		dispatch({
			type: ADD_FAVORITE_LOADING,
		});

		const response = await Axios.post(`/api/v1/users/${user_id}/favorites`, {
			movie_id: movieId,
		});

		const data = JSON.parse(response.config.data);

		dispatch({
			type: ADD_FAVORITE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: ADD_FAVORITE_FAILED,
		});
	}
};

export const removeFavorite = (id, favorite) => async (dispatch) => {
	const favoriteId = favorite.id;

	const movieId = favorite.movie_id;

	try {
		dispatch({
			type: REMOVE_FAVORITE_LOADING,
		});

		await Axios.delete(`/api/v1/users/${id}/favorites/${favoriteId}`);

		// const data = JSON.parse(response.config.data);

		dispatch({
			type: REMOVE_FAVORITE_SUCCESS,
			// payload: response,
		});
	} catch (error) {
		dispatch({
			type: REMOVE_FAVORITE_FAILED,
		});
	}
};

// ! Genres

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

// ! User

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
