import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";

import { updateReview } from "../actions";
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

	const userReviewId = userReview.id;
	const handleUpdateReview = () => {
		dispatch(
			updateReview(movie.id, currentUser, userReviewId, comment, rating)
		);

		setRating(null);
		setComment("");
	};

	return (
		<>
			{userReview && (
				<Button className="button-align" variant="info" onClick={handleShow}>
					Edit Review
				</Button>
			)}
			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>{`Edit ${currentUser.username}'s Review for ${movie.title}`}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form validated={true}>
						<Form.Group controlId="formNewReviewRating">
							<Form.Label>Rating</Form.Label>
							<ReactStars
								count={5}
								onChange={ratingChanged}
								size={24}
								value={userReview.rating}
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
								defaultValue={userReview.comment}
								onChange={(e) => setComment(e.target.value)}
							/>
						</Form.Group>
						<Button
							variant="primary"
							type="submit"
							onClick={handleUpdateReview}>
							Submit Review
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default NewReviewModal;
