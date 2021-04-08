import React from "react";
import { Route, Switch } from "react-router-dom";

const App = () => {
	return (
		<Switch>
			<Route exact path="/" component={movies}></Route>
			<Route exact path="/movies/:slug" component={movie}></Route>
		</Switch>
	);
};

export default App;
