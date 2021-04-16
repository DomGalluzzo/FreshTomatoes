import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import _ from "lodash";
import { Col, Row, Container, Jumbotron, Image } from "react-bootstrap";

import { fetchMovieShow } from "../actions";

// const MovieShow = () => {
// 	const dispatch = useDispatch();
// 	const movie = useSelector((state) => state.movies[0]);
// 	console.log(movie.actors);

// 	let { id } = useParams();

// 	useEffect(() => {
// 		dispatch(fetchMovie(id));
// 	}, []);

// 	return (
// 		<Container className="movie-show-container mt-5">
// 			<Row>
// 				<Col md={6}>
// 					<h5>{movie.title}</h5>
// 				</Col>
// 				<Col md={6}>
// 					<Jumbotron style={{ padding: "0" }}>
// 						<Image
// 							src={movie.image}
// 							style={{ maxWidth: "100%", maxHeight: "100%", padding: "0" }}
// 						/>
// 					</Jumbotron>
// 				</Col>
// 			</Row>
// 		</Container>
// 	);
// };

// export default MovieShow;

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
						<h5>{movie.title}</h5>
					</Col>
					<Col md={6}>
						<Jumbotron style={{ padding: "0" }}>
							<Image
								src={movie.image}
								style={{ maxWidth: "100%", maxHeight: "100%", padding: "0" }}
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
