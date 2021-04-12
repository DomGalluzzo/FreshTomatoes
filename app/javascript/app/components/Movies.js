import React, { useEffect } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";

import { fetchMovies } from "../actions/index";
import Movie from "./Movie";

const Movies = () => {
	const dispatch = useDispatch();
	const movies = useSelector((state) => state.movies);
	console.log(movies);

	useEffect(() => {
		dispatch(fetchMovies());
	}, []);

	return (
		<Row>
			{movies.map((movie) => {
				return (
					<Col md={4} key={movie.id}>
						<Movie movie={movie} />
					</Col>
				);
			})}
		</Row>
	);
};

export default Movies;
