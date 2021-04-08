export const fetchMovies = async () => {
	const response = await fetch("/api/v1/movies");
	const data = await response.json();

	console.log(data);
};
