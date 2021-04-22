import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";

import {
	Col,
	Row,
	Container,
	Image,
	Carousel,
	Card,
	CardDeck,
} from "react-bootstrap";

import { fetchMoviesList } from "../actions/index";
import Title from "../components/Title";
import PosterCarousel from "../components/PosterCarousel";
import Movie from "../components/Movie";
import RatingIcon from "../components/RatingIcon";

const HomePage = () => {
	const dispatch = useDispatch();
	const moviesList = useSelector((state) => state.moviesList);

	React.useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		dispatch(fetchMoviesList());
	};

	const classicMovies = () => {
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

	const popularMovies = () => {
		if (!_.isEmpty(moviesList.movies)) {
			return moviesList.movies.map((movie) => {
				return (
					<>
						<Movie movie={movie} key={movie.id} />
					</>
				);
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
		<>
			<div className="carousel-title-div">
				<span className="px-2">Trending on FT:</span>
				<div className="carousel-title">
					<Title
						text="Critics are STILL raving about these top classics"
						className="carousel-title"
					/>
				</div>
			</div>
			<Row noGutters={true}>
				<Col md={6} className="px-0">
					<Carousel>{classicMovies()}</Carousel>
				</Col>
				<Col md={3} className="px-0">
					<a
						href="https://www.oscars.org/"
						target="_blank"
						style={{ textDecoration: "none" }}>
						<Image
							src="https://res.cloudinary.com/dcdspz5mv/image/upload/v1619033134/oscars_mrit9x.jpg"
							className="home-image"
							style={{ height: "100%", width: "100%" }}
						/>
						<div className="image-overlay-text">
							<p className="image-overlay-header px-3 py-2">
								<span>Watch the Oscars!</span> <br />
								Tune in April 25th
							</p>
						</div>
					</a>
				</Col>
				<Col md={3} className="px-0">
					<Link to="/movies" style={{ textDecoration: "none" }}>
						<Image
							src="https://res.cloudinary.com/dcdspz5mv/image/upload/v1619033134/vote_mve6ah.jpg"
							className="home-image"
							style={{
								height: "100%",
								width: "100%",
							}}
						/>
						<div className="image-overlay-text">
							<p className="image-overlay-header px-3 py-2">
								<span>Vote for your favorite movies!</span> <br />
								Ballots are due at the end of June
							</p>
						</div>
					</Link>
				</Col>
			</Row>
			<Container className="px-3 home-page-body-content" fluid>
				<Container className="mt-3 p-0">
					<Title
						text="Popular & Trending Movies"
						className="popular-movies-title pl-1 my-3"
					/>

					<PosterCarousel items={popularMovies()} />
				</Container>
			</Container>
		</>
	);
};

export default HomePage;