import Axios from "axios";

// export const FETCH_MOVIES = "FETCH_MOVIES";

export const fetchMovies = () => {
	return async (dispatch, getState) => {
		const response = await Axios.get("/api/v1/movies");

		console.log(response.data);

		dispatch({
			type: "FETCH_MOVIES",
			payload: response.data,
		});
	};
};
