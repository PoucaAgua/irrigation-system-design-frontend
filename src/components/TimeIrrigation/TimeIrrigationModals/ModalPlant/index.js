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
