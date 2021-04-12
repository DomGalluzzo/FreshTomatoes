import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import Movies from "./Movies";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Movies}></Route>
				{/* <Route exact path="/movies/:slug" component={Movie}></Route> */}
			</Switch>
		</BrowserRouter>
	);
};

export default App;
