import React, { useEffect, useState } from "react";
import { addToWatchlist, createFavorite } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const AddFavorite = ({ handleFavoritesClick }) => {
	const dispatch = useDispatch();

	let { id } = useParams();

	return (
		<div className="">
			<button
				className="btn btn-primary"
				onClick={() => dispatch(addToWatchlist(2, id))}>
				Favorite
			</button>
		</div>
	);
};

export default AddFavorite;
