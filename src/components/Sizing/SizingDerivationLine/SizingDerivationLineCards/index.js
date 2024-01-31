import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ModalDiameter from "../SizingDerivationLineModals/Diameter";
import ModalLoad from "../SizingDerivationLineModals/Load_loss";
import { createSizingLoadComponentOverrides } from "../SizingDerivationLineCalculate/Load_loss";
import { createSizingDiameterComponentOverrides } from "../SizingDerivationLineCalculate/Diameter";
import IrrigationSystemDesignService from "../../../../services/irrigation_system_design_backend";
const irrigationSystemDesignService = new IrrigationSystemDesignService();

function SizingDerivationCard(Diameter, Load) {
  const [loadingCalculate, setLoadingCalculate] = useState(false);
  const [resultSizingLoad, setResultSizingLoad] = useState(null);
  const [resultDiameter, setResultDiamater] = useState(null);
  const [speedMax, setSpeedMax] = useState("");
  const [demandFlow, setDemandFlow] = useState("");
  const [diameterDerivation, setDiameterDerivation] = useState("");
  const [noutputs, setNoutputs] = useState("");
  const [flow, setFlow] = useState("");
  const [lengthDerivation, setLengthDerivation] = useState("");

  const SizingDiameterComponentOverrides =
    createSizingDiameterComponentOverrides({
      irrigationSystemDesignService,
      loadingCalculate,
      setLoadingCalculate,
      resultDiameter,
      setResultDiamater,
      speedMax,
      setSpeedMax,
      demandFlow,
      setDemandFlow,
      Diameter,
    });

  const SizingLoadComponentOverrides = createSizingLoadComponentOverrides({
    irrigationSystemDesignService,
    loadingCalculate,
    setLoadingCalculate,
    resultSizingLoad,
    setResultSizingLoad,
    diameterDerivation,
    setDiameterDerivation,
    noutputs,
    setNoutputs,
    flow,
    setFlow,
    lengthDerivation,
    setLengthDerivation,
    Load,
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
                speedMax={speedMax}
                setSpeedMax={setSpeedMax}
                demandFlow={demandFlow}
                setDemandFlow={setDemandFlow}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={0} alt={0} />
            <Card.Body>
              <Card.Title>Load Loss</Card.Title>
              <ModalLoad
                SizingLoadComponentOverrides={SizingLoadComponentOverrides}
                resultSizingLoad={resultSizingLoad}
                diameterDerivation={diameterDerivation}
                setDiameterDerivation={setDiameterDerivation}
                noutputs={noutputs}
                setNoutputs={setNoutputs}
                flow={flow}
                setFlow={setFlow}
                lengthDerivation={lengthDerivation}
                setLengthDerivation={setLengthDerivation}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SizingDerivationCard;
