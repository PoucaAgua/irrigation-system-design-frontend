import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import ResultPs from "../../PsResultModal/ResultModalStrip";
import StripInput from "../../PsInputs/strip_projection";

function StripModalRender({
  showModalPsStrip,
  toggleModalStrip,
  sr,
  ss,
  setSr,
  setSs,
  resultPs,
  StripComponentOverrides,
}) {
  const [calculated, setCalculated] = useState(false);
  const [ssError, setSsError] = useState(false);
  const [srError, setSrError] = useState(false);

  const handleCalculate = () => {
    StripComponentOverrides.CalculateButtonPsStrip.onClick();
    setCalculated(true);

    if (ss === "") {
      setSsError(true);
    }

    if (sr === "") {
      setSrError(true);
    }
  };

  const handleSsChange = (e) => {
    setSs(e.target.value);
    setSsError(false);
  };

  const handleSrChange = (e) => {
    setSr(e.target.value);
    setSrError(false);
  };

  return (
    <>
      <div className="form-check" style={{ marginLeft: 16 }}>
        <input
          type="radio"
          className="form-check-input"
          id="stripRadioButtonStrip"
          name="modalRadio"
          onChange={toggleModalStrip}
        />
        <label className="form-check-label" htmlFor="stripRadioButtonStrip">
          Strip Projection
          {sr && ss ? (
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
      <Modal show={showModalPsStrip} onHide={toggleModalStrip}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center fs-4">
            Percent Shaded Area
            <br /> By Plant Strip Projection
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StripInput
            sr={sr}
            setSr={setSr}
            ss={ss}
            setSs={setSs}
            ssError={ssError}
            srError={srError}
            handleSsChange={handleSsChange}
            handleSrChange={handleSrChange}
          />
          {calculated && <ResultPs resultPs={resultPs} />}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={StripComponentOverrides.SaveButtonPsStrip.onClick}
          >
            Save
          </Button>
          <Button variant="primary" onClick={handleCalculate}>
            Calculate
          </Button>
          <Button variant="danger" onClick={toggleModalStrip}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default StripModalRender;
