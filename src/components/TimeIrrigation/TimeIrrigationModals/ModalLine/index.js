import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Line({
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
  IrrigationTimeByPlantComponentOverrides,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <div className="input mb-3 d-flex flex-column align-items-center">
            <label
              className="left-label"
              htmlFor="input1"
              style={{ marginRight: "66%" }}
            >
              Total irrigation
            </label>
            <input
              id="input1"
              type="text"
              placeholder=""
              className="form-control mb-3"
              style={{ width: "330px" }}
              value={totalIrrigation}
              onChange={(e) => setTotalIrrigation(e.target.value)}
            />

            <label
              className="left-label"
              htmlFor="input3"
              style={{ marginRight: "31%" }}
            >
              Spacing between side lines
            </label>
            <input
              id="input3"
              type="text"
              placeholder=""
              className="form-control mb-3"
              style={{ width: "330px" }}
              value={spacingBetweenSideLines}
              onChange={(e) => setSpacingBetweenSideLines(e.target.value)}
            />
            <label
              className="left-label"
              htmlFor="input3"
              style={{ marginRight: "31%" }}
            >
              Spacing between emitters
            </label>
            <input
              id="input3"
              type="text"
              placeholder=""
              className="form-control mb-3"
              style={{ width: "330px" }}
              value={spacingBetweenEmitters}
              onChange={(e) => setSpacingbetweenEmitters(e.target.value)}
            />

            <label
              className="left-label"
              htmlFor="input3"
              style={{ marginRight: "31%" }}
            >
              Emitter flow
            </label>
            <input
              id="input3"
              type="text"
              placeholder=""
              className="form-control mb-3"
              style={{ width: "330px" }}
              value={emitterFlow}
              onChange={(e) => setEmitterFlow(e.target.value)}
            />
          </div>

          {resultIrrigationTime !== null && (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "60%", height: "40%" }}>
                <table className="table table-bordered border-secondary">
                  <thead>
                    <tr>
                      <th scope="col">Irrigation Time by Line Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{resultIrrigationTime}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={
              IrrigationTimeByPlantComponentOverrides
                .CalculateButtonIrrigationByLine.onClick
            }
          >
            Calculate
          </Button>
          <Button
            variant="success"
            onClick={
              IrrigationTimeByPlantComponentOverrides.SaveButtonIrrigationByLine
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
