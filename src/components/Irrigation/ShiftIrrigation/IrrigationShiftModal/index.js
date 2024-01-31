import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ResultShift from "../IrrigationShiftResultModal";
import ShiftInput from "../IrrigationShiftInputs";

function ShiftIrrigation({
  irrigationSystemDesignService,
  setLoadingCalculate,
  loadingCalculate,
  resultShift,
  setResultShift,
  ShiftIrrigation,
  actualIrrigation,
  setActualIrrigation,
  cropEvapotranspiration,
  setCropEvapotranspiration,
  ShiftComponentOverrides,
}) {
  const [show, setShow] = useState(false);
  const [calculated, setCalculated] = useState(false);
  const handleClose = () => {
    setShow(false);
    setCalculated(false);
  };
  const handleShow = () => setShow(true);
  const handleCalculate = () => {
    ShiftComponentOverrides.CalculateTotalIrrigation.onClick();
    setCalculated(true);
  };

  return (
    <div>
      <Button
        variant="secondary"
        onClick={handleShow}
        style={{ width: 250, height: 40 }}
      >
        Maximum irrigation shift
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Maximum irrigation shift</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ShiftInput
            actualIrrigation={actualIrrigation}
            setActualIrrigation={setActualIrrigation}
            cropEvapotranspiration={cropEvapotranspiration}
            setCropEvapotranspiration={setCropEvapotranspiration}
          />
          {calculated && <ResultShift resultShift={resultShift} />}
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
            onClick={ShiftComponentOverrides.SaveButtonTotal.onClick}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ShiftIrrigation;
