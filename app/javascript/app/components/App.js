import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MoviesCarousel from "../containers/MoviesCarousel";
import MovieShow from "../containers/MovieShow";
import UserWatchlists from "../containers/UserWatchlists";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" exact component={MoviesCarousel}></Route>
				<Route path="/movies/:id" exact component={MovieShow}></Route>
				<Route
					exact
					path="/users/:id/watchlists"
					component={UserWatchlists}></Route>
			</Switch>
		</Router>
	);
};

export default App;
