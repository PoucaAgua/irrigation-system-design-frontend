import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ResultSizingHead from "../../SizingLateralLineResultModal/ResultModalHead";
import HeadInput from "../../SizingLateralLineInputs/HeadLoss";

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

    if (nominalFlow === "") {
      setNominalFlowError(true);
    }

    if (emitterSpacing === "") {
      setEmitterSpacingError(true);
    }

    if (internalDiameter === "") {
      setInternalDiameterError(true);
    }

    if (lengthLateral === "") {
      setLengthLateralError(true);
    }
  };
  const [nominalFlowError, setNominalFlowError] = useState(false);
  const [emitterSpacingError, setEmitterSpacingError] = useState(false);
  const [internalDiameterError, setInternalDiameterError] = useState(false);
  const [lengthLateralError, setLengthLateralError] = useState(false);

  const handleNominalFlowChange = (e) => {
    setNominalFlow(e.target.value);
    setNominalFlowError(false);
  };

  const handleEmitterSpacingChange = (e) => {
    setEmitterSpacing(e.target.value);
    setEmitterSpacingError(false);
  };

  const handleInternalDiameterChange = (e) => {
    setInternalDiameter(e.target.value);
    setInternalDiameterError(false);
  };

  const handleLengthLateralChange = (e) => {
    setLengthLateral(e.target.value);
    setLengthLateralError(false);
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
          <HeadInput
            lengthLateral={lengthLateral}
            setLengthLateral={setLengthLateral}
            internalDiameter={internalDiameter}
            setInternalDiameter={setInternalDiameter}
            emitterSpacing={emitterSpacing}
            setEmitterSpacing={setEmitterSpacing}
            nominalFlow={nominalFlow}
            setNominalFlow={setNominalFlow}
            nominalFlowError={nominalFlowError}
            emitterSpacingError={emitterSpacingError}
            internalDiameterError={internalDiameterError}
            lengthLateralError={lengthLateralError}
            handleNominalFlowChange={handleNominalFlowChange}
            handleEmitterSpacingChange={handleEmitterSpacingChange}
            handleInternalDiameterChange={handleInternalDiameterChange}
            handleLengthLateralChange={handleLengthLateralChange}
          />
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
