import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Bounce from "react-reveal/Bounce";
import Zoom from 'react-reveal/Zoom';
import blog1 from './../../Assets/blog/blog-1.jpg';
import blog2 from './../../Assets/blog/blog-2.jpg';

const Blog = () => {
    return (
        <div>
            <Container className="mt-5 mb-5">
                <Row>
                    <Col lg={4} md={4} sm={12}>
                        <Zoom bottom>
                            <img className="mx-auto mt-5 img-fluid" src={blog1} alt="" />
                        </Zoom>
                        <Bounce left>
                            <h3 className="text-center mt-3">LUXURY HOTEL</h3>
                        </Bounce>
                        <Bounce right cascade>
                            <p>New Website</p></Bounce>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <Zoom bottom>
                            <img className="mx-auto mt-5 img-fluid" src={blog2} alt="" />
                        </Zoom>
                        <Bounce left>
                            <h3 className="text-center mt-3">LUXURY HOTEL</h3>
                        </Bounce>
                        <Bounce right cascade>
                            <p>Whether you are travelling for business </p></Bounce>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <Zoom bottom>
                            <img className="mx-auto mt-5 img-fluid" src={blog1} alt="" />
                        </Zoom>
                        <Bounce left>
                            <h3 className="text-center mt-3">LUXURY HOTEL</h3>
                        </Bounce>
                        <Bounce right cascade>
                            <p>Whether you are travelling for business </p></Bounce>
                    </Col>


                </Row >
            </Container >
        </div>
    );
};

export default Blog;