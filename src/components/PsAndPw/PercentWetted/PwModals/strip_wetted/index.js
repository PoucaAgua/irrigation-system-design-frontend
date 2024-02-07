import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ResultPw from "../../PwResultModal/ResultModalStrip";
import StripInput from "../../PwInputs/strip_wetted";

function PwStripModalRender({
  showModalPwStrip,
  toggleModalPwStrip,
  sr,
  setSr,
  sp,
  setSp,
  sw,
  setSw,
  resultPw,
  validationError,
  loadingCalculate,
  StripPwComponentOverrides,
}) {
  const [calculated, setCalculated] = useState(false);
  const handleCalculate = () => {
    StripPwComponentOverrides.CalculateButtonStripPw.onClick();
    setCalculated(true);

    if (sp === "") {
      setSpError(true);
    }

    if (sr === "") {
      setSrError(true);
    }

    if (sw === "") {
      setSwError(true);
    }
  };
  const [srError, setSrError] = useState(false);
  const [spError, setSpError] = useState(false);
  const [swError, setSwError] = useState(false);

  const handleSpChange = (e) => {
    setSp(e.target.value);
    setSpError(false);
  };

  const handleSrChange = (e) => {
    setSr(e.target.value);
    setSrError(false);
  };

  const handleSwChange = (e) => {
    setSw(e.target.value);
    setSwError(false);
  };

  return (
    <>
      {" "}
      <div className="form-check" style={{ marginLeft: 16 }}>
        <input
          type="radio"
          className="form-check-input"
          id="radioButtonCStrip"
          name="modalRadio"
          onChange={toggleModalPwStrip}
        />
        <label className="form-check-label" htmlFor="radioButtonCStrip">
          Continuous Strip
        </label>
      </div>
      <Modal show={showModalPwStrip} onHide={toggleModalPwStrip}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center fs-4">
            Percent Wetted Area By <br /> Continuous strip <br /> Aw / Ap x 100
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StripInput
            sw={sw}
            setSw={setSw}
            sp={sp}
            setSp={setSp}
            sr={sr}
            setSr={setSr}
            srError={srError}
            spError={spError}
            swError={swError}
            handleSpChange={handleSpChange}
            handleSrChange={handleSrChange}
            handleSwChange={handleSwChange}
          />
          {calculated && <ResultPw resultPw={resultPw} />}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={StripPwComponentOverrides.SaveButtonStripPw.onClick}
          >
            Save
          </Button>
          <Button variant="primary" onClick={handleCalculate}>
            Calculate
          </Button>
          <Button variant="danger" onClick={toggleModalPwStrip}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PwStripModalRender;
