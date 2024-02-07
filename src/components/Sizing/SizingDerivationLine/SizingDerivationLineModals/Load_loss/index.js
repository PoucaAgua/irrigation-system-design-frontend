import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ResultLoad from "../../SizingDerivationLineResultModal/ResultModalLoad";
import LoadInput from "../../SizingDerivationLineInputs/Load_loss";

function SizingLoad({
  SizingLoadComponentOverrides,
  resultSizingLoad,
  diameterDerivation,
  setDiameterDerivation,
  noutputs,
  setNoutputs,
  flow,
  setFlow,
  lengthDerivation,
  setLengthDerivation,
}) {
  const [show, setShow] = useState(false);
  const [calculated, setCalculated] = useState(false);
  const handleClose = () => {
    setShow(false);
    setCalculated(false);
  };
  const handleShow = () => setShow(true);
  const handleCalculate = () => {
    SizingLoadComponentOverrides.CalculateDerivationLoad.onClick();
    setCalculated(true);

    if (diameterDerivation === "") {
      setDiameterDerivationError(true);
    }

    if (lengthDerivation === "") {
      setLengthDerivationError(true);
    }

    if (noutputs === "") {
      setNoutputsError(true);
    }

    if (flow === "") {
      setFlowError(true);
    }
  };
  const [diameterDerivationError, setDiameterDerivationError] = useState(false);
  const [lengthDerivationError, setLengthDerivationError] = useState(false);
  const [noutputsError, setNoutputsError] = useState(false);
  const [flowError, setFlowError] = useState(false);

  const handleDiameterDerivationChange = (e) => {
    setDiameterDerivation(e.target.value);
    setDiameterDerivationError(false);
  };

  const handleLengthDerivationChange = (e) => {
    setLengthDerivation(e.target.value);
    setLengthDerivationError(false);
  };

  const handleNoutputsChange = (e) => {
    setNoutputs(e.target.value);
    setNoutputsError(false);
  };

  const handleFlowChange = (e) => {
    setFlow(e.target.value);
    setFlowError(false);
  };

  return (
    <div>
      <Button
        variant="secondary"
        onClick={handleShow}
        style={{ width: 250, height: 40 }}
      >
        Load Loss
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Load Loss</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoadInput
            lengthDerivation={lengthDerivation}
            setLengthDerivation={setLengthDerivation}
            flow={flow}
            setFlow={setFlow}
            noutputs={noutputs}
            setNoutputs={setNoutputs}
            diameterDerivation={diameterDerivation}
            setDiameterDerivation={setDiameterDerivation}
            diameterDerivationError={diameterDerivationError}
            lengthDerivationError={lengthDerivationError}
            noutputsError={noutputsError}
            flowError={flowError}
            handleDiameterDerivationChange={handleDiameterDerivationChange}
            handleLengthDerivationChange={handleLengthDerivationChange}
            handleNoutputsChange={handleNoutputsChange}
            handleFlowChange={handleFlowChange}
          />
          {calculated && <ResultLoad resultSizingLoad={resultSizingLoad} />}
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
              SizingLoadComponentOverrides.SaveButtonDerivationLoad.onClick
            }
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SizingLoad;
