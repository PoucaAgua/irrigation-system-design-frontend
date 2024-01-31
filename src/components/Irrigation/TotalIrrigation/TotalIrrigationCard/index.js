import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ModalTotalIrrigation from "../TotalIrrigationModal/index";
import { createTotalComponentOverrides } from "../TotalIrrigationCalculate/index";
import IrrigationSystemDesignService from "../../../../services/irrigation_system_design_backend";
const irrigationSystemDesignService = new IrrigationSystemDesignService();

function IrrigationCardTotal(TotalIrrigation) {
  const [loadingCalculate, setLoadingCalculate] = useState(false);
  const [resultTotal, setResultTotal] = useState(null);

  const [actualIrrigation, setActualIrrigation] = useState("");
  const [
    electricalConductivityIrrigation,
    setElectricalConductivityIrrigation,
  ] = useState("");
  const [
    electricalConductivitySaturation,
    setElectricalConductivitySaturation,
  ] = useState("");
  const [leachingFraction, setLeachingFraction] = useState("");
  const [efficiency, setEfficiency] = useState("");

  const TotalComponentOverrides = createTotalComponentOverrides({
    irrigationSystemDesignService,
    setLoadingCalculate,
    loadingCalculate,
    resultTotal,
    setResultTotal,
    TotalIrrigation,
    actualIrrigation,
    setActualIrrigation,
    electricalConductivityIrrigation,
    setElectricalConductivityIrrigation,
    electricalConductivitySaturation,
    setElectricalConductivitySaturation,
    leachingFraction,
    setLeachingFraction,
    efficiency,
    setEfficiency,
  });

  return (
    <Container style={{ marginTop: 50 }}>
      <Row>
        <Col xs={12} sm={6} md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={0} alt={0} />
            <Card.Body>
              <Card.Title>Total irrigation</Card.Title>
              <ModalTotalIrrigation
                TotalComponentOverrides={TotalComponentOverrides}
                irrigationSystemDesignService={irrigationSystemDesignService}
                resultTotal={resultTotal}
                setResultTotal={setResultTotal}
                TotalIrrigation={TotalIrrigation}
                actualIrrigation={actualIrrigation}
                setActualIrrigation={setActualIrrigation}
                electricalConductivityIrrigation={
                  electricalConductivityIrrigation
                }
                setElectricalConductivityIrrigation={
                  setElectricalConductivityIrrigation
                }
                electricalConductivitySaturation={
                  electricalConductivitySaturation
                }
                setElectricalConductivitySaturation={
                  setElectricalConductivitySaturation
                }
                leachingFraction={leachingFraction}
                setLeachingFraction={setLeachingFraction}
                efficiency={efficiency}
                setEfficiency={setEfficiency}
                loadingCalculate={loadingCalculate}
                setLoadingCalculate={setLoadingCalculate}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default IrrigationCardTotal;
