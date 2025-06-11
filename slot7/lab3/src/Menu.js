import React from 'react';
import { Card, Button, Row, Col, Container, Badge } from 'react-bootstrap';

const pizzas = [
  { name: 'Margherita Pizza', price: 12, oldPrice: 16, tag: 'SALE', img: '/lab2.2.jpg' },
  { name: 'Mushroom Pizza', price: 25, tag: '', img: '/lb2.3.jpg' },
  { name: 'Hawaiian Pizza', price: 10, tag: 'NEW', img: '/lab2.4.jpg' },
  { name: 'Pesto Pizza', price: 18, oldPrice: 20, tag: 'SALE', img: '/lab2.1.jpg' },
];

const Menu = () => {
  return (
    <Container className="bg-dark text-white py-5">
      <h2 className="text-center mb-4">Our Menu</h2>
      <Row>
        {pizzas.map((pizza, idx) => (
          <Col md={3} key={idx} className="d-flex">
            <Card className="mb-4 h-100 w-100 d-flex flex-column justify-content-between">
              <Card.Img variant="top" src={pizza.img} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  {pizza.tag && (
                    <Badge bg="warning" className="mb-2 text-dark">
                      {pizza.tag}
                    </Badge>
                  )}
                  <Card.Title>{pizza.name}</Card.Title>
                  <Card.Text>
                    {pizza.oldPrice ? (
                      <>
                        <del>${pizza.oldPrice}</del>{' '}
                        <strong>${pizza.price}</strong>
                      </>
                    ) : (
                      `$${pizza.price}`
                    )}
                  </Card.Text>
                </div>
                <Button variant="dark" className="mt-auto">
                  Buy
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Menu;
