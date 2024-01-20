import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ResultPw from "../ResultModalRadius";

function RadiusModalRender({
  showModalPwRadius,
  toggleModalRadius,
  q,
  k0,
  alpha,
  resultPw,
  validationError,
  loadingCalculate,
  RadiusComponentOverrides,
}) {
  const [calculated, setCalculated] = useState(false);
  const handleCalculate = () => {
    RadiusComponentOverrides.CalculateButtonRadius.onClick();
    setCalculated(true);
  };
  return (
    <>
      {" "}
      <div className="form-check" style={{ marginLeft: 16 }}>
        <input
          type="radio"
          className="form-check-input"
          id="radioButtonRadius"
          name="modalRadio"
          onChange={toggleModalRadius}
        />
        <label className="form-check-label" htmlFor="radioButtonRadius">
          Twice Saturated Wetted Radius
        </label>
      </div>
      <Modal show={showModalPwRadius} onHide={toggleModalRadius}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center fs-4">
            Percent Wetted Area <br />
            By Twice saturated wetted radius
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="input mb-3 d-flex flex-column"
            style={{ marginLeft: "10%", marginRight: "10%" }}
          >
            <label htmlFor="input1" className="left-label">
              Q:
            </label>
            <input
              id="input1"
              type="text"
              className="form-control mb-3"
              placeholder="Q"
              value={q}
              onChange={(e) => RadiusComponentOverrides.Q.onChange(e)}
            />
            <label htmlFor="input2" className="left-label">
              Hydraulic conductivity:
            </label>
            <input
              id="input2"
              type="text"
              className="form-control mb-3"
              placeholder="Ko (cm h-1)"
              value={k0}
              onChange={(e) => RadiusComponentOverrides.K0.onChange(e)}
            />
            <label htmlFor="input3" className="left-label">
              Soil water conductivity parameter:
            </label>
            <input
              id="input3"
              type="text"
              className="form-control mb-3"
              placeholder="α"
              value={alpha}
              onChange={(e) => RadiusComponentOverrides.Alpha.onChange(e)}
            />
          </div>

          {calculated && <ResultPw resultPs={resultPw} />}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={RadiusComponentOverrides.SaveButtonRadius.onClick}
          >
            Save
          </Button>
          <Button variant="primary" onClick={handleCalculate}>
            Calculate
          </Button>
          <Button variant="danger" onClick={toggleModalRadius}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RadiusModalRender;
