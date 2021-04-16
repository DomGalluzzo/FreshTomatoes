import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MoviesCarousel from "../containers/MoviesCarousel";
import MovieShow from "../containers/MovieShow";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" exact component={MoviesCarousel}></Route>
				<Route path="/movies/:id" exact component={MovieShow}></Route>
			</Switch>
		</Router>
	);
};

export default App;
