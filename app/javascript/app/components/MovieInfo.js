import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Col, Row } from "react-bootstrap";

import Title from "./Title";
import MoviePoster from "./MoviePoster";

const MovieInfo = ({ movie }) => {
	return (
		<Jumbotron style={{ backgroundColor: "#ffffff" }} fluid>
			<Row>
				<Col md={4}>
					<MoviePoster movie={movie} className="movie-poster" />
				</Col>
				<Col md={8} className="movie-info-column">
					<h1 style={{ fontSize: "20px", fontWeight: "bold" }}>
						{movie.title}
					</h1>

					<h6>
						{movie.release_year}, {movie.runtime}
					</h6>
				</Col>
			</Row>
		</Jumbotron>
	);
};

export default MovieInfo;
