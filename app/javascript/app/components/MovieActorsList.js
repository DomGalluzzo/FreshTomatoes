import React from "react";
import { Link } from "react-router-dom";

import { Container, Card, CardDeck, Image, Row } from "react-bootstrap";

import Title from "../components/Title";

const MovieActorsList = ({ actors }) => {
	const defaultProfilePic = "/images/DefaultIcon.png";

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
							<Card className="credits-card">
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

// return (
// 	<Card>
// 		<ListGroup variant="flush">
// 			{actors.map((actor) => {
// 				return (
// 					<Link
// 						key={actor.id}
// 						to={`/actors/${actor.id}`}
// 						style={{ textDecoration: "inherit", color: "inherit" }}>
// 						<ListGroup.Item>
// 							<img
// 								id="avatar-cast"
// 								src={actor.image ? actor.image : defaultProfilePic}
// 								alt={`${actor.name}.jpg`}
// 								style={{ height: "64px" }}
// 							/>
// 							<span className="ml-3">{actor.name}</span>
// 						</ListGroup.Item>
// 					</Link>
// 				);
// 			})}
// 		</ListGroup>
// 	</Card>
// );
