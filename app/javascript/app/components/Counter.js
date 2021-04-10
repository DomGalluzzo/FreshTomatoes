import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../actions/index";

const Counter = () => {
	const count = useSelector((state) => state.counter.count);
	console.log(count);
	const dispatch = useDispatch();

	const handleIncrement = () => {
		dispatch(increment());
	};

	const handleDecrement = () => {};

	return (
		<div>
			<h3>{`Count: ${count}`}</h3>
			<button onClick={handleIncrement}>+</button>
			<button onClick={() => handleDecrement}>-</button>
		</div>
	);
};

export default Counter;
