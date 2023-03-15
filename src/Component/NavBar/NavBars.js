import {
  faArrowLeft,
  faMobileAlt,
  faSearch,
  faSignInAlt,
  faSignOutAlt,
  faUserPlus,
  faUsersBetweenLines,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import logo from "../../Assets/Eagle.png";
import "./NavBars.css";

const NavBars = () => {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuthenticated(false);
    window.location.href = "/home";
  };
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
            <NavDropdown
              title="Services"
              id="basic-nav-dropdown"
              className="nav-link-m"
            ></NavDropdown>
            <NavDropdown
              title="My Work"
              id="basic-nav-dropdown"
              className="nav-link-m"
            ></NavDropdown>

            <Link to="/about" className="nav-link-m">
              About
            </Link>
            <Link to="/contact" className="nav-link-m">
              Contact
            </Link>
            {authenticated ? (
              <React.Fragment>
                <Nav.Link onClick={handleLogout}>
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </Nav.Link>
                <Link to="/userpanel">
                  <FontAwesomeIcon icon={faUsersBetweenLines} />
                </Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link to="/login">
                  <FontAwesomeIcon icon={faSignInAlt} />
                </Link>
                <Link to="/registration">
                  <FontAwesomeIcon icon={faUserPlus} />
                </Link>
              </React.Fragment>
            )}
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
