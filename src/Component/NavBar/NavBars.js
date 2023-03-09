import {
  faArrowLeft,
  faMobileAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import logo from "../../Assets/Eagle.png";
import "./NavBars.css";

const NavBars = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="Eagle" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/home" className="active">
              Home
            </Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="!#">Hosting</NavDropdown.Item>
              <NavDropdown.Item href="!#">Frontend</NavDropdown.Item>
              <NavDropdown.Item href="!#">Backend</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="My Work" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Nav.Link>
              <FontAwesomeIcon icon={faSearch} />
            </Nav.Link>
            <Nav.Link>
              <FontAwesomeIcon icon={faMobileAlt} />
            </Nav.Link>
            <Nav.Link>
              <button id="btnheader">
                Contact Us
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBars;
