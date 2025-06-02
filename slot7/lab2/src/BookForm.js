import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const BookForm = () => {
  return (
    <Container className="bg-dark text-white py-5">
      <h2 className="text-center mb-4">Book Your Table</h2>
      <Form>
        <Row className="mb-3">
          <Col><Form.Control placeholder="Your Name *" /></Col>
          <Col><Form.Control placeholder="Your Email *" /></Col>
          <Col>
            <Form.Select>
              <option>Select a Service</option>
              <option>Lunch</option>
              <option>Dinner</option>
            </Form.Select>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Control as="textarea" rows={4} placeholder="Please write your comment" />
        </Form.Group>
        <Button variant="warning">Send Message</Button>
      </Form>
    </Container>
  );
};

export default BookForm;
