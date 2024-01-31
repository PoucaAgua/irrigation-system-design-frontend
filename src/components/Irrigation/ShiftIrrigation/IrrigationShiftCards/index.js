import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ModalShiftIrrigation from "../IrrigationShiftModal";
import { createShiftComponentOverrides } from "../IrrigationShiftCalculate";
import IrrigationSystemDesignService from "../../../../services/irrigation_system_design_backend";
const irrigationSystemDesignService = new IrrigationSystemDesignService();

function IrrigationCardShift(ShiftIrrigation) {
  const [loadingCalculate, setLoadingCalculate] = useState(false);
  const [resultShift, setResultShift] = useState(null);
  const [actualIrrigation, setActualIrrigation] = useState("");
  const [cropEvapotranspiration, setCropEvapotranspiration] = useState("");

  const ShiftComponentOverrides = createShiftComponentOverrides({
    irrigationSystemDesignService,
    setLoadingCalculate,
    loadingCalculate,
    resultShift,
    setResultShift,
    ShiftIrrigation,
    actualIrrigation,
    setActualIrrigation,
    cropEvapotranspiration,
    setCropEvapotranspiration,
    createShiftComponentOverrides,
  });

  return (
    <Container style={{ marginTop: 50 }}>
      <Row>
        <Col xs={12} sm={6} md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={0} alt={0} />
            <Card.Body>
              <Card.Title>Maximum irrigation shift</Card.Title>
              <ModalShiftIrrigation
                ShiftComponentOverrides={ShiftComponentOverrides}
                irrigationSystemDesignService={irrigationSystemDesignService}
                resultShift={resultShift}
                setResultShift={setResultShift}
                actualIrrigation={actualIrrigation}
                setActualIrrigation={setActualIrrigation}
                cropEvapotranspiration={cropEvapotranspiration}
                setCropEvapotranspiration={setCropEvapotranspiration}
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

export default IrrigationCardShift;
