import React from "react";
import { Route, Switch } from "react-router-dom";

const App = () => {
	return (
		<Switch>
			<Route exact path="/" component={Movies}></Route>
			{/* <Route exact path="/movies/:slug" component={Movie}></Route> */}
		</Switch>
	);
};

export default App;
