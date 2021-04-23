import React from "react";
import { Link } from "react-router-dom";
import { Image, Row } from "react-bootstrap";

import RatingIcon from "./RatingIcon";

const Movie = ({ movie }) => {
	return (
		<>
			<Link to={`/movies/${movie.id}`} style={{ textDecoration: "none" }}>
				<Image src={movie.poster} style={{ height: "258px", width: "180px" }} />
				<div className="poster-footer">
					<Row className="m-0 mt-2">
						<RatingIcon
							movie={movie}
							style={{ height: "24px", width: "24px", marginLeft: "0.25rem" }}
						/>
					</Row>

					{movie.title}
				</div>
			</Link>
		</>
	);
};

export default Movie;
