// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import _ from "lodash";

// import { fetchGenres } from "../actions";
// import Title from "../components/Title";
// import { Row, Col, Image } from "react-bootstrap";

// const GenresList = ({ genre }) => {
// 	const dispatch = useDispatch();
// 	const genresList = useSelector((state) => state.genres);

// 	useEffect(() => {
// 		fetchData();
// 	}, []);

// 	const fetchData = () => {
// 		dispatch(fetchGenres());
// 	};

// 	const showMovies = (genre) => {
// 		if (!_.isEmpty(genresList.genres)) {
// 			return genresList.genres.map((genre) => {

// 			});
// 		}

// 		if (genresList.loading) {
// 			return <p>loading...</p>;
// 		}

// 		if (genresList.errorMessage === "") {
// 			return <p>{genresList.errorMessage}</p>;
// 		}

// 		return <p>Unable to fetch data</p>;
// 	};

// 	return <>{showMovies()}</>;
// };

// export default GenresList;
