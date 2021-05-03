import React from "react";

import { Container, Button, Form, Image } from "react-bootstrap";

const LogIn = () => {
	return (
		<Container className="p-0 mt-4 main-form-container" fluid>
			<Container className="p-0 image-left-container">
				<Image src="https://images.pexels.com/photos/2398354/pexels-photo-2398354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></Image>
			</Container>
			<Container className="sub-form-container">
				<Container className="pb-3 sign-in-footer-links" fluid>
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

					<Form.Group controlId="formBasicPassword">
						<Form.Label className="session-form-label">Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Container className="p-0 session-button-container">
						<Button className="btn-block" variant="primary" type="submit">
							Log In
						</Button>
					</Container>
				</Form>
				<Container className="pt-3 sign-in-footer-links" fluid>
					<a href="/users/password/new">Forgot your password?</a>
				</Container>
			</Container>
		</Container>
	);
};

export default LogIn;
