import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";

import { fetchGenres, fetchMoviesList } from "../actions";
import { Row, Col, Image, Container } from "react-bootstrap";
import Title from "../components/Title";
import Movie from "../components/Movie";

const GenresList = ({ genre }) => {
  const dispatch = useDispatch();
  const genresList = useSelector((state) => state.genres);
  const moviesList = useSelector((state) => state.moviesList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    dispatch(fetchGenres());
    dispatch(fetchMoviesList());
  };

  const moviesInGenre = (selectedGenre) => {
    if (!_.isEmpty(moviesList.movies)) {
      return moviesList.movies.map((movie) => {
        if (!_.isUndefined(movie.genre) && movie.genre.name === selectedGenre) {
          return (
            <Col sm={6} md={2} className="p-0 user-favorite-item-column">
              <Movie key={movie.id} movie={movie} image={movie.poster} />
            </Col>
          );
        }
      });
    }
  };

  return (
    <Container className="genres-list-container" fluid>
      <Container className="user-favorites-container p-0" fluid>
        <Title text="Action" className="genre-title" />
        <Row className="user-favorites-row">{moviesInGenre("Action")}</Row>
      </Container>

      <Container className="user-favorites-container p-0" fluid>
        <Title text="Animation" className="genre-title" />
        <Row className="user-favorites-row">{moviesInGenre("Animation")}</Row>
      </Container>

      <Container className="user-favorites-container p-0" fluid>
        <Title text="Comedy" className="genre-title" />
        <Row className="user-favorites-row">{moviesInGenre("Comedy")}</Row>
      </Container>

      <Container className="user-favorites-container p-0" fluid>
        <Title text="Drama" className="genre-title" />
        <Row className="user-favorites-row">{moviesInGenre("Drama")}</Row>
      </Container>

      <Container className="user-favorites-container p-0" fluid>
        <Title text="Horror" className="genre-title" />
        <Row className="user-favorites-row">{moviesInGenre("Horror")}</Row>
      </Container>

      <Container className="user-favorites-container p-0" fluid>
        <Title text="Romance" className="genre-title" />
        <Row className="user-favorites-row">{moviesInGenre("Romance")}</Row>
      </Container>

      <Container className="user-favorites-container p-0" fluid>
        <Title text="Sci-Fi" className="genre-title" />
        <Row className="user-favorites-row">{moviesInGenre("Sci-Fi")}</Row>
      </Container>
    </Container>
  );
};

export default GenresList;
