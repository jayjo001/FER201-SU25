import { Carousel, Container } from 'react-bootstrap';

function Home() {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Welcome to the Online Quiz App</h2>

      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/a1.jpg"
            alt="Slide 1"
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Family Tradition</h3>
            <p>Baking pies with attitude!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/a2.jpg"
            alt="Slide 2"
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>30 Pies of Thanksgiving</h3>
            <p>Legendary dessert by Martha Stewart.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Home;
