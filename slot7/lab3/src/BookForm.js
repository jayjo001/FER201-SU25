import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

function TextControlsExample() {
  return (
    <Container className="bg-dark text-white py-5">
      <h2 className="text-center mb-4">Book Your Table</h2>
      <Form>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Name *"
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Please write your comment"
          />
        </Form.Group>

        <Button variant="warning">Send Message</Button>
      </Form>
    </Container>
  );
}

export default TextControlsExample;
