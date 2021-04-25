import React, { useEffect } from "react";
import { createFavorite } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const AddFavorite = ({ movie }) => {
	const dispatch = useDispatch();
	const watchlistState = useSelector((state) => state.watchlists);

	let { id } = useParams();

	useEffect(() => {
		addToFavorites();
	}, []);

	const addToFavorites = () => {
		dispatch(createFavorite(id));
	};

	return (
		<div className="form-control form-control-check">
			<button className="btn btn-primary" onClick={() => addToFavorites(movie)}>
				Favorite
			</button>
		</div>
	);
};

export default AddFavorite;
