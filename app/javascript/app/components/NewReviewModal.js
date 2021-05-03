import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { createReview } from "../actions";
import { Button, Modal, Form } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const NewReviewModal = ({ currentUser, userReview, movie }) => {
	const dispatch = useDispatch();

	const [show, setShow] = useState(false);
	const [rating, setRating] = useState(null);
	const [comment, setComment] = useState("");

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const ratingChanged = (newRating) => {
		setRating(newRating);
	};

	const handleCreateReview = () => {
		dispatch(createReview(movie.id, currentUser, comment, rating));

		setRating(null);
		setComment("");
	};

	return (
		<>
			{!_.isNull(currentUser.user) ? (
				<Button className="button-align" variant="success" onClick={handleShow}>
					Add Review
				</Button>
			) : (
				<Link to="/users/sign_in">
					<Button className="button-align" variant="warning">
						Sign in to Review
					</Button>
				</Link>
			)}
			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>{`New Review for ${movie.title}`}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group controlId="formNewReviewRating">
							<Form.Label>Rating</Form.Label>
							<ReactStars
								count={5}
								onChange={ratingChanged}
								size={24}
								emptyIcon={<i className="far fa-star"></i>}
								halfIcon={<i className="fa fa-star-half-alt"></i>}
								fullIcon={<i className="fa fa-star"></i>}
								activeColor="#ffd700"
							/>
						</Form.Group>
						<Form.Group controlId="formNewReviewComment">
							<Form.Label>Comment</Form.Label>
							<Form.Control
								as="textarea"
								rows={3}
								value={comment}
								onChange={(e) => setComment(e.target.value)}
							/>
						</Form.Group>
						<Button
							variant="primary"
							type="submit"
							onClick={handleCreateReview}>
							Submit Review
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default NewReviewModal;
