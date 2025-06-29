import { Card, Row, Col, Container } from 'react-bootstrap';

const newsList = [
  {
    id: 1,
    title: 'Ham & Veggie Skewers',
    description: 'Fresh skewers with ham, tomatoes, cheese, and lettuce.',
    images: 'images/a3.jpg'
  },
  {
    id: 2,
    title: 'Classic Holiday Ham',
    description: 'Perfectly baked ham centerpiece for your celebration.',
    images: 'images/a4.jpg'
  },
  {
    id: 3,
    title: 'Glazed Ham with Orange',
    description: 'Juicy ham glazed with citrus and herbs.',
    images: 'images/a5.jpg'
  },
  {
    id: 4,
    title: 'Apple-Stuffed Ham Roast',
    description: 'Roasted ham with thinly sliced apples on top.',
    images: 'images/a6.jpg'
  }
];

function News() {
  return (
    <Container className="mt-4">
      <h2 className="mb-4">News</h2>
      <Row xs={1} sm={2} md={4} className="g-4">
        {newsList.map((news) => (
          <Col key={news.id}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={news.images}
                alt={news.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>{news.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default News;
