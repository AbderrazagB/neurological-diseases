import React from 'react';
import navbarLogo from '../assets/navbarLogo.png';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
      <img
              src= {navbarLogo}
              width="50"
              height="50"
              className="d-inline-block align-top me-2"
              alt="Navbar Logo"
            />
        <Navbar.Brand href="/" className='mt-1'><h3>NeuraHealth</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link}  to="multiple-sclerosis" smooth={true} duration={500}>
              Multiple Sclerosis
            </Nav.Link>
            <Nav.Link as={Link} to="stroke" smooth={true} duration={500}>
              Stroke
            </Nav.Link>
            <Nav.Link as={Link} to="alzheimers" smooth={true} duration={500}>
              Alzheimer's
            </Nav.Link>
            <Nav.Link as={Link} to="parkinsons" smooth={true} duration={500}>
              Parkinson's
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;