import React from "react";
import { Link } from "react-router-dom";

import { Card } from "react-bootstrap";

const Movie = ({ movie }) => {
	return (
		<div>
			<header>{movie.title}</header>
			<img src={movie.image} alt={movie.title} />
			<p>{movie.summary}</p>
		</div>
	);

	// return (
	// 	<Link to={`/movies/${movie.id}`} className="link movie-card">
	// 		<Card className="h-100">
	// 			<Card.Img src={movie.image} />
	// 			<Card.Body>
	// 				<Card.Title>{movie.title}</Card.Title>
	// 			</Card.Body>
	// 		</Card>
	// 	</Link>
	// );
};

export default Movie;
