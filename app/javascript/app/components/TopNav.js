// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useParams } from "react-router-dom";

// import {} from "../actions";
// import {
// 	Container,
// 	Form,
// 	FormControl,
// 	Button,
// 	Navbar,
// 	Nav,
// 	NavDropdown,
// } from "react-bootstrap";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

// const TopNav = () => {
// 	return (
// 		<Container className="topnav-container p-0">
// 			<Navbar className="topnav" collapseOnSelect sticky="top" expand="lg">
// 				<Navbar.Brand className="mr-4" href="/">
// 					<img src="https://res.cloudinary.com/dcdspz5mv/image/upload/v1619016229/Logo_lbddl5.png" />
// 				</Navbar.Brand>
// 				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
// 				<Navbar.Collapse id="responsive-navbar-nav">
// 					<Nav className="mr-auto">
// 						<Form inline>
// 							<FormControl
// 								type="text"
// 								placeholder="Search"
// 								className="mr-sm-2"
// 							/>
// 							<Button variant="outline-light">
// 								<FontAwesomeIcon icon={faSearch} />
// 							</Button>
// 						</Form>
// 					</Nav>
// 					<Nav id="nav-center-links">
// 						<Nav.Link href="/movies">Movies</Nav.Link>
// 						<Nav.Link href="/genres">Genres</Nav.Link>
// 					</Nav>
// 					<Nav>
// 						<NavDropdown title="Account" id="collasible-nav-dropdown">
// 							<NavDropdown.Item href="/users/">My Watchlists</NavDropdown.Item>
// 							<NavDropdown.Divider />
// 							<NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
// 						</NavDropdown>
// 					</Nav>
// 				</Navbar.Collapse>
// 			</Navbar>
// 		</Container>
// 	);
// };

// export default TopNav;
