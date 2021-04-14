import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MoviesCarousel from "../containers/MoviesCarousel";
import Movie from "./Movie";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={MoviesCarousel}></Route>
				<Route exact path="/movies/:slug" exact component={Movie}></Route>
			</Switch>
		</Router>
	);
};

export default App;
