import React from "react";
import { Link } from "react-router-dom";

import { Button, Container } from "react-bootstrap";
import Movie from "./Movie";

// const Favorite = ({ onClick, movieTitle, link }) => {
// 	return (
// 		<ListGroup.Item>
// 			<Link to={link}>
// 				<span
// 					style={{ textDecoration: "none", color: "black" }}
// 					className="user-favorites-movie-link">
// 					{movieTitle}
// 				</span>
// 			</Link>

// 			<Button onClick={onClick}>Remove</Button>
// 		</ListGroup.Item>
// 	);
// };

const Favorite = ({ onClick, movie }) => {
	return (
		<>
			<Movie key={movie.id} movie={movie} image={movie.poster} />
			<Container className="p-0 m-0 remove-favorite-button-container" fluid>
				<Button onClick={onClick}>Remove</Button>
			</Container>
		</>
	);
};

export default Favorite;
