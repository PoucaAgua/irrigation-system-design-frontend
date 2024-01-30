import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ResultMaximum from "../../IrrigationActualResultModal/ResultModalActual";

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
          <div
            className="input mb-3 d-flex flex-column"
            style={{ marginLeft: "10%", marginRight: "10%" }}
          >
            <label className="left-label" htmlFor="input1">
              Soil moisture field capacity
            </label>
            <input
              id="input1"
              type="text"
              placeholder="Field capacity in cm³/cm³"
              className="form-control mb-3"
              value={soilMoistureFieldCapacity}
              onChange={(e) => {
                setSoilMoistureFieldCapacity(e.target.value);
              }}
            />

            <label className="left-label" htmlFor="input2">
              Soil moisture at permanent wilting point
            </label>
            <input
              id="input2"
              type="text"
              placeholder="Permanent wilting point in cm³/cm³"
              className="form-control mb-3"
              value={soilMoistureAtPermanentWiltingPoint}
              onChange={(e) => {
                setSoilMoistureAtPermanentWiltingPoint(e.target.value);
              }}
            />

            <label className="left-label" htmlFor="input3">
              Depletion factor
            </label>
            <input
              id="input3"
              type="text"
              placeholder=" 0.3 to 0.7. It is always less than 1"
              className="form-control mb-3"
              value={depletionFactor}
              onChange={(e) => {
                setDepletionFactor(e.target.value);
              }}
            />

            <label className="left-label" htmlFor="input4">
              Soil depth
            </label>
            <input
              id="input4"
              type="text"
              placeholder=" Soil depth in cm"
              className="form-control mb-3"
              value={soilDepth}
              onChange={(e) => setSoilDepth(e.target.value)}
            />

            <label className="left-label" htmlFor="input5">
              Effective precipitation
            </label>
            <input
              id="input5"
              type="text"
              placeholder=" Effective precipitation in mm"
              className="form-control mb-3"
              value={effectivePrecipitation}
              onChange={(e) => setEffectivePrecipitation(e.target.value)}
            />

            <label className="left-label" htmlFor="input6">
              Fraction of total wetted area
            </label>
            <input
              id="input6"
              type="text"
              placeholder="fraction of total wetted area, dimensionless"
              className="form-control mb-3"
              value={fractionOfTotalWettedArea}
              onChange={(e) => {
                setFractionOfTotalWettedArea(e.target.value);
              }}
            />
          </div>

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
