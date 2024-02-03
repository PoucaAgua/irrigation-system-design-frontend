import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ResultAtmospheric from "../../IrrigationActualResultModal/ResultModalAtmospheric";
import AtmosphericInput from "../../IrrigationActualInputs/irrigation_by_atmospheric";

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
          <AtmosphericInput
            kc={kc}
            setKc={setKc}
            percentwettedarea={percentwettedarea}
            setPercentwettedarea={setPercentwettedarea}
            actualevapotranspiration={actualevapotranspiration}
            setActualevapotranspiration={setActualevapotranspiration}
          />
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
