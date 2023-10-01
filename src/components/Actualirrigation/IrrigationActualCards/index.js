import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ModalAtmospheric from "../IrrigationActualModals/irrigation_by_atmospheric";
import ModalSoil from "../IrrigationActualModals/irrigation_by_soil";
import ModalMaximum from "../IrrigationActualModals/maximum_actual_irrigation";

function IrrigationCardActual() {
  return (
    <Container style={{ marginTop: 50 }}>
      <Row>
        <Col xs={12} sm={6} md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={0} alt={0} />
            <Card.Body>
              <Card.Title>Actual irrigation by soil params</Card.Title>
              <ModalSoil />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={0} alt={0} />
            <Card.Body>
              <Card.Title>Actual irrigation by atmospheric params</Card.Title>
              <ModalAtmospheric />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={0} alt={0} />
            <Card.Body>
              <Card.Title>Maximum actual irrigation</Card.Title>
              <ModalMaximum />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default IrrigationCardActual;
