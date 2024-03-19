import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
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
  const [qError, setQError] = useState(false);
  const [k0Error, setK0Error] = useState(false);
  const [alphaError, setAlphaError] = useState(false);

  const handleCalculate = () => {
    RadiusComponentOverrides.CalculateButtonRadius.onClick();
    setCalculated(true);

    if (q === "") {
      setQError(true);
    } else {
      setQError(false);
    }

    if (k0 === "") {
      setK0Error(true);
    } else {
      setK0Error(false);
    }

    if (alpha === "") {
      setAlphaError(true);
    } else {
      setAlphaError(false);
    }
  };

  const handleQChange = (e) => {
    setQ(e.target.value);
    setQError(false);
  };

  const handleK0Change = (e) => {
    setK0(e.target.value);
    setK0Error(false);
  };

  const handleAlphaChange = (e) => {
    setAlpha(e.target.value);
    setAlphaError(false);
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
          {q && k0 && alpha ? (
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{
                marginLeft: 5,
                fontSize: "1.0em",
                color: "green",
              }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faExclamationCircle}
              style={{
                marginLeft: 5,
                fontSize: "1.0em",
                color: "red",
              }}
            />
          )}
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
            qError={qError}
            k0Error={k0Error}
            alphaError={alphaError}
            handleQChange={handleQChange}
            handleK0Change={handleK0Change}
            handleAlphaChange={handleAlphaChange}
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
