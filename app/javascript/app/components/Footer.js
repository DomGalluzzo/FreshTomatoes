import React from "react";

import { Nav, Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import {
	FaFacebookSquare,
	FaGithub,
	FaLinkedin,
	FaEnvelopeOpenText,
} from "react-icons/fa";
import { toastr } from "react-redux-toastr";

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
							<Nav.Link href="https://github.com/DomGalluzzo">
								<FaGithub />
							</Nav.Link>
						</Nav.Item>
						<Nav.Item className="social-links">
							<Nav.Link href="https://www.linkedin.com/in/dominickgalluzzo/">
								<FaLinkedin />
							</Nav.Link>
						</Nav.Item>
						<Nav.Item className="social-links">
							<Nav.Link
								href=""
								onClick={() => toastr.confirm("Email: Dom.Galluzzo@gmail.com")}>
								<FaEnvelopeOpenText />
							</Nav.Link>
						</Nav.Item>
						<Nav.Item className="social-links">
							<Nav.Link href="https://www.facebook.com/dominick.galluzzo/">
								<FaFacebookSquare />
							</Nav.Link>
						</Nav.Item>
					</Row>
				</Col>
			</Nav>
		</Container>
	);
};

export default Footer;
