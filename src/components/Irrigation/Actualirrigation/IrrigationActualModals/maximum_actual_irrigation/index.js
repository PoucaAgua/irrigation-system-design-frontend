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

    if (soilMoistureFieldCapacity === "") {
      setSoilMoistureFieldCapacityError(true);
    }

    if (soilMoistureAtPermanentWiltingPoint === "") {
      setSoilMoistureAtPermanentWiltingPointError(true);
    }

    if (depletionFactor === "") {
      setDepletionFactorError(true);
    }

    if (soilDepth === "") {
      setSoilDepthError(true);
    }

    if (effectivePrecipitation === "") {
      setEffectivePrecipitationError(true);
    }

    if (fractionOfTotalWettedArea === "") {
      setFractionOfTotalWettedAreaError(true);
    }
  };

  const [effectivePrecipitationError, setEffectivePrecipitationError] =
    useState(false);
  const [soilDepthError, setSoilDepthError] = useState(false);
  const [depletionFactorError, setDepletionFactorError] = useState(false);
  const [
    soilMoistureAtPermanentWiltingPointError,
    setSoilMoistureAtPermanentWiltingPointError,
  ] = useState(false);
  const [soilMoistureFieldCapacityError, setSoilMoistureFieldCapacityError] =
    useState(false);
  const [fractionOfTotalWettedAreaError, setFractionOfTotalWettedAreaError] =
    useState(false);

  const handleSoilMoistureFieldCapacityChange = (e) => {
    setSoilMoistureFieldCapacity(e.target.value);
    setSoilMoistureFieldCapacityError(false);
  };

  const handleSoilMoistureAtPermanentWiltingChange = (e) => {
    setSoilMoistureAtPermanentWiltingPoint(e.target.value);
    setSoilMoistureAtPermanentWiltingPointError(false);
  };

  const handleDepletionFactorChange = (e) => {
    setDepletionFactor(e.target.value);
    setDepletionFactorError(false);
  };

  const handleSoilDepthChange = (e) => {
    setSoilDepth(e.target.value);
    setSoilDepthError(false);
  };

  const handleEffectivePrecipitationChange = (e) => {
    setEffectivePrecipitation(e.target.value);
    setEffectivePrecipitationError(false);
  };

  const handleFractionOfTotalWettedChange = (e) => {
    setFractionOfTotalWettedArea(e.target.value);
    setFractionOfTotalWettedAreaError(false);
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
            soilMoistureFieldCapacityError={soilMoistureFieldCapacityError}
            soilMoistureAtPermanentWiltingPointError={
              soilMoistureAtPermanentWiltingPointError
            }
            depletionFactorError={depletionFactorError}
            soilDepthError={soilDepthError}
            effectivePrecipitationError={effectivePrecipitationError}
            handleSoilMoistureFieldCapacityChange={
              handleSoilMoistureFieldCapacityChange
            }
            handleSoilMoistureAtPermanentWiltingChange={
              handleSoilMoistureAtPermanentWiltingChange
            }
            handleDepletionFactorChange={handleDepletionFactorChange}
            handleSoilDepthChange={handleSoilDepthChange}
            handleEffectivePrecipitationChange={
              handleEffectivePrecipitationChange
            }
            fractionOfTotalWettedAreaError={fractionOfTotalWettedAreaError}
            handleFractionOfTotalWettedChange={
              handleFractionOfTotalWettedChange
            }
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
