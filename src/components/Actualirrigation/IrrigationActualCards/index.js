import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

const cardData = [
  {
    title: "actual irrigation by soil params",
    link: "/irrigation/actual_irrigation",
    imageSrc: "actual-irrigation-image-url.jpg",
  },
  {
    title: "actual irrigation by atmospheric params",
    link: "/irrigation/actual_irrigation",
    imageSrc: "actual-irrigation-image-url.jpg",
  },
  {
    title: "maximum actual irrigation",
    link: "/irrigation/actual_irrigation",
    imageSrc: "actual-irrigation-image-url.jpg",
  },
];

function IrrigationCardActual() {
  return (
    <Container style={{ marginTop: 50 }}>
      <Row>
        {cardData.map((card, index) => (
          <Col key={index} xs={12} sm={6} md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={card.imageSrc} alt={card.title} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Link
                  to={card.link}
                  className="btn btn-secondary"
                  style={{ width: 250, height: 40 }}
                >
                  {card.title}
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default IrrigationCardActual;
