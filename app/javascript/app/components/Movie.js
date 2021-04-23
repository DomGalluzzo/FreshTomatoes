import React from "react";
import { Link } from "react-router-dom";
import { Image, Row } from "react-bootstrap";

import RatingIcon from "./RatingIcon";

const Movie = ({ movie }) => {
	return (
		<>
			<Link to={`/movies/${movie.id}`}>
				<Image src={movie.poster} style={{ height: "258px", width: "180px" }} />
				<div className="poster-footer">
					<Row className="scores-row"></Row>
					<Row className="title-row"></Row>
				</div>
			</Link>
		</>
	);
};

export default Movie;
