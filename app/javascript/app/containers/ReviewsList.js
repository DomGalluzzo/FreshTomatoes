import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import _ from "lodash";
import ReactStars from "react-rating-stars-component";

import { fetchReviewsList } from "../actions";
import {
	Button,
	Col,
	Card,
	CardColumns,
	Container,
	Row,
	Image,
} from "react-bootstrap";
import Title from "../components/Title";

const ReviewsList = ({ reviews, movie, className, style, onClick }) => {
	const defaultAvatar = "/images/BlankAvatar.png";
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
					<Card key={review.id}>
						<Card.Header>
							<ReactStars
								count={5}
								value={review.rating}
								edit={false}
								size={24}
								isHalf={true}
								emptyIcon={<i className="far fa-star"></i>}
								halfIcon={<i className="fa fa-star-half-alt"></i>}
								fullIcon={<i className="fa fa-star"></i>}
								activeColor="#ffd700"
							/>
						</Card.Header>
						<Card.Body>
							<Card.Text>{review.comment}</Card.Text>
						</Card.Body>
						<Card.Footer className="d-flex align-items-end pl-1 pb-1">
							<Image
								src={review.user.photo ? review.user.photo : defaultAvatar}
							/>

							<span className="ml-3">{review.user.username}</span>
						</Card.Footer>
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

	return <CardColumns>{showData()}</CardColumns>;
};

export default ReviewsList;
