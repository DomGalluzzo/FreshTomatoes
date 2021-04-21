import React from "react";
import { Link } from "react-router-dom";

import { Container, Card, CardDeck, Image, Row } from "react-bootstrap";

import Title from "../components/Title";

const MovieActorsList = ({ actors }) => {
	const defaultProfilePic =
		"https://res.cloudinary.com/dcdspz5mv/image/upload/v1619018185/default_icon_yflbxj.png";

	return (
		<Container className="p-0" fluid>
			<Row className="movie-show-header">
				<Title
					text="CAST & CREW"
					className="movie-show-title"
					id="movie-info-header"
				/>
			</Row>
			<Container className="movie-info-body" fluid>
				<CardDeck>
					{actors.map((actor) => {
						return (
							<Card key={actor.id} className="credits-card">
								<Link
									to={`/actors/${actor.id}`}
									key={actor.id}
									style={{
										textDecoration: "inherit",
										color: "inherit",
									}}>
									<Card.Img
										variant="top"
										src={actor.image ? actor.image : defaultProfilePic}
										alt={`${actor.name}.jpg`}
										style={{ height: "110px", width: "110px" }}
									/>
								</Link>
								<Card.Body className="credits-card-body">
									<Link
										to={`/actors/${actor.id}`}
										key={actor.id}
										style={{
											textDecoration: "inherit",
											color: "inherit",
										}}>
										<Card.Title className="credits-name">
											{actor.name}
										</Card.Title>
									</Link>
									<Card.Text className="credits-character">
										{actor.character}
									</Card.Text>
								</Card.Body>
							</Card>
						);
					})}
				</CardDeck>
			</Container>
		</Container>
	);
};

export default MovieActorsList;
