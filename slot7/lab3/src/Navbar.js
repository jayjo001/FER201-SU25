import React from 'react';
import { Navbar, Nav, Container, Form, Button, FormControl } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Pizza House</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-pizza" />
        <Navbar.Collapse id="navbar-pizza">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="danger">🔍</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
