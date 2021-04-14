import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { fetchCredits } from "../actions/index";

const Credits = () => {
	const dispatch = useDispatch();
	const credit = useSelector((state) => state.credits);

	let { movieId } = useParams();
	console.log(movieId);

	useEffect(() => {
		dispatch(fetchCredits(movieId));
	}, []);

	return <h1>stuff</h1>;
};

export default Credits;
