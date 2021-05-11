import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import _ from "lodash";
import { Container, Row, Col } from "react-bootstrap";
import { toastr } from "react-redux-toastr";

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

	const handleRemoveFavorite = (favorite) => {
		if (parseInt(id, 10) === currentUser.id) {
			dispatch(removeFavorite(currentUser.id, favorite));
		} else {
			toastr.error("You don't have permission to do that.");
		}
	};

	const showFavorites = () => {
		if (!_.isEmpty(favoritesList.favorites)) {
			return favoritesList.favorites.map((favorite) => {
				return (
					<Col sm={6} md={2} className="p-0 user-favorite-item-column">
						<Favorite
							key={favorite.id}
							movie={favorite.movie}
							onClick={() => handleRemoveFavorite(favorite)}
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

		return <p className="pl-3">No movies in watchlist</p>;
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
