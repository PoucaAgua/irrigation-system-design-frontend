import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ResultSoilParams from "../../IrrigationActualResultModal/ResultModalSoil";
import SoilInput from "../../IrrigationActualInputs/irrigation_by_soil";

function Soil({
  resultSoilParams,
  soilMoistureFieldCapacity,
  setSoilMoistureFieldCapacity,
  soilMoistureAtPermanentWiltingPoint,
  setSoilMoistureAtPermanentWiltingPoint,
  depletionFactor,
  setDepletionFactor,
  soilDepth,
  setSoilDepth,
  effectivePrecipitation,
  setEffectivePrecipitation,
  SoilComponentOverrides,
}) {
  const [show, setShow] = useState(false);
  const [calculated, setCalculated] = useState(false);
  const handleClose = () => {
    setShow(false);
    setCalculated(false);
  };
  const handleShow = () => setShow(true);
  const handleCalculate = () => {
    SoilComponentOverrides.CalculateButtonSoilParams.onClick();
    setCalculated(true);
  };

  return (
    <div>
      <Button
        variant="secondary"
        onClick={handleShow}
        style={{ width: 250, height: 40 }}
      >
        Irrigation by Soil
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Irrigation by Soil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SoilInput
            soilMoistureFieldCapacity={soilMoistureFieldCapacity}
            setSoilMoistureFieldCapacity={setSoilMoistureFieldCapacity}
            soilMoistureAtPermanentWiltingPoint={
              soilMoistureAtPermanentWiltingPoint
            }
            setSoilMoistureAtPermanentWiltingPoint={
              setSoilMoistureAtPermanentWiltingPoint
            }
            depletionFactor={depletionFactor}
            setDepletionFactor={setDepletionFactor}
            soilDepth={soilDepth}
            setSoilDepth={setSoilDepth}
            effectivePrecipitation={effectivePrecipitation}
            setEffectivePrecipitation={setEffectivePrecipitation}
          />
          {calculated && (
            <ResultSoilParams resultSoilParams={resultSoilParams} />
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
            onClick={SoilComponentOverrides.SaveButtonSoilParams.onClick}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Soil;
