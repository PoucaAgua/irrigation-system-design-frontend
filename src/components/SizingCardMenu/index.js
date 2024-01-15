import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

const cardData = [
  {
    title: "Derivation Line ",
    link: "/sizing/derivation_line",
    imageSrc: "derivation-line-image-url.jpg",
  },
  {
    title: "Lateral Line",
    link: "/sizing/lateral_line",
    imageSrc: "lateral-line-image-url.jpg",
  },
];

function IrrigationCards() {
  return (
    <Container style={{ marginTop: 50 }}>
      <Row>
        {cardData.map((card, index) => (
          <Col key={index} xs={12} sm={6} md={3}>
            <Card className="mb-4">
              <Card.Img variant="top" src={card.imageSrc} alt={card.title} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Link
                  to={card.link}
                  className="btn btn-secondary"
                  style={{ width: 250, height: 40 }}
                >
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

export default IrrigationCards;
