import React from "react";
import { Link } from "react-router-dom";

import { Card, ListGroup, Image } from "react-bootstrap";

import Title from "../components/Title";

const MovieActorsList = ({ actors }) => {
	// Determine the avatarImage path depending on the existance of a valid
	// user id. If user id is invalid, fallback to an image based on gender
	// const avatarImage =
	// 	id !== undefined && id !== null
	// 		? `/users/${id}/avatar.jpg`
	// 		: `/${gender}.jpg`;

	const defaultProfilePic = "/images/DefaultIcon.png";

	return (
		<Card>
			<ListGroup variant="flush">
				{actors.map((actor) => {
					return (
						<Link
							key={actor.id}
							to={`/actors/${actor.id}`}
							style={{ textDecoration: "inherit", color: "inherit" }}>
							<ListGroup.Item>
								<img
									id="movie-show-poster"
									src={actor.image ? actor.image : defaultProfilePic}
									alt={`${actor.name}.jpg`}
								/>
								<span className="ml-3">{actor.name}</span>
							</ListGroup.Item>
						</Link>
					);
				})}
			</ListGroup>
		</Card>
	);
};

export default MovieActorsList;
