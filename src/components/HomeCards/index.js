import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const cardData = [
  {
    title: 'Evapotranspiration',
    link: '/Evapotranspiration',
    imageSrc: 'evapotranspiration-image-url.jpg',
  },
  {
    title: 'CropCoefficient',
    link: '/CropCoefficient',
    imageSrc: 'crop-coefficient-image-url.jpg',
  },
  {
    title: 'PercenteShaded',
    link: '/PercenteShaded',
    imageSrc: 'percent-shaded-image-url.jpg',
  },
  {
    title: 'SizeLines',
    link: '/SizeLines',
    imageSrc: 'size-lines-image-url.jpg',
  },
  {
    title: 'Irrigation',
    link: '/Irrigation',
    imageSrc: 'irrigation-image-url.jpg',
  },
  {
    title: 'IrrigationSystem',
    link: '/IrrigationSystem',
    imageSrc: 'irrigation-system-image-url.jpg',
  },
];

function HomeCards() {
  return (
    <Container>
      <Row>
        {cardData.map((card, index) => (
          <Col key={index} xs={12} sm={6} md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={card.imageSrc} alt={card.title} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Link to={card.link} className="btn btn-secondary">
                  Go to {card.title}
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomeCards;
