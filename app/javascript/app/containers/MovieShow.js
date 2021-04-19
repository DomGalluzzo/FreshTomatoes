import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import _ from "lodash";
import {
	Col,
	Row,
	Container,
	Jumbotron,
	Image,
	ListGroup,
} from "react-bootstrap";

import { fetchMovieShow } from "../actions";
import Title from "../components/Title";
import MovieActorsList from "../components/MovieActorsList";
import MoviePoster from "../components/MoviePoster";
import MovieInfo from "../components/MovieInfo";
import Reviews from "./ReviewsList";
import MoviesList from "./MoviesList";

const MovieShow = () => {
	const dispatch = useDispatch();
	const movieState = useSelector((state) => state.movieShow);

	let { id } = useParams();

	React.useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		dispatch(fetchMovieShow(id));
	};

	const showData = () => {
		if (!_.isEmpty(movieState.movie)) {
			const movie = movieState.movie;

			return (
				<Container className="movie-show-container">
					<Row className="movie-show-header">
						<Title text={movie.title} className="movie-show-title ml-4" />
					</Row>
					<Row className="mt-3">
						<Col md={4}>
							<MoviesList />
						</Col>

						<Col md={8} className="">
							<div className="movie-image">
								<Image
									src={movie.image}
									alt={`${movie.image}.jpg`}
									className="d-block w-100 movie-banner-image"
									style={{ padding: "0" }}
								/>
							</div>
							<div className="mt-3">
								<MovieInfo movie={movie} />
							</div>
							<div className="movie-info pt-3">
								<MovieActorsList actors={movie.actors} />
							</div>
						</Col>
					</Row>
					<Row></Row>
				</Container>
			);
		}

		if (movieState.loading) {
			return <p>loading...</p>;
		}

		if (movieState.errorMessage !== "") {
			return <p>{movieState.errorMessage}</p>;
		}

		return <p>Unable to fetch data</p>;
	};

	return <>{showData()}</>;
};

export default MovieShow;
