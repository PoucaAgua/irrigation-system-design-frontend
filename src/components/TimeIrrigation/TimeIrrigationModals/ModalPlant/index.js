import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ResultIrrigationTimeByPlant from "../../TimeIrrigationResultModal/ResultModalPlant";

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
              Spacing between plants
            </label>
            <input
              id="input2"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={spacingBetweenPlants}
              onChange={(e) => setSpacingBetweenPlants(e.target.value)}
            />

            <label className="left-label" htmlFor="input3">
              Spacing between side lines
            </label>
            <input
              id="input3"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={spacingBetweenSideLines}
              onChange={(e) => setSpacingBetweenSideLines(e.target.value)}
            />
            <label className="left-label" htmlFor="input4">
              Number of emitters per plant
            </label>
            <input
              id="input4"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={numberOfEmittersPerPlant}
              onChange={(e) => setNumberOfEmittersPerPlant(e.target.value)}
            />

            <label className="left-label" htmlFor="input5">
              Emitter flow
            </label>
            <input
              id="input5"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={emitterFlow}
              onChange={(e) => setEmitterFlow(e.target.value)}
            />
          </div>

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
