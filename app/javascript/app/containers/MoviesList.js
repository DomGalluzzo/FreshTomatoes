import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";

import { fetchMoviesList } from "../actions";
import Title from "../components/Title";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import Movie from "../components/Movie";
import AddFavorite from "./AddFavorite";

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
				return <Movie movie={movie} />;
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

	return (
		<ListGroup>
			<ListGroup.Item>{showData()}</ListGroup.Item>
		</ListGroup>
	);
};

export default MoviesList;
