import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

import { fetchCreditsOnActors, fetchCreditsOnMovies } from "../actions/index";

const MovieCredits = () => {
	const dispatch = useDispatch();
	const credits = useSelector((state) => state.credits);
	console.log(credits);

	let { id } = useParams();

	useEffect(() => {
		dispatch(fetchCreditsOnMovies(id));
	}, []);

	return (
		<ListGroup variant="flush">
			{credits.map((credit) => {
				<ListGroup.Item>{credit}</ListGroup.Item>;
			})}
		</ListGroup>
	);
};

export default MovieCredits;
