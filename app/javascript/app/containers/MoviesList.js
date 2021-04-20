import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import _ from "lodash";

import { fetchMoviesList } from "../actions";
import Title from "../components/Title";
import { Row, Col } from "react-bootstrap";

const MoviesList = () => {
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
			return moviesList.movies.map((movie) => {
				return (
					<Link to={`/movies/${movie.id}`} key={movie.id}>
						<Row className="pt-3 movie-list-item" id="movies-list-row">
							<Col sm={8}>{movie.title}</Col>
							<Col sm={4}>Avg. Review</Col>
						</Row>
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

	return (
		<div className="movies-list-container">
			<Row className="other-movies-header">
				<Title text="Other Movies" className="other-movies-title ml-4" />
			</Row>
			<div className="movies-list-group">{showData()}</div>
		</div>
	);
};

export default MoviesList;
