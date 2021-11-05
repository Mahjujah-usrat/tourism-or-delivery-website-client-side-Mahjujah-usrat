import React from "react";
import { Container } from "react-bootstrap";
import AboutUs from "../../AboutUs/AboutUs.js";
import Locations from "../../Locations/Locations.js";
// import Doctors from '../../Doctors/Doctors.js';
// import Awards from '../Awards/Awards.js';
import Services from "../Services/Services.js";
import Bounce from "react-reveal";
import { NavLink } from "react-router-dom";
import bg from "./../../../Assets/images/bg.png";

const Home = () => {
  return (
    <div>
      <div
        style={{
          background: `linear-gradient(#0000008a,#0000008a),url(${bg})`,
        }}
      >
        <Container>
          <div
            style={{ height: "90vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="text-center my-5 py-5">
              <Bounce left cascade>
                <h1 className="text-white">TRAVEL-TRUZAM COMMUNITY</h1>
              </Bounce>

              <Bounce right cascade>
                <p className="my-4 text-white fs-5">
                  TAKE ADVANTAGE OF THIS AMAZING EXCLUSIVE OFFER DON'T MISS THIS
                  OPPORTUNITY FOR YOUR BUSINESS
                </p>
              </Bounce>

              <Bounce>
                <NavLink
                  to="/"
                  className="rounded-pill btn btn-success fs-5 py-2 px-4"
                >
                  BOOK NOW
                </NavLink>
              </Bounce>
            </div>
          </div>
        </Container>
      </div>
      <AboutUs></AboutUs>
      <Services></Services>
      <Locations></Locations>
    </div>
  );
};

export default Home;
