import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

const cardData = [
  {
    title: "Reference Evapotranspiration",
    link: "/Evapotranspiration/ReferenceEvapotranspiration",
    imageSrc: "ReferenceEvapotranspiration-image-url.jpg",
  },
  {
    title: "Crop Evapotranspiration",
    link: "/Evapotranspiration/CropEvapotranspiration",
    imageSrc: "CropEvapotranspiration-image-url.jpg",
  },
];

function EvapotranspirationCards() {
  return (
    <Container>
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
                  style={{ width: 300, height: 40 }}
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

export default EvapotranspirationCards;
