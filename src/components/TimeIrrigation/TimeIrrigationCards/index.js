import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ModalPlant from "../TimeIrrigationModals/ModalPlant";
import ModalLine from "../TimeIrrigationModals/ModalLine";
import { createIrrigationTimeByLineComponentOverrides } from "../TimeIrrigationCalculate/CalculateLine";
import { createIrrigationTimeByPlantComponentOverrides } from "../TimeIrrigationCalculate/CalculatePlant";
import IrrigationSystemDesignService from "../../../services/irrigation_system_design_backend";
const irrigationSystemDesignService = new IrrigationSystemDesignService();

function IrrigationTimeCard(Atmospheric, SoilParams, Maximum) {
  const [loadingCalculate, setLoadingCalculate] = useState(false);
  const [resultIrrigationTime, setResultIrrigationTime] = useState(null);
  const [totalIrrigation, setTotalIrrigation] = useState("");
  const [spacingBetweenSideLines, setSpacingBetweenSideLines] = useState("");
  const [emitterFlow, setEmitterFlow] = useState("");
  const [spacingBetweenPlants, setSpacingBetweenPlants] = useState("");
  const [numberOfEmittersPerPlant, setNumberOfEmittersPerPlant] =
    useState(null);
  const [spacingBetweenEmitters, setSpacingbetweenEmitters] = useState(null);

  const IrrigationTimeByLineComponentOverrides =
    createIrrigationTimeByLineComponentOverrides({
      irrigationSystemDesignService,
      setLoadingCalculate,
      loadingCalculate,
      resultIrrigationTime,
      setResultIrrigationTime,
      totalIrrigation,
      setTotalIrrigation,
      spacingBetweenSideLines,
      setSpacingBetweenSideLines,
      emitterFlow,
      setEmitterFlow,
      spacingBetweenPlants,
      setSpacingBetweenPlants,
      numberOfEmittersPerPlant,
      setNumberOfEmittersPerPlant,
      spacingBetweenEmitters,
      setSpacingbetweenEmitters,
    });

  const IrrigationTimeByPlantComponentOverrides =
    createIrrigationTimeByPlantComponentOverrides({
      irrigationSystemDesignService,
      setLoadingCalculate,
      loadingCalculate,
      resultIrrigationTime,
      setResultIrrigationTime,
      totalIrrigation,
      setTotalIrrigation,
      spacingBetweenSideLines,
      setSpacingBetweenSideLines,
      emitterFlow,
      setEmitterFlow,
      spacingBetweenPlants,
      setSpacingBetweenPlants,
      numberOfEmittersPerPlant,
      setNumberOfEmittersPerPlant,
      spacingBetweenEmitters,
      setSpacingbetweenEmitters,
    });

  return (
    <Container style={{ marginTop: 50 }}>
      <Row>
        <Col xs={12} sm={6} md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={0} alt={0} />
            <Card.Body>
              <Card.Title>Irrigation time by plant</Card.Title>
              <ModalPlant
                IrrigationTimeByPlantComponentOverrides={
                  IrrigationTimeByPlantComponentOverrides
                }
                irrigationSystemDesignService={irrigationSystemDesignService}
                setLoadingCalculate={setLoadingCalculate}
                loadingCalculate={loadingCalculate}
                resultIrrigationTime={resultIrrigationTime}
                setResultIrrigationTime={setResultIrrigationTime}
                totalIrrigation={totalIrrigation}
                setTotalIrrigation={setTotalIrrigation}
                spacingBetweenSideLines={spacingBetweenSideLines}
                setSpacingBetweenSideLines={setSpacingBetweenSideLines}
                emitterFlow={emitterFlow}
                setEmitterFlow={setEmitterFlow}
                spacingBetweenPlants={spacingBetweenPlants}
                setSpacingBetweenPlants={setSpacingBetweenPlants}
                numberOfEmittersPerPlant={numberOfEmittersPerPlant}
                setNumberOfEmittersPerPlant={setNumberOfEmittersPerPlant}
                spacingBetweenEmitters={spacingBetweenEmitters}
                setSpacingbetweenEmitters={setSpacingbetweenEmitters}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={0} alt={0} />
            <Card.Body>
              <Card.Title>Irrigation time by line</Card.Title>
              <ModalLine
                IrrigationTimeByLineComponentOverrides={
                  IrrigationTimeByLineComponentOverrides
                }
                irrigationSystemDesignService={irrigationSystemDesignService}
                setLoadingCalculate={setLoadingCalculate}
                loadingCalculate={loadingCalculate}
                resultIrrigationTime={resultIrrigationTime}
                setResultIrrigationTime={setResultIrrigationTime}
                totalIrrigation={totalIrrigation}
                setTotalIrrigation={setTotalIrrigation}
                spacingBetweenSideLines={spacingBetweenSideLines}
                setSpacingBetweenSideLines={setSpacingBetweenSideLines}
                emitterFlow={emitterFlow}
                setEmitterFlow={setEmitterFlow}
                spacingBetweenPlants={spacingBetweenPlants}
                setSpacingBetweenPlants={setSpacingBetweenPlants}
                numberOfEmittersPerPlant={numberOfEmittersPerPlant}
                setNumberOfEmittersPerPlant={setNumberOfEmittersPerPlant}
                spacingBetweenEmitters={spacingBetweenEmitters}
                setSpacingbetweenEmitters={setSpacingbetweenEmitters}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default IrrigationTimeCard;
