import React from "react";

import { averageRating } from "../../../helpers/helpers";
import { Image } from "react-bootstrap";

const RatingIcon = ({ movie, style }) => {
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
			<Image src={icon} style={style} />
			<div className="ml-3">
				<h4 className="rating-percentage p-0 mt-1">{rating}%</h4>
				<p className="rating-link-reviews p-0 mt-1">View All</p>
			</div>
		</>
	);
};

export default RatingIcon;
