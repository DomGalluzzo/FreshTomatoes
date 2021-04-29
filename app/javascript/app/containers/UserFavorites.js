import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import _ from "lodash";
import { Button, Container, ListGroup } from "react-bootstrap";

import { fetchFavorites, removeFavorite } from "../actions";
import Title from "../components/Title";

const UserFavorites = () => {
	const dispatch = useDispatch();
	const favoritesList = useSelector((state) => state.favorites);
	const currentUser = useSelector((state) => state.user);
	const [favorites, setFavorites] = useState(favoritesList);

	let { id } = useParams();

	useEffect(() => {
		getFavorites();
	}, []);

	const getFavorites = () => {
		dispatch(fetchFavorites(id));
	};

	const showFavorites = () => {
		if (!_.isEmpty(favoritesList.favorites)) {
			return favoritesList.favorites.map((favorite) => {
				return (
					<ListGroup.Item>
						<Link to={`/movies/${favorite.movie_id}`}>
							<span
								style={{ textDecoration: "none", color: "black" }}
								className="user-favorites-movie-link">
								{favorite.movie.title}
							</span>
						</Link>
						<Button onClick={() => dispatch(removeFavorite(id, favorite))}>
							Remove
						</Button>
					</ListGroup.Item>
				);
			});
		}
	};

	return (
		<Container className="user-favorites-container p-0" fluid>
			<Title
				className="pl-4"
				text={`${currentUser.username}'s Watchlist`}
				style={{ fontSize: "1.5em" }}
			/>
			<ListGroup>{showFavorites()}</ListGroup>
		</Container>
	);
};

export default UserFavorites;
