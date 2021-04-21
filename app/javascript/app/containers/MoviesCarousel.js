import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";

import { Col, Row, Container, Carousel } from "react-bootstrap";

import { fetchMoviesList } from "../actions/index";
import Title from "../components/Title";

const MoviesCarousel = () => {
	const dispatch = useDispatch();
	const moviesList = useSelector((state) => state.moviesList);
	React.useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		dispatch(fetchMoviesList());
	};

	const showData = () => {
		if (!_.isEmpty(moviesList.movies)) {
			return moviesList.movies.map((movie) => {
				if (movie.release_year < 2000) {
					return (
						<Carousel.Item key={movie.id} className="img-fluid">
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
				}
			});
		}

		if (moviesList.loading) {
			return <p>loading...</p>;
		}

		if (moviesList.errorMessage !== "") {
			return <p>{moviesList.errorMessage}</p>;
		}

		return <p>Unable to fetch data</p>;
	};

	return (
		<Container className="movies-carousel-container px-0">
			<Col md={6} className="px-0">
				<div className="carousel-title-div">
					<span className="px-2">Trending on FT:</span>
					<Title
						text="Critics are STILL raving about these top classics"
						className="carousel-title"
					/>
				</div>
				<Carousel>{showData()}</Carousel>
			</Col>
		</Container>
	);
};

export default MoviesCarousel;
