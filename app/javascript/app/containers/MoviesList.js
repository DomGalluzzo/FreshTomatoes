import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";

import { fetchMoviesList } from "../actions";
import Title from "../components/Title";
import { Row, Col, Image, ListGroup } from "react-bootstrap";

const MoviesList = ({ onclick }) => {
	const dispatch = useDispatch();
	const moviesList = useSelector((state) => state.moviesList);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		dispatch(fetchMoviesList());
	};

	const showData = () => {
		if (!_.isEmpty(moviesList.movies)) {
			const sortedMovies = moviesList.movies.sort((a, b) =>
				a.title > b.title ? 1 : -1
			);
			return sortedMovies.map((movie) => {
				return (
					<Link
						to={`/movies/${movie.id}`}
						key={movie.id}
						className="other-movies-link">
						<ListGroup.Item action>{movie.title}</ListGroup.Item>
					</Link>
				);
			});
		}

		if (moviesList.loading) {
			return <p>loading...</p>;
		}

		if (moviesList.errorMessage !== "") {
			return <p>{moviesList.errorMessage}</p>;
		}

		return <p>Unable to fetch data</p>;
	};

	return <ListGroup>{showData()}</ListGroup>;
};

export default MoviesList;
