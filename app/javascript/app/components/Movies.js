import React, { useEffect } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../actions/index";

const Movies = () => {
	const dispatch = useDispatch();
	const movies = useSelector((state) => state.movies);
	console.log(movies);

	useEffect(() => {
		dispatch(fetchMovies());
	}, []);

	return (
		<div>
			{movies.map((movie) => {
				return <h3>{movie.title}</h3>;
			})}
		</div>
	);
};

export default Movies;
