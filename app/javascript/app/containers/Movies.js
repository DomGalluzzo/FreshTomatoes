import React, { useEffect } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Container, Carousel } from "react-bootstrap";

import { fetchMovies } from "../actions/index";
import Movie from "../components/Movie";

const Movies = () => {
	const dispatch = useDispatch();
	const movies = useSelector((state) => state.movies);

	useEffect(() => {
		dispatch(fetchMovies());
	}, []);

	return (
		<Container className="movies-carousel-container">
			<Col md={6}>
				<Carousel>
					{movies.map((movie) => {
						return (
							<Carousel.Item>
								<img
									src={movie.image}
									alt={`${movie.title}.jpg`}
									className="d-block w-100"
								/>
								<Carousel.Caption>{`${movie.title} (${movie.release_year})`}</Carousel.Caption>
							</Carousel.Item>
						);
					})}
				</Carousel>
			</Col>
		</Container>
	);

	// return (
	// 	<Row>
	// 		{movies.map((movie) => {
	// 			return (
	// 				<Col md={4} key={movie.id}>
	// 					<Movie movie={movie} />
	// 				</Col>
	// 			);
	// 		})}
	// 	</Row>
	// );
};

export default Movies;
