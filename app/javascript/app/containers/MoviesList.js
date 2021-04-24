import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";

import { fetchMoviesList } from "../actions";
import Title from "../components/Title";
import { Row, Col, Image } from "react-bootstrap";

const MoviesList = () => {
	const dispatch = useDispatch();
	const moviesList = useSelector((state) => state.moviesList);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		dispatch(fetchMoviesList());
	};

	const showData = () => {
		if (!_.isEmpty(moviesList.movies)) {
			return moviesList.movies.map((movie) => {
				return (
					<Link
						to={`/movies/${movie.id}`}
						key={movie.id}
						className="other-movies-link">
						<Row className="pt-2 movie-list-item" id="movies-list-row">
							<Col sm={1}>
								<Image
									src="https://res.cloudinary.com/dcdspz5mv/image/upload/v1619016243/VideoPlayerIcon_rdnefv.png"
									style={{ height: "16px", width: "16px" }}
									className="mb-1"
								/>
							</Col>
							<Col sm={11}>{movie.title}</Col>
						</Row>
					</Link>
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
		<div className="movies-list-container">
			<Row className="other-movies-header">
				<Title text="Other Movies" className="other-movies-title ml-4" />
			</Row>
			<div className="movies-list-group">{showData()}</div>
		</div>
	);
};

export default MoviesList;
