import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ResultPw from "../../PwResultModal/ResultModalRadius";
import RadiusInput from "../../PwInputs/radius_wetted";

function RadiusModalRender({
  showModalPwRadius,
  toggleModalRadius,
  q,
  setQ,
  k0,
  setK0,
  alpha,
  setAlpha,
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
          <RadiusInput
            q={q}
            setQ={setQ}
            k0={k0}
            setK0={setK0}
            alpha={alpha}
            setAlpha={setAlpha}
          />
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
