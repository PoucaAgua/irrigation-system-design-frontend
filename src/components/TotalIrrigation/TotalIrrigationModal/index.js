import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ResultTotal from "../TotalIrrigationResultModal";

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
          <div
            className="input mb-3 d-flex flex-column"
            style={{ marginLeft: "10%", marginRight: "10%" }}
          >
            <label className="left-label" htmlFor="input1">
              Actual irrigation
            </label>
            <input
              id="input1"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={actualIrrigation}
              onChange={(e) => setActualIrrigation(e.target.value)}
            />

            <label className="left-label" htmlFor="input2">
              Electrical conductivity irrigation
            </label>
            <input
              id="input2"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={electricalConductivityIrrigation}
              onChange={(e) =>
                setElectricalConductivityIrrigation(e.target.value)
              }
            />

            <label className="left-label" htmlFor="input3">
              Electrical conductivity saturation
            </label>
            <input
              id="input3"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={electricalConductivitySaturation}
              onChange={(e) =>
                setElectricalConductivitySaturation(e.target.value)
              }
            />

            <label className="left-label" htmlFor="input4">
              Leaching fraction
            </label>
            <input
              id="input4"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={leachingFraction}
              onChange={(e) => setLeachingFraction(e.target.value)}
            />

            <label className="left-label" htmlFor="input5">
              Efficiency
            </label>
            <input
              id="input5"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={efficiency}
              onChange={(e) => setEfficiency(e.target.value)}
            />
          </div>

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
