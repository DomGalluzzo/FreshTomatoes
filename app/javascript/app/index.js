import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Container } from "react-bootstrap";

import store from "./components/store";
import App from "./components/App";
import TopNav from "./components/TopNav";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<TopNav />
			<Container className="main-container p-0">
				<App />
			</Container>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
