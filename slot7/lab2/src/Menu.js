import React from 'react';
import { Card, Button, Row, Col, Container, Badge } from 'react-bootstrap';

const pizzas = [
  { name: 'Margherita Pizza', price: 12, oldPrice: 16, tag: 'SALE', img: '/images/pizza2.jpg' },
  { name: 'Mushroom Pizza', price: 25, tag: '', img: '/images/pizza3.jpg' },
  { name: 'Hawaiian Pizza', price: 10, tag: 'NEW', img: '/images/pizza4.jpg' },
  { name: 'Pesto Pizza', price: 18, oldPrice: 20, tag: 'SALE', img: '/images/pizza5.jpg' },
];

const Menu = () => {
  return (
    <Container className="bg-dark text-white py-5">
      <h2 className="text-center mb-4">Our Menu</h2>
      <Row>
        {pizzas.map((pizza, idx) => (
          <Col md={3} key={idx}>
            <Card className="mb-4">
              <Card.Img variant="top" src={pizza.img} />
              <Card.Body>
                {pizza.tag && <Badge bg="warning" className="mb-2">{pizza.tag}</Badge>}
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text>
                  {pizza.oldPrice ? <><del>${pizza.oldPrice}</del> <strong>${pizza.price}</strong></> : `$${pizza.price}`}
                </Card.Text>
                <Button variant="dark">Buy</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Menu;
