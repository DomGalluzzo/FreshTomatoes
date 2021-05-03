import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Container } from "react-bootstrap";
import { CloudinaryContext } from "cloudinary-react";
import ReduxToastr from "react-redux-toastr";

import store from "./components/store";
import App from "./components/App";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<CloudinaryContext cloudName="dcdspz5mv">
				<Container className="main-container p-0">
					<App />
				</Container>
			</CloudinaryContext>
			<ReduxToastr
				timeOut={4000}
				newestOnTop={false}
				preventDuplicates
				position="top-left"
				getState={(state) => state.toastr}
				transitionIn="bounceIn"
				transitionOut="bounceOut"
				progressBar={true}
				closeOnToastrClick
			/>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
