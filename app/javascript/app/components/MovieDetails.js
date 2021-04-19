import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Col, Row } from "react-bootstrap";

import Title from "./Title";
import MoviePoster from "./MoviePoster";

const MovieDetails = ({ movie }) => {
	return (
		<Container
			style={{
				backgroundColor: "#ffffff",
				marginBottom: "60px",
				marginTop: "30px",
			}}
			fluid>
			<Row>
				<Col sm={4} lg={3} className="p-0">
					<MoviePoster movie={movie} className="movie-poster" />
				</Col>
				<Col sm={8} lg={9} className="movie-info-column">
					<h1 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5%" }}>
						{movie.title}
					</h1>

					<h6>
						{movie.release_year}, {movie.genre.name}, {movie.runtime}
					</h6>
				</Col>
			</Row>
		</Container>
	);
};

export default MovieDetails;
