import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";

import { fetchGenres, fetchMoviesList } from "../actions";
import { Row, Col, Image, Container } from "react-bootstrap";
import Title from "../components/Title";
import Movie from "../components/Movie";

const GenresList = ({ genre }) => {
	const dispatch = useDispatch();
	const genresList = useSelector((state) => state.genres);
	const moviesList = useSelector((state) => state.moviesList);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		dispatch(fetchGenres());
		dispatch(fetchMoviesList());
	};

	const moviesInGenre = (selectedGenre) => {
		if (!_.isEmpty(moviesList.movies)) {
			return moviesList.movies.map((movie) => {
				if (!_.isUndefined(movie.genre) && movie.genre.name === selectedGenre) {
					return <Movie movie={movie} key={movie.id} className="genre-movie" />;
				}
			});
		}
	};

	return (
		<Container className="genres-list-container" fluid>
			<Row>
				<Col md={3} className="genre-column mt-2">
					<Title text="Action" className="genre-title" />
					{moviesInGenre("Action")}
				</Col>
				<Col md={3} className="genre-column mt-2">
					<Title text="Animation" className="genre-title" />
					{moviesInGenre("Animation")}
				</Col>
				<Col md={3} className="genre-column mt-2">
					<Title text="Comedy" className="genre-title" />
					{moviesInGenre("Comedy")}
				</Col>
				<Col md={3} className="genre-column mt-2">
					<Title text="Drama" className="genre-title" />
					{moviesInGenre("Drama")}
				</Col>
			</Row>
			<Row>
				<Col md={4} className="genre-column mt-2">
					<Title text="Horror" className="genre-title" />
					{moviesInGenre("Horror")}
				</Col>
				<Col md={4} className="genre-column mt-2">
					<Title text="Romance" className="genre-title" />
					{moviesInGenre("Romance")}
				</Col>
				<Col md={4} className="genre-column mt-2">
					<Title text="Sci-Fi" className="genre-title" />
					{moviesInGenre("Sci-Fi")}
				</Col>
			</Row>
		</Container>
	);
};

export default GenresList;
