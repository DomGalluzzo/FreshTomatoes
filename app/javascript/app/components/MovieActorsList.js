import React from "react";
import { Link } from "react-router-dom";

import { Card, ListGroup, Image } from "react-bootstrap";

import Title from "../components/Title";

const MovieActorsList = ({ actors }) => {
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
									id="avatar-cast"
									src={actor.image ? actor.image : defaultProfilePic}
									alt={`${actor.name}.jpg`}
									style={{ height: "64px" }}
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
