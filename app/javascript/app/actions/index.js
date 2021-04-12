export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_MOVIE = "FETCH_MOVIE";

export const FETCH_USER = "FETCH_USER";

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

// * Fetch Movie
export const fetchMovie = async (id) => {
	const response = await fetch(`/api/v1/movies/${id}`);
	const data = await response.json();

	return {
		type: FETCH_MOVIE,
		payload: data,
	};
};

// * Fetch User
export const fetchUser = () => ({
	type: FETCH_USER,
});
