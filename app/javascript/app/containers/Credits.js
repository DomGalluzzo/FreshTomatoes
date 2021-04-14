import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { fetchCredits } from "../actions/index";

const Credits = () => {
	const dispatch = useDispatch();
	const credits = useSelector((state) => state.credits);

	let { movieId } = useParams();

	useEffect(() => {
		dispatch(fetchCredits(movieId));
	}, []);

	return (
		<>
			{console.log("credits")}
			{console.log(credits)}
		</>
	);
};

export default Credits;
