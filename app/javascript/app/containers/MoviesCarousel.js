import React, { useEffect } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Row, Container, Carousel } from "react-bootstrap";
import _ from "lodash";

import { fetchMoviesList } from "../actions/index";
import Movie from "../components/Movie";
import Title from "../components/Title";

const MoviesCarousel = () => {
	const dispatch = useDispatch();
	const moviesList = useSelector((state) => state.moviesList);
	React.useEffect(() => {
		fetchData();
	}, []);

	// useEffect(() => {
	// 	fetchData();
	// }, [movies]);

	const fetchData = () => {
		dispatch(fetchMoviesList());
	};

	const showData = () => {
		if (!_.isEmpty(moviesList.movies)) {
			return moviesList.movies.map((movie) => {
				return (
					<Carousel.Item className="img-fluid" key={movie.id}>
						<Link to={`/movies/${movie.id}`}>
							<img
								id="carousel-movie-image"
								src={movie.image}
								alt={`${movie.title}.jpg`}
								className="d-block movies-carousel-image w-100"
								style={{ opacity: "0.8" }}
							/>
							<Carousel.Caption
								style={{
									backgroundColor: "rgba(10,10,10, 0.5)",
									marginBottom: "5px",
									marginTop: "25px",
								}}>
								{`${movie.title} (${movie.release_year})`}
							</Carousel.Caption>
						</Link>
					</Carousel.Item>
				);
			});
		}

		if (moviesList.loading) {
			return <p>loading...</p>;
		}

		if (moviesList.errorMessage !== "") {
			return <p>{moviesList.errorMessage}</p>;
		}

		return <p>unable to fetch data</p>;
	};

	return (
		<Container className="movies-carousel-container">
			<Col md={6}>
				<Title text={"Top Movies of All Time"} />
				<Carousel>{showData()}</Carousel>
			</Col>
		</Container>
	);
	// <Container className="movies-carousel-container">
	// 	<Col md={6}>
	// 		<Title text={"Top Movies of All Time"} />
	// 		<Carousel>
	// 			{movies.map((movie) => {
	// 				return (
	// 					<Carousel.Item className="img-fluid" key={movie.id}>
	// 						<Link to={`/movies/${movie.id}`}>
	// 							<img
	// 								id="carousel-movie-image"
	// 								src={movie.image}
	// 								alt={`${movie.title}.jpg`}
	// 								className="d-block movies-carousel-image w-100"
	// 								style={{ opacity: "0.8" }}
	// 							/>
	// 							<Carousel.Caption
	// 								style={{
	// 									backgroundColor: "rgba(10,10,10, 0.5)",
	// 									marginBottom: "5px",
	// 									marginTop: "25px",
	// 								}}>
	// 								{`${movie.title} (${movie.release_year})`}
	// 							</Carousel.Caption>
	// 						</Link>
	// 					</Carousel.Item>
	// 				);
	// 			})}
	// 		</Carousel>
	// 	</Col>
	// </Container>
};

export default MoviesCarousel;
