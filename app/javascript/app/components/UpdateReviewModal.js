import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Button, Container, Modal, Form } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { toastr } from "react-redux-toastr";

import { updateReview, deleteReview } from "../actions";

const UpdateReviewModal = ({ currentUser, userReview, movie }) => {
	const dispatch = useDispatch();

	const [show, setShow] = useState(false);
	const [rating, setRating] = useState(null);
	const [comment, setComment] = useState("");

	const userReviewId = userReview.id;
	const movieId = movie.id;

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const ratingChanged = (newRating) => {
		setRating(newRating);
	};

	const handleUpdateReview = () => {
		dispatch(updateReview(movieId, currentUser, userReviewId, comment, rating));

		setRating(null);
		setComment("");
	};

	const handleDeleteReview = () => {
		toastr.confirm(
			"Are you sure you to delete your review?",
			toastrConfirmOptions
		);
	};

	// ! Toastr

	const toastrConfirmOptions = {
		// * Reversed to switch button placement
		okText: "Cancel",
		cancelText: "DELETE",

		onCancel: () => dispatch(deleteReview(movieId, userReviewId)),
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
				keyboard={false}
				className="modal-content-review">
				<Modal.Header closeButton>
					<Modal.Title className="modal-title-review">{`Edit ${currentUser.username}'s Review for ${movie.title}`}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form validated={true}>
						<Form.Group controlId="formNewReviewRating">
							<Form.Label className="modal-title-review">Rating</Form.Label>
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
							<Form.Label className="modal-title-review">Comment</Form.Label>
							<Form.Control
								as="textarea"
								rows={3}
								defaultValue={userReview.comment}
								onChange={(e) => setComment(e.target.value)}
							/>
						</Form.Group>
						<Container className="modal-form-button-container">
							<Button variant="danger" onClick={handleDeleteReview}>
								DELETE
							</Button>
							<Button
								variant="primary"
								type="submit"
								onClick={handleUpdateReview}>
								Submit Review
							</Button>
						</Container>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default UpdateReviewModal;
