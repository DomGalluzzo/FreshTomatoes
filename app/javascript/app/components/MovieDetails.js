import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Col, Row } from "react-bootstrap";

import MoviePoster from "./MoviePoster";
import RatingIcon from "./RatingIcon";
import { runtimeConversion } from "../../../helpers/helpers";

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
					<h1 className="mt-4" style={{ fontSize: "25px", fontWeight: "bold" }}>
						{movie.title}
					</h1>

					<h6 className="mt-3">
						{movie.release_year}, {movie.genre.name},{" "}
						{runtimeConversion(movie.runtime)}
					</h6>
					<div className="movie-details-ratings mt-3">
						<RatingIcon
							movie={movie}
							style={{ height: "48px", width: "48px" }}
						/>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default MovieDetails;
