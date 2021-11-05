import React from "react";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import headerLogo from "./../../../Assets/mylogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMapMarkerAlt,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import FB from "./../../../Assets/footer/socialFB.png";
import Linkedin from "./../../../Assets/footer/sociallinkedin.png";
import YT from "./../../../Assets/footer/socialyoutube.png";
import Twitter from "./../../../Assets/footer/socialtwitter.png";
import Insta from "./../../../Assets/footer/socialInsta.png";
import "./Header.css";
import useAuth from "./../../hooks/useAuth";

const Header = () => {
  const { allContexts } = useAuth();
  const { user, logOut } = allContexts;
  const { displayName, photoURL, email } = user;

  return (
    <div style={{ backgroundColor: "#c19b77" }}>
      <Navbar style={{ backgroundColor: "#1C1C1C" }} expand="lg">
        <Container>
          <Navbar.Brand>
            <NavLink
              className="text-decoration-none text-white"
              as={NavLink}
              to="/"
            >
              HOTEL BOOKING
            </NavLink>
            {/* <NavLink s={NavLink} to="/">The Meadows Hotel</NavLink> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center ">
              <Nav.Link
                className="text-white fw-bolder fs-5"
                as={NavLink}
                to="/"
              >
                Home
              </Nav.Link>

              {!user.email ? (
                <>
                  <Nav.Link
                    className="text-white fw-bolder fs-5"
                    as={NavLink}
                    to="/login"
                  >
                    <button className="btn-style">Login</button>
                  </Nav.Link>

                  <Nav.Link
                    className="text-white fw-bolder fs-5"
                    as={NavLink}
                    to="/signup"
                  >
                    <button className="btn-style">Sign up</button>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link
                    className="text-white fw-bolder fs-5"
                    as={NavLink}
                    to="/addservice"
                  >
                    Add Service
                  </Nav.Link>
                  <Nav.Link
                    className="text-white fw-bolder fs-5"
                    as={NavLink}
                    to="/manageorder"
                  >
                    Manage Order
                  </Nav.Link>
                  <Nav.Link
                    className="text-white fw-bolder fs-5"
                    as={NavLink}
                    to="/myorder"
                  >
                    My Order
                  </Nav.Link>

                  <NavDropdown
                    title={
                      <img
                        style={{
                          width: "45px",
                          borderRadius: "50%",
                        }}
                        src={photoURL}
                        alt=""
                      />
                    }
                  >
                    <div className="text-center p-2 fw-bolder card-style">
                      <img
                        style={{
                          width: "50%",
                          borderRadius: "50%",
                        }}
                        src={photoURL}
                        alt=""
                      />
                      <h6 className="mt-3">Welcome Back</h6>
                      <h6>{displayName}</h6>
                      <h6 className="m-0 mb-2">{email}</h6>
                      <button onClick={logOut} className="btn-style">
                        Sign Out
                      </button>
                    </div>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
