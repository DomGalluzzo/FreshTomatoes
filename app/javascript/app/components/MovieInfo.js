import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Table } from "react-bootstrap";

import Title from "./Title";
import { runtimeConversion } from "../../../helpers/helpers";

const MovieInfo = ({ movie }) => {
  return (
    <Container className="p-0" fluid>
      <Row className="movie-show-header">
        <Title
          text="MOVIE INFO"
          className="movie-show-title"
          id="movie-info-header"
        />
      </Row>
      <Container className="movie-info-body" fluid>
        <p>{movie.summary}</p>
        <Table className="movie-table">
          <tbody>
            <tr>
              <td className="movie-table-header-column">Director:</td>
              <td className="movie-table-data-column">
                <Link to={`/directors/${movie.director.name}`}>
                  {movie.director.name}
                </Link>
              </td>
            </tr>
            <tr>
              <td className="movie-table-header-column">Genre:</td>
              <td className="movie-table-data-column">
                <Link to={`/genres/${movie.genre.name}`}>
                  {movie.genre.name}
                </Link>
              </td>
            </tr>
            <tr>
              <td className="movie-table-header-column">Year of Release:</td>
              <td className="movie-table-data-column">{movie.release_year}</td>
            </tr>
            <tr>
              <td className="movie-table-header-column">Runtime:</td>
              <td className="movie-table-data-column">
                {runtimeConversion(movie.runtime)}
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </Container>
  );
};

export default MovieInfo;
