import { createReview } from "../actions";
import { useDispatch } from "react-redux";
import _ from "lodash";

const CreateReview = ({ user, movie }) => {
	const dispatch = useDispatch();
	const handleCreateReview = () => {
		dispatch(createReview(user.id, movie));
	};

	return <button onClick={handleCreateReview}>Add Review</button>;
};

export default CreateReview;
