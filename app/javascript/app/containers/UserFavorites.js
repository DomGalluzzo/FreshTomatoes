import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import _ from "lodash";
import { Button, Container, Row, Col } from "react-bootstrap";

import { fetchFavorites, removeFavorite } from "../actions";
import Title from "../components/Title";
import Favorite from "../components/Favorite";

const UserFavorites = () => {
	const dispatch = useDispatch();
	const favoritesList = useSelector((state) => state.favorites);
	const currentUser = useSelector((state) => state.user);

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
					<Col sm={6} md={2} className="p-0 user-favorite-item-column">
						<Favorite
							key={favorite.id}
							movie={favorite.movie}
							onClick={() => dispatch(removeFavorite(currentUser.id, favorite))}
						/>
					</Col>
				);
			});
		}
		if (favoritesList.loading) {
			return <p>loading...</p>;
		}

		if (favoritesList.errorMessage !== "") {
			return <p>{favoritesList.errorMessage}</p>;
		}

		return <p>Unable to fetch data</p>;
	};

	return (
		<Container className="user-favorites-container p-0" fluid>
			<Title
				className="pl-1 user-watchlist-title"
				text={`${currentUser.username}'s Watchlist`}
				style={{ fontSize: "1.5em" }}
			/>
			<Row className="user-favorites-row">{showFavorites()}</Row>
		</Container>
	);
};

export default UserFavorites;
