import React from "react";
import { Link } from "react-router-dom";

import { Button, ListGroup } from "react-bootstrap";

const Favorite = ({ onClick, movieTitle, link }) => {
	return (
		<ListGroup.Item>
			<Link to={link}>
				<span
					style={{ textDecoration: "none", color: "black" }}
					className="user-favorites-movie-link">
					{movieTitle}
				</span>
			</Link>

			<Button onClick={onClick}>Remove</Button>
		</ListGroup.Item>
	);
};

export default Favorite;
