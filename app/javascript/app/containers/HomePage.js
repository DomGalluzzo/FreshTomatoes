import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";

import { Col, Row, Container, Image, Carousel } from "react-bootstrap";

import { fetchMoviesList, fetchUser } from "../actions/index";
import Title from "../components/Title";
import PosterCarousel from "../components/PosterCarousel";
import Movie from "../components/Movie";

import Footer from "../components/Footer";

const HomePage = () => {
  const dispatch = useDispatch();
  const moviesList = useSelector((state) => state.moviesList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    dispatch(fetchMoviesList());
    dispatch(fetchUser());
  };

  // * Returns movies that have a release year before 2000
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

  // * Returns all movies
  const popularMovies = () => {
    if (!_.isEmpty(moviesList.movies)) {
      return moviesList.movies.map((movie) => {
        return (
          <>
            <Movie
              movie={movie}
              key={movie.id}
              image={movie.image}
              rating={movie.reviews}
            />
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

  // * Returns movies in specified genre
  const moviesInGenre = (selectedGenre) => {
    if (!_.isEmpty(moviesList.movies)) {
      return moviesList.movies.map((movie) => {
        if (!_.isUndefined(movie.genre) && movie.genre.name === selectedGenre) {
          return (
            <li className="top-genre-movies-item">
              <Movie movie={movie} key={movie.id} rating={movie.reviews} />
            </li>
          );
        }
      });
    }
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
        <Container className="mt-3 p-0 popular-trending-movies-container">
          <Title
            text="Popular & Trending Movies"
            className="popular-movies-title pl-1 my-3"
          />

          <PosterCarousel items={popularMovies()} />
        </Container>

        <Container className="mt-3 p-0 top-movies-container">
          <Row className="m-0 p-0">
            <Col className="p-0" sm={6} md={4}>
              <Title
                text="Top Action Movies"
                className="popular-movies-title pl-1 my-3"
              />
              {moviesInGenre("Action")}
            </Col>
            <Col className="second-top-movies-column" sm={6} md={4}>
              <Title
                text="Top Drama Movies"
                className="popular-movies-title pl-1 my-3"
              />
              {moviesInGenre("Drama")}
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="container-break py-5" fluid></Container>
      <Footer justify="center" />
    </>
  );
};

export default HomePage;
