import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";

import { Col, Row, Container, Carousel, Image } from "react-bootstrap";

import { fetchMoviesList } from "../actions/index";
import Title from "../components/Title";
import MoviesCarousel from "./MoviesCarousel";

const HomePage = () => {
	const dispatch = useDispatch();
	const moviesList = useSelector((state) => state.moviesList);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		dispatch(fetchMoviesList());
	};

	return (
		<>
			<Container className="movies-carousel-container px-0">
				<MoviesCarousel />
			</Container>
		</>
	);
};

export default HomePage;
