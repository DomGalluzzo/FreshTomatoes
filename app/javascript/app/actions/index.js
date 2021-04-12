export const FETCH_MOVIES = "FETCH_MOVIES";

// * Fetch Movies
export const fetchMovies = async () => {
	const response = await fetch("/api/v1/movies");
	const data = await response.json();

	console.log(data);

	return {
		type: FETCH_MOVIES,
		payload: data,
	};
};
