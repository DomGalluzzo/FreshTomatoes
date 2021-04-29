import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ movie }) => {
	return <ReactPlayer url={movie.trailer} width="360px" height="180px" />;
};

export default VideoPlayer;
