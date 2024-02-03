import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ResultTotal from "../TotalIrrigationResultModal";
import TotalInput from "../TotalIrrigationInputs";

function TotalIrrigation({
  TotalComponentOverrides,
  resultTotal,
  actualIrrigation,
  setActualIrrigation,
  electricalConductivityIrrigation,
  setElectricalConductivityIrrigation,
  electricalConductivitySaturation,
  setElectricalConductivitySaturation,
  leachingFraction,
  setLeachingFraction,
  efficiency,
  setEfficiency,
}) {
  const [show, setShow] = useState(false);
  const [calculated, setCalculated] = useState(false);
  const handleClose = () => {
    setShow(false);
    setCalculated(false);
  };
  const handleShow = () => setShow(true);
  const handleCalculate = () => {
    TotalComponentOverrides.CalculateTotalIrrigation.onClick();
    setCalculated(true);
  };

  return (
    <div>
      <Button
        variant="secondary"
        onClick={handleShow}
        style={{ width: 250, height: 40 }}
      >
        Total Irrigation
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Total Irrigation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TotalInput
            actualIrrigation={actualIrrigation}
            setActualIrrigation={setActualIrrigation}
            electricalConductivityIrrigation={electricalConductivityIrrigation}
            setElectricalConductivityIrrigation={
              setElectricalConductivityIrrigation
            }
            electricalConductivitySaturation={electricalConductivitySaturation}
            setElectricalConductivitySaturation={
              setElectricalConductivitySaturation
            }
            leachingFraction={leachingFraction}
            setLeachingFraction={setLeachingFraction}
            efficiency={efficiency}
            setEfficiency={setEfficiency}
          />
          {calculated && <ResultTotal resultTotal={resultTotal} />}
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
            onClick={TotalComponentOverrides.SaveButtonTotal.onClick}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TotalIrrigation;
