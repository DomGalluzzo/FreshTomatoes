import React from "react";

import { Button, Container } from "react-bootstrap";

import Movie from "./Movie";

const Favorite = ({ onClick, movie }) => {
  return (
    <>
      <Movie key={movie.id} movie={movie} image={movie.poster} />
      <Container className="p-0 m-0 remove-favorite-button-container" fluid>
        <Button
          className="btn btn-danger btn-block favorite-remove-button"
          onClick={onClick}>
          <span>Remove</span>
        </Button>
      </Container>
    </>
  );
};

export default Favorite;
