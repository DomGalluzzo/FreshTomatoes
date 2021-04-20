import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import _ from "lodash";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import { fetchReviewsList } from "../actions";
import {
	Button,
	Col,
	Card,
	CardColumns,
	Container,
	Row,
} from "react-bootstrap";

const ReviewsList = ({ reviews, className, style, onClick }) => {
	// const defaultProfilePic = "/images/DefaultIcon.png";
	const dispatch = useDispatch();
	const reviewsList = useSelector((state) => state.reviewsList);

	let { id } = useParams();

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		dispatch(fetchReviewsList(id));
	};

	const badRating = "/images/splash.png";

	const showData = () => {
		if (!_.isEmpty(reviewsList.reviews)) {
			return reviewsList.reviews.map((review) => {
				return (
					<Card>
						<Card.Body>
							<Card.Text>{review.comment}</Card.Text>
							<Card.Footer>{review.user.username}</Card.Footer>
						</Card.Body>
					</Card>
				);
			});
		}

		if (reviewsList.loading) {
			return <p>loading...</p>;
		}

		if (reviewsList.errorMessage !== "") {
			return <p>{reviewsList.errorMessage}</p>;
		}

		return <p>Unable to fetch data</p>;
	};

	return (
		<Container className="reviews-container">
			<CardColumns>{showData()}</CardColumns>
		</Container>
	);
};

export default ReviewsList;
