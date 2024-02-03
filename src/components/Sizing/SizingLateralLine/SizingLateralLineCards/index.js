import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ModalDiameter from "../SizingLateralLineModals/Diameter";
import ModalHead from "../SizingLateralLineModals/HeadLoss";
import { createSizingHeadComponentOverrides } from "../SizingLateralLineCalculate/HeadLoss";
import { createSizingDiameterComponentOverrides } from "../SizingLateralLineCalculate/Diameter";
import IrrigationSystemDesignService from "../../../../services/irrigation_system_design_backend";
const irrigationSystemDesignService = new IrrigationSystemDesignService();

function SizingLateralCard(Diameter, Head) {
  const [loadingCalculate, setLoadingCalculate] = useState(false);
  const [resultSizingHead, setResultSizingHead] = useState(null);
  const [resultDiameter, setResultDiameter] = useState(null);
  const [servicePressure, setServicePressure] = useState("");
  const [nominalFlow, setNominalFlow] = useState("");
  const [maxFlow, setMaxFlow] = useState("");
  const [internalDiameter, setInternalDiameter] = useState("");
  const [emitterSpacing, setEmitterSpacing] = useState("");
  const [flowExponent, setFlowExponent] = useState("");
  const [exponentPressure, setExponentPressure] = useState("");
  const [coefficient, setCoefficient] = useState("");
  const [lengthLateral, setLengthLateral] = useState("");

  const SizingDiameterComponentOverrides =
    createSizingDiameterComponentOverrides({
      irrigationSystemDesignService,
      loadingCalculate,
      setLoadingCalculate,
      resultDiameter,
      setResultDiameter,
      servicePressure,
      setServicePressure,
      nominalFlow,
      setNominalFlow,
      maxFlow,
      setMaxFlow,
      internalDiameter,
      setInternalDiameter,
      emitterSpacing,
      setEmitterSpacing,
      flowExponent,
      setFlowExponent,
      exponentPressure,
      setExponentPressure,
      coefficient,
      setCoefficient,
      Diameter,
    });

  const SizingHeadComponentOverrides = createSizingHeadComponentOverrides({
    irrigationSystemDesignService,
    loadingCalculate,
    setLoadingCalculate,
    resultSizingHead,
    setResultSizingHead,
    nominalFlow,
    setNominalFlow,
    emitterSpacing,
    setEmitterSpacing,
    internalDiameter,
    setInternalDiameter,
    lengthLateral,
    setLengthLateral,
    Head,
  });

  return (
    <Container style={{ marginTop: 50 }}>
      <Row>
        <Col xs={12} sm={6} md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={0} alt={0} />
            <Card.Body>
              <Card.Title>Diameter</Card.Title>
              <ModalDiameter
                SizingDiameterComponentOverrides={
                  SizingDiameterComponentOverrides
                }
                resultDiameter={resultDiameter}
                servicePressure={servicePressure}
                setServicePressure={setServicePressure}
                nominalFlow={nominalFlow}
                setNominalFlow={setNominalFlow}
                maxFlow={maxFlow}
                setMaxFlow={setMaxFlow}
                internalDiameter={internalDiameter}
                setInternalDiameter={setInternalDiameter}
                emitterSpacing={emitterSpacing}
                setEmitterSpacing={setEmitterSpacing}
                flowExponent={flowExponent}
                setFlowExponent={setFlowExponent}
                exponentPressure={exponentPressure}
                setExponentPressure={setExponentPressure}
                coefficient={coefficient}
                setCoefficient={setCoefficient}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={0} alt={0} />
            <Card.Body>
              <Card.Title>Head Loss</Card.Title>
              <ModalHead
                SizingHeadComponentOverrides={SizingHeadComponentOverrides}
                resultSizingHead={resultSizingHead}
                nominalFlow={nominalFlow}
                setNominalFlow={setNominalFlow}
                emitterSpacing={emitterSpacing}
                setEmitterSpacing={setEmitterSpacing}
                internalDiameter={internalDiameter}
                setInternalDiameter={setInternalDiameter}
                lengthLateral={lengthLateral}
                setLengthLateral={setLengthLateral}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SizingLateralCard;
