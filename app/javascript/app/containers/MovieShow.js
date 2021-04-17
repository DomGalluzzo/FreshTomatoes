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
				<>
					<Col md={6}>
						<Title text={movie.title} />
						<MovieActorsList actors={movie.actors} />
					</Col>
					<Col md={6}>
						<Jumbotron style={{ padding: "0" }}>
							<Image
								src={movie.poster}
								alt={`${movie.poster}.jpg`}
								className="d-block w-100"
								style={{ padding: "0" }}
							/>
						</Jumbotron>
					</Col>
				</>
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

	return (
		<Container className="movie-show-container mt-5">
			<Row>{showData()}</Row>
		</Container>
	);
};

export default MovieShow;
