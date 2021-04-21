import React from "react";
import {
	Container,
	Form,
	FormControl,
	Button,
	Navbar,
	Nav,
	NavDropdown,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const TopNav = () => {
	return (
		<Container className="topnav-container p-0">
			<Navbar className="topnav" collapseOnSelect sticky="top" expand="lg">
				<Navbar.Brand href="/">
					<img src="https://res.cloudinary.com/dcdspz5mv/image/upload/v1619016229/Logo_lbddl5.png" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Form inline>
							<FormControl
								type="text"
								placeholder="Search"
								className="mr-sm-2"
							/>
							<Button variant="outline-light">
								<FontAwesomeIcon icon={faSearch} />
							</Button>
						</Form>
						<Nav.Link href="/movies">Movies</Nav.Link>
						<Nav.Link href="/genres">Genres</Nav.Link>
						<NavDropdown title="Account" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Dashboard</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								My Watchlists
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						<Nav.Link href="#deets">More deets</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
							Dank memes
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
};

export default TopNav;
