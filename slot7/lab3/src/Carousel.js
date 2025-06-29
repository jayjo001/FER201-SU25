import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const PizzaCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="/lab2.1.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3>Neapolitan Pizza</h3>
          <p>If you are looking for traditional Italian pizza, the Neapolitan is the best option!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default PizzaCarousel;
