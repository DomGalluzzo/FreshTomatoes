import React from "react";

import { Image } from "react-bootstrap";

const MoviePoster = ({ movie, style, className }) => {
	return <Image src={movie.poster} className={className} style={style} />;
};

export default MoviePoster;
