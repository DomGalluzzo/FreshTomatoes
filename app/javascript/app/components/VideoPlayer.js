import React, { useState } from "react";

import { Modal } from "react-bootstrap";
import ReactPlayer from "react-player";

const VideoPlayer = ({ movie, open, toggleModal }) => {
	const [trailerModalShow, setTrailerModalShow] = useState(false);

	const handleOpenTrailerModal = () => setTrailerModalShow(true);
	const handleCloseTrailerModal = () => setTrailerModalShow(false);

	return (
		<>
			<ReactPlayer
				url={movie.trailer}
				light={true}
				width="100%"
				height="100%"
				onClick={handleOpenTrailerModal}
			/>
			<Modal
				size="lg"
				show={trailerModalShow}
				onHide={handleCloseTrailerModal}
				className="modal-content-trailer"
				centered>
				<ReactPlayer url={movie.trailer} />
			</Modal>
		</>
	);
};

export default VideoPlayer;
