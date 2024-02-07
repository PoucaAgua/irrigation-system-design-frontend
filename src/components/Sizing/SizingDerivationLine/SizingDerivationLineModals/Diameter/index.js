import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ResultDiameter from "../../SizingDerivationLineResultModal/ResultModalDiameter";
import DiameterInput from "../../SizingDerivationLineInputs/Diameter";

function SizingDiameter({
  SizingDiameterComponentOverrides,
  resultDiameter,
  speedMax,
  setSpeedMax,
  demandFlow,
  setDemandFlow,
}) {
  const [show, setShow] = useState(false);
  const [calculated, setCalculated] = useState(false);
  const handleClose = () => {
    setShow(false);
    setCalculated(false);
  };
  const handleShow = () => setShow(true);
  const handleCalculate = () => {
    SizingDiameterComponentOverrides.CalculateDerivationDiameter.onClick();
    setCalculated(true);

    if (demandFlow === "") {
      setDemandFlowError(true);
    }

    if (speedMax === "") {
      setSpeedMaxError(true);
    }
  };
  const [demandFlowError, setDemandFlowError] = useState(false);
  const [speedMaxError, setSpeedMaxError] = useState(false);

  const handleDemandFlowChange = (e) => {
    setDemandFlow(e.target.value);
    setDemandFlowError(false);
  };

  const handleSpeedMaxChange = (e) => {
    setSpeedMax(e.target.value);
    setSpeedMaxError(false);
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
            demandFlow={demandFlow}
            setDemandFlow={setDemandFlow}
            speedMax={speedMax}
            setSpeedMax={setSpeedMax}
            demandFlowError={demandFlowError}
            speedMaxError={speedMaxError}
            handleDemandFlowChange={handleDemandFlowChange}
            handleSpeedMaxChange={handleSpeedMaxChange}
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
              SizingDiameterComponentOverrides.SaveButtonDerivationDiameter
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

export default SizingDiameter;
