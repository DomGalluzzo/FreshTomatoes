import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Movies from "../containers/Movies";
import Movie from "./Movie";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Movies}></Route>
				<Route exact path="/movies/:slug" exact component={Movie}></Route>
			</Switch>
		</Router>
	);
};

export default App;
