import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import ResultPs from "../../PsResultModal/ResultModalCanopy";
import CanopyInput from "../../PsInputs/canopy_projection";

function CanopyModalRender({
  showModalCanopy,
  toggleModalCanopy,
  sr,
  sp,
  dco,
  setSr,
  setSp,
  setDco,
  resultPs,
  CanopyComponentOverrides,
}) {
  const [calculated, setCalculated] = useState(false);
  const handleCalculate = () => {
    CanopyComponentOverrides.CalculateButtonCanopy.onClick();
    setCalculated(true);

    if (sp === "") {
      setSpError(true);
    }

    if (sr === "") {
      setSrError(true);
    }

    if (dco === "") {
      setDcoError(true);
    }
  };
  const [spError, setSpError] = useState(false);
  const [srError, setSrError] = useState(false);
  const [dcoError, setDcoError] = useState(false);

  const handleSpChange = (e) => {
    setSp(e.target.value);
    setSpError(false);
  };

  const handleSrChange = (e) => {
    setSr(e.target.value);
    setSrError(false);
  };

  const handleDcoChange = (e) => {
    setDco(e.target.value);
    setDcoError(false);
  };

  const anyFieldEmpty = sp === "" || sr === "" || dco === "";

  return (
    <>
      <div className="form-check" style={{ marginLeft: 16 }}>
        <input
          type="radio"
          className="form-check-input"
          id="radioButtonCanopy"
          name="modalRadio"
          onChange={toggleModalCanopy}
        />
        <label className="form-check-label" htmlFor="radioButtonCanopy">
          Canopy Projection
          {anyFieldEmpty ? (
            <FontAwesomeIcon
              icon={faExclamationCircle}
              style={{ marginLeft: 5, fontSize: "1.0em", color: "red" }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ marginLeft: 5, fontSize: "1.0em", color: "green" }}
            />
          )}
        </label>
      </div>
      <Modal show={showModalCanopy} onHide={toggleModalCanopy}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center fs-4">
            Percent Shaded Area
            <br /> By Plant Canopy Projection
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CanopyInput
            dco={dco}
            setDco={setDco}
            sp={sp}
            setSp={setSp}
            sr={sr}
            setSr={setSr}
            dcoError={dcoError}
            spError={spError}
            srError={srError}
            handleSrChange={handleSrChange}
            handleSpChange={handleSpChange}
            handleDcoChange={handleDcoChange}
          />
          {calculated && <ResultPs resultPs={resultPs} />}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={CanopyComponentOverrides.SaveButtonCanopy.onClick}
          >
            Save
          </Button>
          <Button
            variant="primary"
            onClick={handleCalculate}
            disabled={anyFieldEmpty}
          >
            Calculate
          </Button>
          <Button variant="danger" onClick={toggleModalCanopy}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CanopyModalRender;
