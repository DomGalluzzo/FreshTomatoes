import Axios from "axios";

export const FETCH_MOVIES_LIST_LOADING = "FETCH_MOVIES_LIST_LOADING";
export const FETCH_MOVIES_LIST_FAILED = "FETCH_MOVIES_LIST_FAILED";
export const FETCH_MOVIES_LIST_SUCCESS = "FECTH_MOVIES_LIST_SUCCESS";

export const FETCH_MOVIE = "FETCH_MOVIE";

export const fetchMovie = (id) => {
	return async (dispatch, getState) => {
		const response = await Axios.get(`/api/v1/movies/${id}`);
		dispatch({
			type: FETCH_MOVIE,
			payload: response.data,
		});
	};
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
	} catch (e) {
		dispatch({
			type: FETCH_MOVIES_LIST_FAILED,
		});
	}
};

// export const fetchMoviesList = () => {
// 	return async (dispatch, getState) => {
// 		const response = await Axios.get("/api/v1/movies");

// 		dispatch({
// 			type: FETCH_MOVIES,
// 			payload: response.data,
// 		});
// 	};
// };
