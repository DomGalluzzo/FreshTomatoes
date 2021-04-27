import React, { useEffect, useState } from "react";
import { addToWatchlist, createFavorite } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import _ from "lodash";

const AddFavorite = ({ movie, favoritesList }) => {
	const handleAddFavorite = () => {
		if (!_.isEmpty(favoritesList)) {
			if (favoritesList.some((favorite) => favorite.movie_id === movie.id)) {
				alert("Movie already in there");
			} else {
				alert("Movie NOT in favs");
			}
		}
	};

	return <button onClick={handleAddFavorite}>Add</button>;
};

export default AddFavorite;
