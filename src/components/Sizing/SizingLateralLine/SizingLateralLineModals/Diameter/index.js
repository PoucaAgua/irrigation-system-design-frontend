import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ResultDiameter from "../../SizingLateralLineResultModal/ResultModalDiameter";
import DiameterInput from "../../SizingLateralLineInputs/Diameter";

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
          <DiameterInput
            servicePressure={servicePressure}
            setServicePressure={setServicePressure}
            nominalFlow={nominalFlow}
            setNominalFlow={setNominalFlow}
            maxFlow={maxFlow}
            setMaxFlow={setMaxFlow}
            internalDiameter={internalDiameter}
            setInternalDiameter={setInternalDiameter}
            emitterSpacing={emitterSpacing}
            setEmitterSpacing={setEmitterSpacing}
            flowExponent={flowExponent}
            setFlowExponent={setFlowExponent}
            exponentPressure={exponentPressure}
            setExponentPressure={setExponentPressure}
            coefficient={coefficient}
            setCoefficient={setCoefficient}
          />
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
