import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer-custom text-light py-4 mt-5">
      <Container>
        <Row className="text-center">
          <Col md={6}>
            <p>&copy; {new Date().getFullYear()} InnoVative Team. All Rights Reserved.</p>
          </Col>
          <Col md={6}>
            <p>
              <a href="#about" className="text-dark mx-2">About</a> |
              <a href="#contact" className="text-dark mx-2">Contact</a> 
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
