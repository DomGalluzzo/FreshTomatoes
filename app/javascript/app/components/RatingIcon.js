import React from "react";

import { averageRating } from "../../../helpers/helpers";
import { Image } from "react-bootstrap";

const RatingIcon = ({ movie }) => {
	const rating = averageRating(movie.reviews);
	let icon = "";

	switch (true) {
		case rating == 0:
			icon = "/images/help.png";
			break;
		case rating <= 20:
			icon = "/images/anger.png";
			break;
		case rating <= 40:
			icon = "/images/sad-face.png";
			break;
		case rating <= 60:
			icon = "/images/neutral.png";
			break;
		case rating <= 80:
			icon = "/images/smile.png";
			break;
		case rating <= 100:
			icon = "/images/grinning.png";
			break;
	}

	return (
		<>
			<Image src={icon} style={{ height: "48px", width: "48px" }} />
			<h4 className="ml-3 pb-1">{rating}%</h4>
		</>
	);
};

export default RatingIcon;
