import React from "react";

import { averageRating } from "../../../helpers/helpers";
import { Image } from "react-bootstrap";

const RatingIcon = ({ movie, style }) => {
	const rating = averageRating(movie.reviews);
	let icon = "";

	switch (true) {
		case rating == 0:
			icon =
				"https://res.cloudinary.com/dcdspz5mv/image/upload/v1619016226/help_cgaulr.png";
			break;
		case rating <= 20:
			icon =
				"https://res.cloudinary.com/dcdspz5mv/image/upload/v1619016253/anger_d6yl8b.png";
			break;
		case rating <= 40:
			icon =
				"https://res.cloudinary.com/dcdspz5mv/image/upload/v1619016233/sad-face_qpaoqo.png";
			break;
		case rating <= 60:
			icon =
				"https://res.cloudinary.com/dcdspz5mv/image/upload/v1619016232/neutral_byxrgw.png";
			break;
		case rating <= 80:
			icon =
				"https://res.cloudinary.com/dcdspz5mv/image/upload/v1619016234/smile_cmcfvb.png";
			break;
		case rating <= 100:
			icon =
				"https://res.cloudinary.com/dcdspz5mv/image/upload/v1619016225/grinning_a91kuo.png";
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
