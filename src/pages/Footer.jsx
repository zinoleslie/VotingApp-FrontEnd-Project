import React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer style={footerStyles.container}>
            <Container>
                <Row>
                    {/* About Us Section */}
                    <Col md={4} className="mb-3">
                        <h5 style={footerStyles.heading}>About Us</h5>
                        <p style={footerStyles.text}>
                            WebVote is an online platform designed to make the voting process more accessible and secure.
                            We are dedicated to providing a simple, efficient, and transparent system for elections.
                        </p>
                    </Col>

                    {/* Contact Section */}
                    <Col md={4} className="mb-3">
                        <h5 style={footerStyles.heading}>Contact</h5>
                        <p style={footerStyles.text}>📧 Email: support@webvote.com</p>
                        <p style={footerStyles.text}>📞 Phone: +234 703 642 7146</p>
                        <p style={footerStyles.text}>📍 Address: 12 Gas-Line road, Ikorodu, Lagos</p>
                    </Col>
                </Row>

                {/* Social Media Links */}
                <Row className="text-center mt-4">
                    <Col>
                        <Navbar.Brand href="https://www.facebook.com/" target="_blank">
                            <i className="fab fa-facebook-square" style={footerStyles.icon}></i>
                        </Navbar.Brand>
                        <Navbar.Brand href="https://www.twitter.com/" target="_blank">
                            <i className="fab fa-twitter-square" style={footerStyles.icon}></i>
                        </Navbar.Brand>
                        <Navbar.Brand href="https://www.instagram.com/" target="_blank">
                            <i className="fab fa-instagram-square" style={footerStyles.icon}></i>
                        </Navbar.Brand>
                    </Col>
                </Row>
            </Container>

            {/* Copyright Section */}
            <div style={footerStyles.copyright}>
                <p>&copy; {new Date().getFullYear()} WebVote. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

// 🔹 Custom Styles
const footerStyles = {
    container: {
        backgroundColor: '#232839',
        color: 'white',
        padding: '40px 0',
        textAlign: 'center',
    },
    heading: {
        color: '#FFD700',
        fontSize: '18px',
        marginBottom: '15px',
    },
    text: {
        color: '#CCCCCC',
        fontSize: '14px',
        lineHeight: '1.6',
    },
    icon: {
        color: 'white',
        fontSize: '28px',
        margin: '0 10px',
        transition: '0.3s',
        cursor: 'pointer',
    },
    copyright: {
        borderTop: '1px solid #383d52',
        padding: '10px 0',
        marginTop: '20px',
        fontSize: '14px',
    },
};

// ✅ Export the Footer Component
export default Footer;
