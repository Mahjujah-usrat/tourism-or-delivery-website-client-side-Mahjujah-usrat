import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Bounce from "react-reveal/Bounce";
import Zoom from 'react-reveal/Zoom';
import About from './../../Assets/locations.jpg';
import './Locations.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Locations = () => {
    return (
        <div>
            <Container className="mt-5 mb-5">
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <Zoom bottom>
                            <img className="mx-auto mt-5 img-fluid" src={About} alt="" />
                        </Zoom>
                    </Col>

                    <Col lg={6} md={6} sm={12} className="mt-5">
                        <div>
                            <Bounce left>
                                <h4 className="text-center">LUXURY HOTEL & BEST RESORT</h4>
                                <h1 className="mt-4 text-center" >Discover our Locations</h1>
                            </Bounce>
                            <Bounce right cascade>
                                <Row className="text-center">
                                    <Col>
                                        <ul className="list-unstyled text-dark mt-5 m">
                                            <li className="m-3"><FontAwesomeIcon icon={faMapMarkerAlt} /> <span className="ms-2">Dhaka Branch</span></li>
                                            <li className="m-3 "><FontAwesomeIcon icon={faEnvelope} /> <span className="ms-2">zubairhmd84@gmail.com</span></li>
                                            <li className="m-3 "><FontAwesomeIcon icon={faPhone} /> <span className="ms-2">01619141476</span></li>
                                        </ul>
                                    </Col>
                                    <Col>
                                        <ul className="list-unstyled text-dark mt-5 m">
                                            <li className="m-3"><FontAwesomeIcon icon={faMapMarkerAlt} /> <span className="ms-2">Chittagong Branch</span></li>
                                            <li className="m-3 "><FontAwesomeIcon icon={faEnvelope} /> <span className="ms-2">admin@gmail.com</span></li>
                                            <li className="m-3 "><FontAwesomeIcon icon={faPhone} /> <span className="ms-2">01799141476</span></li>
                                        </ul>
                                    </Col>
                                </Row>
                                {/* <p>MediLink Central Hospital is one of the largest and most recognized private healthcare brands in Bangladesh. Known for its pioneering works in setting-up the first super-specialty Cardiac hospital within country. MediLink Central Hospital is also widely acknowledged for bringing high quality diagnostic & specialized consultation facilities under a single roof through its now ubiquitous centers in all corners of Bangladesh.</p> */}
                            </Bounce>
                        </div>
                    </Col>
                </Row >
            </Container >
        </div>
    );
};

export default Locations;