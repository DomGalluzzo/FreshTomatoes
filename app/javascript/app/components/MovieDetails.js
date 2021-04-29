import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Col, Row, Image } from "react-bootstrap";

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
			<Row className="movie-details-row">
				<Col sm={2} md={3} className="p-0">
					<Image src={movie.poster} className="movie-poster" />
				</Col>
				<Col sm={10} md={9} className="movie-info-column">
					<h1 className="mt-4 movie-info-column-movie-title">{movie.title}</h1>

					<h6 className="mt-3 movie-info-column-movie-info">
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
