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
				<Container className="movie-show-container pt-3 abc">
					<Row
						style={{
							display: "block",
							fontSize: "30px",
							fontWeight: "bold",
						}}>
						<Title text={movie.title} style={{ marginLeft: "25px" }} />
					</Row>
					<Col md={6}>
						<MovieActorsList actors={movie.actors} />
					</Col>
					<Col md={6}>
						<Jumbotron style={{ padding: "0" }}>
							<Image
								src={movie.image}
								alt={`${movie.image}.jpg`}
								className="d-block w-100"
								style={{ padding: "0" }}
							/>
						</Jumbotron>
					</Col>
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
