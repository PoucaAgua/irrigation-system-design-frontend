import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ResultDiameter from "../../SizingLateralLineResultModal/ResultModalDiameter";

function SizingDiameter({
  SizingDiameterComponentOverrides,
  resultDiameter,
  servicePressure,
  setServicePressure,
  nominalFlow,
  setNominalFlow,
  maxFlow,
  setMaxFlow,
  internalDiameter,
  setInternalDiameter,
  emitterSpacing,
  setEmitterSpacing,
  flowExponent,
  setFlowExponent,
  exponentPressure,
  setExponentPressure,
  coefficient,
  setCoefficient,
}) {
  const [show, setShow] = useState(false);
  const [calculated, setCalculated] = useState(false);
  const handleClose = () => {
    setShow(false);
    setCalculated(false);
  };
  const handleShow = () => setShow(true);
  const handleCalculate = () => {
    SizingDiameterComponentOverrides.CalculateLateralDiameter.onClick();
    setCalculated(true);
  };

  return (
    <div>
      <Button
        variant="secondary"
        onClick={handleShow}
        style={{ width: 250, height: 40 }}
      >
        Diameter
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Diameter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="input mb-3 d-flex flex-column"
            style={{ marginLeft: "10%", marginRight: "10%" }}
          >
            <label className="left-label" htmlFor="input1">
              Service pressure
            </label>
            <input
              id="input1"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={servicePressure}
              onChange={(e) => setServicePressure(e.target.value)}
            />

            <label className="left-label" htmlFor="input2">
              Nominal flow rate
            </label>
            <input
              id="input2"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={nominalFlow}
              onChange={(e) => setNominalFlow(e.target.value)}
            />

            <label className="left-label" htmlFor="input2">
              Max flow rate variation
            </label>
            <input
              id="input2"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={maxFlow}
              onChange={(e) => setMaxFlow(e.target.value)}
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

            <label className="left-label" htmlFor="input2">
              Emitter spacing
            </label>
            <input
              id="input2"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={emitterSpacing}
              onChange={(e) => setEmitterSpacing(e.target.value)}
            />

            <label className="left-label" htmlFor="input2">
              Flow exponent
            </label>
            <input
              id="input2"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={flowExponent}
              onChange={(e) => setFlowExponent(e.target.value)}
            />

            <label className="left-label" htmlFor="input2">
              Exponent pressure losse quation
            </label>
            <input
              id="input2"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={exponentPressure}
              onChange={(e) => setExponentPressure(e.target.value)}
            />

            <label className="left-label" htmlFor="input2">
              Coefficient
            </label>
            <input
              id="input2"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={coefficient}
              onChange={(e) => setCoefficient(e.target.value)}
            />
          </div>

          {calculated && <ResultDiameter resultDiameter={resultDiameter} />}
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
              SizingDiameterComponentOverrides.SaveButtonLateralDiameter.onClick
            }
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SizingDiameter;
