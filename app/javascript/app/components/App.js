import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import Counter from "./Counter";

const App = () => {
	// const count = useSelector((state) => state.counter);

	return (
		<Counter />
		// <Switch>
		/* <Route exact path="/" component={Movies}></Route> */
		/* <Route exact path="/movies/:slug" component={Movie}></Route> */
		// </Switch>
	);
};

export default App;
