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

    if (actualIrrigation === "") {
      setActualIrrigationError(true);
    }

    if (electricalConductivityIrrigation === "") {
      setElectricalConductivityIrrigationError(true);
    }

    if (electricalConductivitySaturation === "") {
      setElectricalConductivitySaturationError(true);
    }

    if (leachingFraction === "") {
      setLeachingFractionError(true);
    }

    if (efficiency === "") {
      setEfficiencyError(true);
    }
  };
  const [actualIrrigationError, setActualIrrigationError] = useState(false);
  const [
    electricalConductivityIrrigationError,
    setElectricalConductivityIrrigationError,
  ] = useState(false);
  const [
    electricalConductivitySaturationError,
    setElectricalConductivitySaturationError,
  ] = useState(false);
  const [leachingFractionError, setLeachingFractionError] = useState(false);
  const [efficiencyError, setEfficiencyError] = useState(false);

  const handleActualIrrigationChange = (e) => {
    setActualIrrigation(e.target.value);
    setActualIrrigationError(false);
  };

  const handleElectricalConductivityIrrigationChange = (e) => {
    setElectricalConductivityIrrigation(e.target.value);
    setElectricalConductivityIrrigationError(false);
  };

  const handleElectricalConductivitySaturationChange = (e) => {
    setElectricalConductivitySaturation(e.target.value);
    setElectricalConductivitySaturationError(false);
  };

  const handleLeachingFractionChange = (e) => {
    setLeachingFraction(e.target.value);
    setLeachingFractionError(false);
  };

  const handleEfficiencyChange = (e) => {
    setEfficiency(e.target.value);
    setEfficiencyError(false);
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
            handleElectricalConductivityIrrigationChange={
              handleElectricalConductivityIrrigationChange
            }
            electricalConductivityIrrigationError={
              electricalConductivityIrrigationError
            }
            setElectricalConductivityIrrigation={
              setElectricalConductivityIrrigation
            }
            electricalConductivitySaturation={electricalConductivitySaturation}
            electricalConductivitySaturationError={
              electricalConductivitySaturationError
            }
            handleElectricalConductivitySaturationChange={
              handleElectricalConductivitySaturationChange
            }
            setElectricalConductivitySaturation={
              setElectricalConductivitySaturation
            }
            leachingFraction={leachingFraction}
            handleLeachingFractionChange={handleLeachingFractionChange}
            leachingFractionError={leachingFractionError}
            setLeachingFraction={setLeachingFraction}
            efficiencyError={efficiencyError}
            efficiency={efficiency}
            handleEfficiencyChange={handleEfficiencyChange}
            setEfficiency={setEfficiency}
            actualIrrigationError={actualIrrigationError}
            handleActualIrrigationChange={handleActualIrrigationChange}
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
