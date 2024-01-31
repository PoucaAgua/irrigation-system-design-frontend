import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ResultMaximum from "../../IrrigationActualResultModal/ResultModalActual";
import MaximumInput from "../../IrrigationActualInputs/maximum_actual_irrigation";

function Maximum({
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
  fractionOfTotalWettedArea,
  setFractionOfTotalWettedArea,
  resultMaximum,
  MaximumComponentOverrides,
}) {
  const [show, setShow] = useState(false);
  const [calculated, setCalculated] = useState(false);
  const handleClose = () => {
    setShow(false);
    setCalculated(false);
  };
  const handleShow = () => setShow(true);
  const handleCalculate = () => {
    MaximumComponentOverrides.CalculateButtonMaximum.onClick();
    setCalculated(true);
  };

  return (
    <div>
      <Button
        variant="secondary"
        onClick={handleShow}
        style={{ width: 250, height: 40 }}
      >
        Maximum actual irrigation
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Maximum actual irrigation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MaximumInput
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
            fractionOfTotalWettedArea={fractionOfTotalWettedArea}
            setFractionOfTotalWettedArea={setFractionOfTotalWettedArea}
          />
          {calculated && <ResultMaximum resultMaximum={resultMaximum} />}
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
            onClick={MaximumComponentOverrides.SaveButtonMaximum.onClick}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Maximum;
