import React, { useEffect, useState } from "react";
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

import { fetchMovieShow, fetchUser } from "../actions";
import Title from "../components/Title";
import MovieActorsList from "../components/MovieActorsList";
import MovieDetails from "../components/MovieDetails";
import MovieInfo from "../components/MovieInfo";
import ReviewsList from "./ReviewsList";

const MovieShow = () => {
	const dispatch = useDispatch();
	const movieState = useSelector((state) => state.movieShow);

	let { id } = useParams();

	useEffect(() => {
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
					<Row className="mt-3">
						<Col sm={0} md={4}>
							<button className="btn btn-primary">Add</button>
						</Col>

						<Col sm={12} md={8} className="pl-4">
							<div className="movie-image">
								<Image
									src={movie.image}
									alt={`${movie.image}.jpg`}
									className="d-block w-100 movie-banner-image"
									style={{ padding: "0" }}
								/>
							</div>
							<div className="mt-3">
								<MovieDetails movie={movie} />
							</div>
							<div>
								<MovieInfo movie={movie} />
							</div>
							<div className="movie-info mt-3">
								<MovieActorsList actors={movie.actors} />
							</div>
							<div className="reviews mt-3">
								<Container className="p-0 reviews-container" fluid>
									<Row className="movie-show-header">
										<Title
											text={`REVIEWS FOR ${movie.title}`}
											className="movie-show-title"
											id="movie-info-header"
										/>
									</Row>
									<Container className="reviews-list-body">
										<ReviewsList reviews={movie.reviews} />
									</Container>
								</Container>
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
