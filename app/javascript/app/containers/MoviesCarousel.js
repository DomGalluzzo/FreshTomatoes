import React, { useEffect } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Row, Container, Carousel } from "react-bootstrap";

import { fetchMovies } from "../actions/index";
import Movie from "../components/Movie";
import Title from "../components/Title";

const MoviesCarousel = () => {
	const dispatch = useDispatch();
	const movies = useSelector((state) => state.movies);

	useEffect(() => {
		dispatch(fetchMovies());
	}, []);

	return (
		<Container className="movies-carousel-container">
			<Col md={6}>
				<Title text={"Top Movies of All Time"} />
				<Carousel>
					{movies.map((movie) => {
						return (
							<Carousel.Item key={movie.id}>
								<Link to={`/movies/${movie.id}`}>
									<img
										src={movie.image}
										alt={`${movie.title}.jpg`}
										className="movies-carousel-image d-block w-100"
									/>
								</Link>
								<Carousel.Caption>{`${movie.title} (${movie.release_year})`}</Carousel.Caption>
							</Carousel.Item>
						);
					})}
				</Carousel>
			</Col>
		</Container>
	);
};

export default MoviesCarousel;
