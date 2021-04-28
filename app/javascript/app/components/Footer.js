import React from "react";

import { Nav, Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = ({ justify }) => {
	return (
		<Container className="footer-container p-0 py-3" fluid>
			<Nav className={`justify-content-${justify}`}>
				<Col md={4}>
					<Nav.Item>
						<Nav.Link href="#">Help</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="#">About Fresh Tomatoes</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="#">How Are Ratings Scored?</Nav.Link>
					</Nav.Item>
				</Col>
				<Col md={4}>
					<Nav.Item>
						<Nav.Link href="#">Licensing</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="#">Advertise</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="#">Careers</Nav.Link>
					</Nav.Item>
				</Col>
				<Col md={4} className="social-links-column">
					<Title text="FOLLOW US" style={{ color: "white" }} />
					<Row>
						<Nav.Item className="social-links">
							<Nav.Link href="#">
								<FaFacebookSquare />
							</Nav.Link>
						</Nav.Item>
						<Nav.Item className="social-links">
							<Nav.Link href="#">
								<FaTwitter />
							</Nav.Link>
						</Nav.Item>
						<Nav.Item className="social-links">
							<Nav.Link href="#">
								<FaInstagram />
							</Nav.Link>
						</Nav.Item>
					</Row>
				</Col>
			</Nav>
		</Container>
	);
};

export default Footer;
