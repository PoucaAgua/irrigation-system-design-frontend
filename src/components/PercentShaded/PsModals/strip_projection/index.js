import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
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
  const handleCalculate = () => {
    StripComponentOverrides.CalculateButtonPsStrip.onClick();
    setCalculated(true);
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
          <StripInput sr={sr} setSr={setSr} ss={ss} setSs={setSs} />
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
