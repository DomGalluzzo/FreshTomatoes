import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Row, Container, Jumbotron, Image } from "react-bootstrap";

import { fetchMovie } from "../actions/index";

const MovieShow = () => {
	const dispatch = useDispatch();
	const movie = useSelector((state) => state.movies[0]);

	let { id } = useParams();

	useEffect(() => {
		dispatch(fetchMovie(id));
	}, []);

	return (
		<Container className="movie-show-container">
			<Jumbotron style={{ padding: "0" }}>
				<Image
					src={movie.image}
					style={{ maxWidth: "100%", maxHeight: "100%", padding: "0" }}
				/>
			</Jumbotron>
		</Container>
	);
};

export default MovieShow;
