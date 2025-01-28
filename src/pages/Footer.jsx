import React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#232839', color: 'white', padding: '20px 0' , marginTop: '200px'}}>
            <Container>
                <Row>
                    <Col md={4} className="mb-3">
                        <h5>About Us</h5>
                        <p>
                            WebVote is an online platform designed to make the voting process more accessible and secure.
                            We are dedicated to providing a simple, efficient, and transparent system for elections.
                        </p>
                    </Col>

                    <Col md={4} className="mb-3">
                        <h5>Quick Links</h5>
                        <Nav className="flex-column">
                            <Nav.Link href="/login" style={{ color: 'white' }}>Login</Nav.Link>
                            <Nav.Link href="/elections" style={{ color: 'white' }}>Elections</Nav.Link>
                            <Nav.Link href="/results" style={{ color: 'white' }}>Results</Nav.Link>
                        </Nav>
                    </Col>

                    <Col md={4} className="mb-3">
                        <h5>Contact</h5>
                        <p>Email: support@webvote.com</p>
                        <p>Phone: +234 703 642 7146</p>
                        <p>Address: 12 Gas-Line road, ikorodu, lagos</p>
                    </Col>
                </Row>

                <Row className="text-center mt-4">
                    <Col>
                        <Navbar.Brand href="https://www.facebook.com/" target="_blank">
                            <i className="fab fa-facebook-square" style={{ color: 'white', fontSize: '24px', margin: '0 10px' }}></i>
                        </Navbar.Brand>
                        <Navbar.Brand href="https://www.twitter.com/" target="_blank">
                            <i className="fab fa-twitter-square" style={{ color: 'white', fontSize: '24px', margin: '0 10px' }}></i>
                        </Navbar.Brand>
                        <Navbar.Brand href="https://www.instagram.com/" target="_blank">
                            <i className="fab fa-instagram-square" style={{ color: 'white', fontSize: '24px', margin: '0 10px' }}></i>
                        </Navbar.Brand>
                    </Col>
                </Row>
            </Container>

            <div className="text-center mt-4" style={{ borderTop: '1px solid #383d52', padding: '10px 0' }}>
                <p>&copy; {new Date().getFullYear()} WebVote. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
