import React from "react";

import { Card } from "react-bootstrap";

const Movie = ({ movie }) => {
	return (
		<Card className="h-100">
			<Card.Img src={movie.image} />
			<Card.Body>
				<Card.Title>{movie.title}</Card.Title>
				<Card.Text>{movie.summary}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Movie;
