import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import _ from "lodash";
import ReactStars from "react-rating-stars-component";

import { fetchMovieReviews } from "../actions";
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
	const defaultAvatar =
		"https://res.cloudinary.com/dcdspz5mv/image/upload/v1619018185/default_icon_yflbxj.png";
	const dispatch = useDispatch();
	const movieReviews = useSelector((state) => state.movieReviews);

	let { id } = useParams();

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		dispatch(fetchMovieReviews(id));
	};

	const userImageCheck = (review) => {
		if (_.isNull(review.user.image)) {
			return defaultAvatar;
		} else {
			return review.user.image;
		}
	};

	const showData = () => {
		if (!_.isEmpty(movieReviews.reviews)) {
			return movieReviews.reviews.map((review) => {
				return (
					<Card key={review.id} className="review-card">
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
						<Card.Footer className="d-flex align-items-end pl-0 pb-1 pt-0">
							<Image
								src={userImageCheck(review)}
								style={{ height: "50px", width: "50px" }}
							/>

							<p className="ml-3" style={{ wordBreak: "break-word" }}>
								{review.user.username}
							</p>
						</Card.Footer>
					</Card>
				);
			});
		}

		if (movieReviews.loading) {
			return <p>loading...</p>;
		}

		if (movieReviews.errorMessage !== "") {
			return <p>{movieReviews.errorMessage}</p>;
		}

		return <p>Unable to fetch data</p>;
	};

	return <CardColumns>{showData()}</CardColumns>;
};

export default ReviewsList;
