import React from "react";
// import Doctors from './../Doctors/Doctors.js'
// import SectionBg from './../../Assets/footer/footer-bg.jpg';
import { Col, Container, Row } from "react-bootstrap";
import About from "./../../Assets/Slider/Meadows-Hotel.jpg";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";

const AboutUs = () => {
  return (
    <div>
      <h1 className="text-center m-3">About Us</h1>
      {/* <div style={{ background: `url(${SectionBg})`, backgroundAttachment: "fixed" }}>
                <h1 className="text-white text-center p-5">About Us</h1>
            </div> */}
      <Container className="mt-2 mb-5">
        <Row>
          <Col lg={6} md={6} sm={12}>
            <Zoom bottom>
              <img className="mx-auto mt-5 img-fluid" src={About} alt="" />
            </Zoom>
          </Col>

          <Col lg={6} md={6} sm={12} className="mt-5">
            <div>
              <Bounce left>
                <h1 className="text-center">
                  The Meadows Hotel Holiday Home & Suites
                </h1>
              </Bounce>
              <Bounce right cascade>
                <p>
                  Whether you are travelling for business or pleasure, the
                  luxury hotel services offered by the five star Grand Palace
                  Hotel make it an ideal choice for your stay in Riga, Latvia.
                  The hotel’s luxurious surroundings, comfort, thoughtful
                  touches and a personalized service sets it apart from any
                  other hotel, allowing you to feel like being at home from your
                  very first steps into the hotel. We are geared towards the
                  fulfilment of the needs of any discerning guest and below you
                  can find an alphabetical overview of the most commonly-used
                  services and facilities offered by our boutique hotel.
                </p>
              </Bounce>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
