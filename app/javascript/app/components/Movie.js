import React from "react";
import { Link } from "react-router-dom";
import { Image, Row } from "react-bootstrap";

import RatingIcon from "./RatingIcon";

const Movie = ({ movie, image, rating, className }) => {
	return (
		<>
			<Link
				to={`/movies/${movie.id}`}
				style={{ textDecoration: "none", color: "black" }}>
				{image && (
					<Image
						src={movie.poster}
						style={{ height: "258px", width: "180px", opacity: "0.9" }}
					/>
				)}

				<div className={`poster-footer ml-1 ${className}`}>
					{rating && (
						<Row className="m-0 mt-2">
							<RatingIcon
								movie={movie}
								style={{ height: "24px", width: "24px" }}
							/>
						</Row>
					)}

					<p style={{ fontSize: "0.875rem" }}>{movie.title}</p>
				</div>
			</Link>
		</>
	);
};

export default Movie;
