import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faHSquare } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div
            style={{ backgroundColor: '#1C1C1C' }}
        >
            <ContactForm />
        </div>
    );
};
const formStyle = { background: "transparent", color: "white" };
function ContactForm() {
    return (
        <div style={{ padding: "58px 0 40px" }}>
            <div>
                <Container>
                    <Row>
                        <Col md={6} sm={12}>
                            <Bounce left>
                                <h2 className="text-center text-white">Leave A Message</h2>
                            </Bounce>

                            <Bounce left>
                                <p className="text-center text-muted mb-4">
                                    Drop a message and we will get back to you soon!
                                </p>
                            </Bounce>
                            <Slide bottom>
                                <Form>
                                    <Row>
                                        <Col sm>
                                            <Form.Group className="mb-3 text-white" controlId="formBasicText">
                                                <Form.Label>Your Name </Form.Label>
                                                <Form.Control style={formStyle} type="text" placeholder="Enter Your Name" />
                                            </Form.Group>
                                        </Col>
                                        <Col sm>
                                            <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
                                                <Form.Label>Your Email </Form.Label>
                                                <Form.Control style={formStyle} type="email" placeholder="Enter Your Email" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
                                        <Form.Label>Which Service Do you Need</Form.Label>
                                        <Form.Control style={formStyle} type="text" placeholder="Service name you want..." />
                                    </Form.Group>
                                    <Form.Group className="mb-3 text-white" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Your Messages</Form.Label>
                                        <Form.Control style={formStyle} placeholder="Write you message..." as="textarea" rows={3} />
                                    </Form.Group>
                                    <div className="text-center">
                                        <Button className="mb-5 px-5 fw-bolder fs-5 " style={{ backgroundColor: "#C19B77", border: "#C19B77", color: "#1C1C1C" }} type="submit">
                                            Submit
                                        </Button>
                                    </div>
                                </Form>
                            </Slide>
                        </Col>


                        <Col md={6} sm={12} className="text-white text-center">
                            <Bounce right>
                                <h1>Address</h1>
                            </Bounce>
                            <Bounce top>
                                <h5 className="mt-5 mb-4"><FontAwesomeIcon icon={faHSquare} /> The Meadows Hotel</h5>
                                <h6 className="mb-4"><FontAwesomeIcon icon={faMapMarkerAlt} /> Tongi, Gazipur, Dhaka</h6>
                                <h6 className="mb-4"><FontAwesomeIcon icon={faEnvelope} /> zubairhmd84 @gmail.com</h6>
                                <h6 className="mb-4"><FontAwesomeIcon icon={faPhone} /> 01619141476</h6>
                            </Bounce>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Contact;