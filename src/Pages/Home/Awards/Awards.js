import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Award1 from './../../../Assets/Awards/brand1.png'
import Award2 from './../../../Assets/Awards/brand2.png'
import Award3 from './../../../Assets/Awards/brand3.png'


const Awards = () => {
    return (
        <div style={{ backgroundColor: "#112639" }}>
            <Container className="text-white text-cente mt-5">
                <Row>
                    <Col lg={6} md={6} sm={12} className="mt-5 text-center">
                        <h1>We Are Certified Award Winning Hospital.</h1>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="text-center p-5">
                        <Row>
                            <Col style={{ margin: "5px 0px" }} lg={4} md={4} sm={12}>
                                <img src={Award1} alt="" />
                            </Col>
                            <Col style={{ margin: "5px 0px" }} lg={4} md={4} sm={12}>
                                <img src={Award2} alt="" />
                            </Col >
                            <Col style={{ margin: "5px 0px" }} lg={4} md={4} sm={12}>
                                <img src={Award3} alt="" />
                            </Col>

                        </Row>
                    </Col>
                </Row>

            </Container>

        </div>
    );
};

export default Awards;