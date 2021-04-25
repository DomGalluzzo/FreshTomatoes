import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import _ from "lodash";

import { fetchWatchlists } from "../actions";
import { Row, Col, Image, Container } from "react-bootstrap";
import Title from "../components/Title";
import Movie from "../components/Movie";

const UserWatchlists = () => {
	const dispatch = useDispatch();
	const watchlists = useSelector((state) => state.watchlists.watchlists);

	let { id } = useParams();

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		dispatch(fetchWatchlists(id));
	};

	const showData = () => {
		if (!_.isEmpty(watchlists.movies)) {
			const sortedFavorites = watchlists.movies.sort((a, b) =>
				a.created_at > b.created_at ? 1 : -1
			);

			return sortedFavorites.map((favorite) => {
				return <Movie movie={favorite} />;
			});
		}
	};

	return (
		<Container fluid>
			<Title
				text={watchlists.name}
				className="popular-movies-title pl-1 my-3"
			/>

			{showData()}
		</Container>
	);
};

export default UserWatchlists;
