import React from "react";
import { Link } from "react-router-dom";

import { Card, ListGroup, Image } from "react-bootstrap";

import Title from "../components/Title";

const MovieActorsList = ({ actors }) => {
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
								<Image
									id="movie-show-poster"
									src={actor.image}
									alt={`${actor.name}.jpg`}
								/>
								<span className="pl-3">{actor.name}</span>
							</ListGroup.Item>
						</Link>
					);
				})}
			</ListGroup>
		</Card>
	);
};

export default MovieActorsList;
