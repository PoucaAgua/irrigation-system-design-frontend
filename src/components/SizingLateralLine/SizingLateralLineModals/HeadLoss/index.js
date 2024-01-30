import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ResultSizingHead from "../../SizingLateralLineResultModal/ResultModalHead";

function SizingHead({
  SizingHeadComponentOverrides,
  resultSizingHead,
  nominalFlow,
  setNominalFlow,
  emitterSpacing,
  setEmitterSpacing,
  internalDiameter,
  setInternalDiameter,
  lengthLateral,
  setLengthLateral,
}) {
  const [show, setShow] = useState(false);
  const [calculated, setCalculated] = useState(false);
  const handleClose = () => {
    setShow(false);
    setCalculated(false);
  };
  const handleShow = () => setShow(true);
  const handleCalculate = () => {
    SizingHeadComponentOverrides.CalculateLateralHead.onClick();
    setCalculated(true);
  };

  return (
    <div>
      <Button
        variant="secondary"
        onClick={handleShow}
        style={{ width: 250, height: 40 }}
      >
        Head Loss
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Head Loss</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="input mb-3 d-flex flex-column"
            style={{ marginLeft: "10%", marginRight: "10%" }}
          >
            <label className="left-label" htmlFor="input1">
              Length lateral line
            </label>
            <input
              id="input1"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={lengthLateral}
              onChange={(e) => setLengthLateral(e.target.value)}
            />

            <label className="left-label" htmlFor="input2">
              Internal diameter
            </label>
            <input
              id="input2"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={internalDiameter}
              onChange={(e) => setInternalDiameter(e.target.value)}
            />

            <label className="left-label" htmlFor="input3">
              Emitter spacing
            </label>
            <input
              id="input3"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={emitterSpacing}
              onChange={(e) => setEmitterSpacing(e.target.value)}
            />

            <label className="left-label" htmlFor="input4">
              Nominal flow rate
            </label>
            <input
              id="input4"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={nominalFlow}
              onChange={(e) => setNominalFlow(e.target.value)}
            />
          </div>

          {calculated && (
            <ResultSizingHead resultSizingHead={resultSizingHead} />
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
            onClick={SizingHeadComponentOverrides.SaveButtonLateralHead.onClick}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SizingHead;
