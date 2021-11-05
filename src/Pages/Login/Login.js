import React from 'react';
import { Container } from 'react-bootstrap';
import './Login.css';
import google from './../../Assets/icons/google-sign.png';

import { useLocation, useHistory } from 'react-router-dom';
import useAuth from './../hooks/useAuth.js';


const Login = () => {
    const { allContexts } = useAuth();

    const { signInWithGoogle } = allContexts;

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || './home';

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <Container>
            <div className="text-center my-4">
                <h1>Please Login With</h1>
                <div>
                    <button className="btn" onClick={handleGoogleLogin}>
                        <img width="80%" src={google} alt="google-icon" />
                    </button>
                </div>
            </div>
        </Container>
    );
};

export default Login;





















































































/*
import React from 'react';
import { Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './Login.css';
import google from './../../Assets/icons/google-sign.png';

import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../hooks/useAuth.js';


const Login = () => {
    const { allContexts } = useAuth();

    const { signInWithEmail, setUser, setError, error, signInWithGoogle, getPassword, getEmail, } = allContexts;

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || './home';

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <Container>
            <div className="text-center my-4">
                <h2>Please Login</h2>
                <h5 className=" mt-2">Login with Email & Password</h5>
                <p className="text-danger text-center">{error}</p>
                <div className="form-container mx-auto">
                    <Form onSubmit={(e) => {
                        e.preventDefault();
                        signInWithEmail()
                            .then(result => {
                                setUser(result.user);
                                history.push(redirect_uri);
                            })
                            .catch((error) => {
                                setError(error.message);
                            })
                    }}>
                        <Row>
                            <Col className="text-start">
                                <Form.Label htmlFor="email" visuallyHidden>
                                    Your Email Address
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                    </InputGroup.Text>
                                    <FormControl required onBlur={getEmail} type="email" autoComplete="current-email" id="email" placeholder="Enter your email address"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col className="text-start">
                                <Form.Label htmlFor="password" visuallyHidden>
                                    Your Password
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                                    </InputGroup.Text>
                                    <FormControl required onBlur={getPassword} type="password" autoComplete="current-password" id="password" placeholder="Enter your password"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>

                        <button onClick={signInWithEmail} type="submit" className="mt-2 w-100 btn-style">
                            Login
                        </button>
                        <button type="submit" className="mt-2 w-100 signup-btn">
                            <NavLink className="text-decoration-none" to="/signup"><p>Need an Account? Please Sign up!</p></NavLink>
                        </button>
                    </Form>
                </div>

                <h2 className="mt-4">Or Login with</h2>
                <div>
                    <button className="btn" onClick={handleGoogleLogin}>
                        <img width="80%" src={google} alt="google-icon" />
                    </button>
                </div>
            </div>
        </Container>
    );
};

export default Login;

*/