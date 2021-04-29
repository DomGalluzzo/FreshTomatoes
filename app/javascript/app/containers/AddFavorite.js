import React, { useEffect, useState } from "react";
import { addFavorite } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import _ from "lodash";
import { Alert } from "react-bootstrap";

const AddFavorite = ({ user, movie, userFavorites }) => {
	const dispatch = useDispatch();
	const handleAddFavorite = () => {
		if (userFavorites.some((favorite) => favorite.movie_id === movie.id)) {
			alert(`${movie.title} is already in your watchlist`);
		} else {
			dispatch(addFavorite(user.id, movie));
			alert(`${movie.title} successfully added to watchlist`);
		}
	};

	return (
		<button
			className="btn btn-success button-align"
			onClick={handleAddFavorite}>
			Add to Watchlist
		</button>
	);
};

export default AddFavorite;
