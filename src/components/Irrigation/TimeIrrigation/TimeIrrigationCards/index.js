import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ModalPlant from "../TimeIrrigationModals/ModalPlant";
import ModalLine from "../TimeIrrigationModals/ModalLine";
import { createIrrigationTimeByLineComponentOverrides } from "../TimeIrrigationCalculate/CalculateLine";
import { createIrrigationTimeByPlantComponentOverrides } from "../TimeIrrigationCalculate/CalculatePlant";
import IrrigationSystemDesignService from "../../../../services/irrigation_system_design_backend";
const irrigationSystemDesignService = new IrrigationSystemDesignService();

function IrrigationTimeCard(IrrigationByLine, IrrigationByPlant) {
  const [loadingCalculate, setLoadingCalculate] = useState(false);
  const [resultIrrigationTimeByLine, setResultIrrigationTimeByLine] =
    useState(null);
  const [resultIrrigationTimeByPlant, setResultIrrigationTimeByPlant] =
    useState(null);
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
      setResultIrrigationTimeByLine,
      totalIrrigation,
      setTotalIrrigation,
      spacingBetweenSideLines,
      setSpacingBetweenSideLines,
      emitterFlow,
      setEmitterFlow,
      spacingBetweenEmitters,
      setSpacingbetweenEmitters,
      IrrigationByLine,
    });

  const IrrigationTimeByPlantComponentOverrides =
    createIrrigationTimeByPlantComponentOverrides({
      irrigationSystemDesignService,
      setLoadingCalculate,
      loadingCalculate,
      setResultIrrigationTimeByPlant,
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
      IrrigationByPlant,
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
                resultIrrigationTimeByPlant={resultIrrigationTimeByPlant}
                setResultIrrigationTimeByPlant={setResultIrrigationTimeByPlant}
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
                IrrigationByLine={IrrigationByLine}
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
                resultIrrigationTimeByLine={resultIrrigationTimeByLine}
                setResultIrrigationTimeByLine={setResultIrrigationTimeByLine}
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
                IrrigationByLine={IrrigationByLine}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default IrrigationTimeCard;
