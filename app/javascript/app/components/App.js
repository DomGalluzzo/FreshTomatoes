import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import Movies from "./Movies";

const App = () => {
	return (
		<div>
			<Movies />
		</div>
		// <Switch>
		/* <Route exact path="/" component={Movies}></Route> */
		/* <Route exact path="/movies/:slug" component={Movie}></Route> */
		// </Switch>
	);
};

export default App;
