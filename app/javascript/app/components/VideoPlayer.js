import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

const VideoPlayer = ({ movie }) => {
	return <ReactPlayer url={movie.trailer} width="100%" height="100%" />;
};

export default VideoPlayer;
