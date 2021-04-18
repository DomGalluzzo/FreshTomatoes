import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import _ from "lodash";

import { fetchReviewsList } from "../actions";
import { Button, Col, Container, Image, ListGroup, Row } from "react-bootstrap";

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

	const showData = () => {
		if (!_.isEmpty(reviewsList.reviews)) {
			return reviewsList.reviews.map((review) => {
				return (
					<ListGroup.Item className="d-block review-list-item">
						<Row className="w-100">
							<Col md={6}>
								<Image
									className="review-user-avatar"
									src="/images/DefaultIcon.png"
								/>
							</Col>

							<Col md={6}>
								<span>{review.user.username}</span>
							</Col>

							<Row>
								<span>{review.rating}</span>
							</Row>

							<Row>
								<p>{review.comment}</p>
							</Row>
						</Row>
					</ListGroup.Item>
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
			<ListGroup className="reviews-list-group">{showData()}</ListGroup>
		</Container>
	);
};

export default ReviewsList;
