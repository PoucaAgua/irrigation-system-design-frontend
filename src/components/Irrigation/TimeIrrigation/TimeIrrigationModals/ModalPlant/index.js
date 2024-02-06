import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ResultIrrigationTimeByPlant from "../../TimeIrrigationResultModal/ResultModalPlant";
import PlantInput from "../../TimeIrrigationInputs/InputPlant";

function Plant({
  irrigationSystemDesignService,
  setLoadingCalculate,
  loadingCalculate,
  resultIrrigationTimeByPlant,
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
  spacingNetweenEmitters,
  setSpacingNetweenEmitters,
  IrrigationTimeByPlantComponentOverrides,
}) {
  const [show, setShow] = useState(false);
  const [calculated, setCalculated] = useState(false);
  const handleClose = () => {
    setShow(false);
    setCalculated(false);
  };
  const handleShow = () => setShow(true);
  const handleCalculate = () => {
    IrrigationTimeByPlantComponentOverrides.CalculateButtonByPlant.onClick();
    setCalculated(true);

    if (totalIrrigation === "") {
      setTotalIrrigationError(true);
    }

    if (spacingBetweenSideLines === "") {
      setSpacingBetweenSideLinesError(true);
    }

    if (spacingBetweenPlants === "") {
      setSpacingBetweenPlantsError(true);
    }

    if (numberOfEmittersPerPlant === "") {
      setNumberOfEmittersPerPlantError(true);
    }

    if (emitterFlow === "") {
      setEmitterFlowError(true);
    }
  };

  const [numberOfEmittersPerPlantError, setNumberOfEmittersPerPlantError] =
    useState(false);
  const [spacingBetweenSideLinesError, setSpacingBetweenSideLinesError] =
    useState(false);
  const [spacingBetweenPlantsError, setSpacingBetweenPlantsError] =
    useState(false);
  const [totalIrrigationError, setTotalIrrigationError] = useState(false);
  const [emitterFlowError, setEmitterFlowError] = useState(false);

  const handleTotalIrrigationChange = (e) => {
    setTotalIrrigation(e.target.value);
    setTotalIrrigationError(false);
  };

  const handleSpacingBetweenSideLinesChange = (e) => {
    setSpacingBetweenSideLines(e.target.value);
    setSpacingBetweenSideLinesError(false);
  };

  const handleSpacingBetweenPlantsChange = (e) => {
    setSpacingBetweenPlants(e.target.value);
    setSpacingBetweenPlantsError(false);
  };

  const handleEmitterFlowChange = (e) => {
    setEmitterFlow(e.target.value);
    setEmitterFlowError(false);
  };

  const handleNumberOfEmittersPerPlantChange = (e) => {
    setNumberOfEmittersPerPlant(e.target.value);
    setNumberOfEmittersPerPlantError(false);
  };

  return (
    <div>
      <Button
        variant="secondary"
        onClick={handleShow}
        style={{ width: 250, height: 40 }}
      >
        Irrigation Time by Plant
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Irrigation Time by Plant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PlantInput
            totalIrrigation={totalIrrigation}
            setTotalIrrigation={setTotalIrrigation}
            spacingBetweenPlants={spacingBetweenPlants}
            setSpacingBetweenPlants={setSpacingBetweenPlants}
            spacingBetweenSideLines={spacingBetweenSideLines}
            setSpacingBetweenSideLines={setSpacingBetweenSideLines}
            numberOfEmittersPerPlant={numberOfEmittersPerPlant}
            setNumberOfEmittersPerPlant={setNumberOfEmittersPerPlant}
            emitterFlow={emitterFlow}
            setEmitterFlow={setEmitterFlow}
            numberOfEmittersPerPlantError={numberOfEmittersPerPlantError}
            spacingBetweenSideLinesError={spacingBetweenSideLinesError}
            spacingBetweenPlantsError={spacingBetweenPlantsError}
            totalIrrigationError={totalIrrigationError}
            emitterFlowError={emitterFlowError}
            handleTotalIrrigationChange={handleTotalIrrigationChange}
            handleSpacingBetweenSideLinesChange={
              handleSpacingBetweenSideLinesChange
            }
            handleSpacingBetweenPlantsChange={handleSpacingBetweenPlantsChange}
            handleEmitterFlowChange={handleEmitterFlowChange}
            handleNumberOfEmittersPerPlantChange={
              handleNumberOfEmittersPerPlantChange
            }
          />
          {calculated && (
            <ResultIrrigationTimeByPlant
              resultIrrigationTimeByPlant={resultIrrigationTimeByPlant}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCalculate}>
            Calculate
          </Button>
          <Button
            variant="success"
            onClick={
              IrrigationTimeByPlantComponentOverrides
                .SaveButtonIrrigationByPlant.onClick
            }
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Plant;
