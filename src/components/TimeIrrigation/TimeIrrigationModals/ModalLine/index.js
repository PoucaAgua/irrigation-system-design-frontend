import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ResultIrrigationTimeByLine from "../ResultModalLine";

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
          <div
            className="input mb-3 d-flex flex-column"
            style={{ marginLeft: "10%", marginRight: "10%" }}
          >
            <label className="left-label" htmlFor="input1">
              Total irrigation
            </label>
            <input
              id="input1"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={totalIrrigation}
              onChange={(e) => setTotalIrrigation(e.target.value)}
            />

            <label className="left-label" htmlFor="input2">
              Spacing between side lines
            </label>
            <input
              id="input2"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={spacingBetweenSideLines}
              onChange={(e) => setSpacingBetweenSideLines(e.target.value)}
            />
            <label className="left-label" htmlFor="input3">
              Spacing between emitters
            </label>
            <input
              id="input3"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={spacingBetweenEmitters}
              onChange={(e) => setSpacingbetweenEmitters(e.target.value)}
            />

            <label className="left-label" htmlFor="input4">
              Emitter flow
            </label>
            <input
              id="input4"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={emitterFlow}
              onChange={(e) => setEmitterFlow(e.target.value)}
            />
          </div>

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
          <Button variant="primary" onClick={ handleCalculate}>
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
