import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ResultAtmospheric from "../ResultModal/ResultModalAtmospheric";

function Atmospheric({
  AtmosphericComponentOverrides,
  resultAtmospheric,
  kc,
  setKc,
  percentwettedarea,
  setPercentwettedarea,
  actualevapotranspiration,
  setActualevapotranspiration,
}) {
  const [show, setShow] = useState(false);
  const [calculated, setCalculated] = useState(false);
  const handleClose = () => {
    setShow(false);
    setCalculated(false);
  };
  const handleShow = () => setShow(true);
  const handleCalculate = () => {
    AtmosphericComponentOverrides.CalculateButtonAtmospheric.onClick();
    setCalculated(true);
  };

  return (
    <div>
      <Button
        variant="secondary"
        onClick={handleShow}
        style={{ width: 250, height: 40 }}
      >
        Irrigation by Atmospheric
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Irrigation by Atmospheric</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="input mb-3 d-flex flex-column"
            style={{ marginLeft: "10%", marginRight: "10%" }}
          >
            <label className="left-label" htmlFor="input1">
              Kc
            </label>
            <input
              id="input1"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={kc}
              onChange={(e) => setKc(e.target.value)}
            />

            <label className="left-label" htmlFor="input2">
              Percent wetted area
            </label>
            <input
              id="input2"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={percentwettedarea}
              onChange={(e) => setPercentwettedarea(e.target.value)}
            />

            <label className="left-label" htmlFor="input3">
              Actual evapotranspiration
            </label>
            <input
              id="input3"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={actualevapotranspiration}
              onChange={(e) => setActualevapotranspiration(e.target.value)}
            />
          </div>

          {calculated && (
            <ResultAtmospheric resultAtmospheric={resultAtmospheric} />
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
            onClick={
              AtmosphericComponentOverrides.SaveButtonAtmospheric.onClick
            }
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Atmospheric;
