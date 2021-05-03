import React from "react";

import { Container, Button, Form, InputGroup, Image } from "react-bootstrap";

const SignUp = () => {
	// const handleValidation = () => {

	// }

	return (
		<Container className="p-0 mt-4 main-form-container" fluid>
			<Container className="sub-form-container">
				<Container
					className="pb-3 sign-in-footer-links"
					id="sign-in-title"
					fluid>
					<span>
						<span className="tomato-title">🍅</span>Fresh Tomatoes
					</span>
				</Container>
				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Label className="session-form-label">
							Email address
						</Form.Label>
						<Form.Control
							type="email"
							placeholder="DenzelWashington@gmail.com"
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label className="session-form-label">Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Must contain at least 6 characters"
						/>
					</Form.Group>
					<Container className="p-0 session-button-container">
						<Button className="btn-block" variant="primary" type="submit">
							Sign Up
						</Button>
					</Container>
				</Form>
				<Container className="pt-3 sign-in-footer-links" fluid>
					<p>
						Already registered? <a href="/users/sign_in">Log in</a>
					</p>
				</Container>
			</Container>
			<Container className="p-0 image-right-container">
				<Image src="https://images.pexels.com/photos/3004075/pexels-photo-3004075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></Image>
			</Container>
		</Container>
	);
};

export default SignUp;
