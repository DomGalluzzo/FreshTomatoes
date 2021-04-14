// import React, { useEffect } from "react";
// import Axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { Col, Row, Container, Carousel } from "react-bootstrap";

// import { fetchMovies } from "../actions/index";
// import Movie from "../components/Movie";

// const Movies = () => {
// 	const dispatch = useDispatch();
// 	const movies = useSelector((state) => state.movies);

// 	useEffect(() => {
// 		dispatch(fetchMovies());
// 	}, []);

// 	return (
// 		<>
// 			{movies.map((movie) => {
// 				return <Movie movie={movie} />;
// 			})}
// 		</>
// 	);
// };

// export default Movies;
