import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Container } from "react-bootstrap";

import App from "./components/App";
import store from "./components/store";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Container className="main-container">
				<App />
			</Container>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
