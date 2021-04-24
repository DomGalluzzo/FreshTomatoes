import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "../containers/HomePage";
import MovieShow from "../containers/MovieShow";
import MoviesList from "../containers/MoviesList";
import UserWatchlists from "../containers/UserWatchlists";

const App = () => {
	return (
		<Router forceRefresh={true}>
			<Switch>
				<Route exact path="/" exact component={HomePage} />
				<Route path="/movies/:id" exact component={MovieShow} />
				<Route exact path="/users/:id/watchlists" component={UserWatchlists} />
				<Route path="/movies" component={MoviesList} />
			</Switch>
		</Router>
	);
};

export default App;
