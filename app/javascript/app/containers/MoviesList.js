import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import _ from "lodash";

import { fetchMoviesList } from "../actions";
import Title from "../components/Title";
import { Row, Col, Container } from "react-bootstrap";
import Movie from "../components/Movie";

const MoviesList = ({ onclick }) => {
  const dispatch = useDispatch();
  const moviesList = useSelector((state) => state.moviesList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    dispatch(fetchMoviesList());
  };

  const showMovies = () => {
    if (!_.isEmpty(moviesList.movies)) {
      const sortedMovies = moviesList.movies.sort((a, b) =>
        a.title > b.title ? 1 : -1
      );

      return sortedMovies.map((movie) => {
        return (
          <Col sm={6} md={2} className="p-0 user-favorite-item-column">
            <Movie key={movie.id} movie={movie} image={movie.poster} />
          </Col>
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
    <Container className="user-favorites-container p-0" fluid>
      <Title
        className="pl-1 user-watchlist-title"
        text="Movies List"
        style={{ fontSize: "1.5em" }}
      />
      <Row className="user-favorites-row">{showMovies()}</Row>
    </Container>
  );
};

export default MoviesList;
