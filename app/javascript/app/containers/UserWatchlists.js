import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import _ from "lodash";

import { fetchWatchlists } from "../actions";
import Title from "../components/Title";
import { Row, Col, Image } from "react-bootstrap";

const UserWatchlists = () => {
	const dispatch = useDispatch();
	const watchlists = useSelector((state) => state.watchlists);

	let { id } = useParams();
	console.log(id);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		dispatch(fetchWatchlists(id));
	};

	const showData = () => {
		return 123;
	};

	return <div>{showData()}</div>;
};

export default UserWatchlists;
