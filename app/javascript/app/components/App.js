import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GenresList from "../containers/GenresList";

import HomePage from "../containers/HomePage";
import MovieShow from "../containers/MovieShow";
import MoviesList from "../containers/MoviesList";
import UserWatchlist from "../containers/UserFavorites";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

const App = () => {
	return (
		<Router forceRefresh={true}>
			<Switch>
				<Route exact path="/" exact component={HomePage} />
				<Route path="/movies/:id" exact component={MovieShow} />
				<Route exact path="/users/:id/favorites" component={UserWatchlist} />
				<Route path="/movies" component={MoviesList} />
				<Route path="/genres" component={GenresList} />
				{/* <Route exact path="/users/sign_in" component={LogIn} />
				<Route exact path="/users/sign_up" component={SignUp} /> */}
			</Switch>
		</Router>
	);
};

export default App;
