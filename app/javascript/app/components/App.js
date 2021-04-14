import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Movies from "../containers/Movies";
import MovieShow from "../containers/MovieShow";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Movies}></Route>
				<Route path="/movies/:id" exact component={MovieShow}></Route>
			</Switch>
		</Router>
	);
};

export default App;
