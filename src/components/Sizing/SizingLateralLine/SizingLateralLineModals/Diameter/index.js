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

    if (coefficient === "") {
      setCoefficientError(true);
    }

    if (exponentPressure === "") {
      setExponentPressureError(true);
    }

    if (flowExponent === "") {
      setFlowExponentError(true);
    }

    if (emitterSpacing === "") {
      setEmitterSpacingError(true);
    }

    if (internalDiameter === "") {
      setInternalDiameterError(true);
    }

    if (maxFlow === "") {
      setMaxFlowError(true);
    }

    if (nominalFlow === "") {
      setNominalFlowError(true);
    }

    if (servicePressure === "") {
      setServicePressureError(true);
    }
  };
  const [coefficientError, setCoefficientError] = useState(false);
  const [exponentPressureError, setExponentPressureError] = useState(false);
  const [flowExponentError, setFlowExponentError] = useState(false);
  const [emitterSpacingError, setEmitterSpacingError] = useState(false);
  const [internalDiameterError, setInternalDiameterError] = useState(false);
  const [maxFlowError, setMaxFlowError] = useState(false);
  const [nominalFlowError, setNominalFlowError] = useState(false);
  const [servicePressureError, setServicePressureError] = useState(false);

  const handleCoefficientChange = (e) => {
    setCoefficient(e.target.value);
    setCoefficientError(false);
  };

  const handleExponentPressureChange = (e) => {
    setExponentPressure(e.target.value);
    setExponentPressureError(false);
  };

  const handleFlowExponentChange = (e) => {
    setFlowExponent(e.target.value);
    setFlowExponentError(false);
  };

  const handleInternalDiameterChange = (e) => {
    setInternalDiameter(e.target.value);
    setInternalDiameterError(false);
  };

  const handleEmitterSpacingChange = (e) => {
    setEmitterSpacing(e.target.value);
    setEmitterSpacingError(false);
  };

  const handleMaxFlowChange = (e) => {
    setMaxFlow(e.target.value);
    setMaxFlowError(false);
  };

  const handleNominalFlowChange = (e) => {
    setNominalFlow(e.target.value);
    setNominalFlowError(false);
  };

  const handleServicePressureChange = (e) => {
    setServicePressure(e.target.value);
    setServicePressureError(false);
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
            coefficientError={coefficientError}
            exponentPressureError={exponentPressureError}
            flowExponentError={flowExponentError}
            emitterSpacingError={emitterSpacingError}
            internalDiameterError={internalDiameterError}
            maxFlowError={maxFlowError}
            nominalFlowError={nominalFlowError}
            servicePressureError={servicePressureError}
            handleCoefficientChange={handleCoefficientChange}
            handleExponentPressureChange={handleExponentPressureChange}
            handleInternalDiameterChange={handleInternalDiameterChange}
            handleFlowExponentChange={handleFlowExponentChange}
            handleEmitterSpacingChange={handleEmitterSpacingChange}
            handleMaxFlowChange={handleMaxFlowChange}
            handleNominalFlowChange={handleNominalFlowChange}
            handleServicePressureChange={handleServicePressureChange}
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
