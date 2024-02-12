import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ResultIrrigationTimeByLine from "../../TimeIrrigationResultModal/ResultModalLine";
import LineInput from "../../TimeIrrigationInputs/InputLine";

function Line({
  irrigationSystemDesignService,
  setLoadingCalculate,
  loadingCalculate,
  resultIrrigationTimeByLine,
  setResultIrrigationTimeByLine,
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
  IrrigationTimeByLineComponentOverrides,
}) {
  const [show, setShow] = useState(false);
  const [calculated, setCalculated] = useState(false);
  const handleClose = () => {
    setShow(false);
    setCalculated(false);
  };
  const handleShow = () => setShow(true);
  const handleCalculate = () => {
    IrrigationTimeByLineComponentOverrides.CalculateButtonByLine.onClick();
    setCalculated(true);

    if (totalIrrigation === "") {
      setTotalIrrigationError(true);
    }

    if (spacingBetweenSideLines === "") {
      setSpacingBetweenSideLinesError(true);
    }

    if (spacingBetweenEmitters === "") {
      setSpacingBetweenEmittersError(true);
    }

    if (emitterFlow === "") {
      setEmitterFlowError(true);
    }
  };

  const [totalIrrigationError, setTotalIrrigationError] = useState(false);
  const [spacingBetweenSideLinesError, setSpacingBetweenSideLinesError] =
    useState(false);
  const [spacingBetweenEmittersError, setSpacingBetweenEmittersError] =
    useState(false);
  const [emitterFlowError, setEmitterFlowError] = useState(false);

  const handleTotalIrrigationChange = (e) => {
    setTotalIrrigation(e.target.value);
    setTotalIrrigationError(false);
  };

  const handleSpacingBetweenSideLinesChange = (e) => {
    setSpacingBetweenSideLines(e.target.value);
    setSpacingBetweenSideLinesError(false);
  };

  const handleSpacingBetweenEmittersChange = (e) => {
    setSpacingbetweenEmitters(e.target.value);
    setSpacingBetweenEmittersError(false);
  };

  const handleEmitterFlowChange = (e) => {
    setEmitterFlow(e.target.value);
    setEmitterFlowError(false);
  };

  return (
    <div>
      <Button
        variant="secondary"
        onClick={handleShow}
        style={{ width: 250, height: 40 }}
      >
        Irrigation Time by Line
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Irrigation Time by Line</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LineInput
            totalIrrigation={totalIrrigation}
            setTotalIrrigation={setTotalIrrigation}
            spacingBetweenSideLines={spacingBetweenSideLines}
            setSpacingBetweenSideLines={setSpacingBetweenSideLines}
            spacingBetweenEmitters={spacingBetweenEmitters}
            setSpacingbetweenEmitters={setSpacingbetweenEmitters}
            emitterFlow={emitterFlow}
            setEmitterFlow={setEmitterFlow}
            totalIrrigationError={totalIrrigationError}
            handleTotalIrrigationChange={handleTotalIrrigationChange}
            spacingBetweenSideLinesError={spacingBetweenSideLinesError}
            handleSpacingBetweenSideLinesChange={
              handleSpacingBetweenSideLinesChange
            }
            spacingBetweenEmittersError={spacingBetweenEmittersError}
            handleSpacingBetweenEmittersChange={
              handleSpacingBetweenEmittersChange
            }
            emitterFlowError={emitterFlowError}
            handleEmitterFlowChange={handleEmitterFlowChange}
          />
          {calculated && (
            <ResultIrrigationTimeByLine
              resultIrrigationTimeByLine={resultIrrigationTimeByLine}
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
              IrrigationTimeByLineComponentOverrides.SaveButtonIrrigationByLine
                .onClick
            }
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Line;
