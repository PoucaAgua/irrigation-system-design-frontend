import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ResultLoad from "../../SizingDerivationLineResultModal/ResultModalLoad";

function SizingLoad({
  SizingLoadComponentOverrides,
  resultSizingLoad,
  diameterDerivation,
  setDiameterDerivation,
  noutputs,
  setNoutputs,
  flow,
  setFlow,
  lengthDerivation,
  setLengthDerivation,
}) {
  const [show, setShow] = useState(false);
  const [calculated, setCalculated] = useState(false);
  const handleClose = () => {
    setShow(false);
    setCalculated(false);
  };
  const handleShow = () => setShow(true);
  const handleCalculate = () => {
    SizingLoadComponentOverrides.CalculateDerivationLoad.onClick();
    setCalculated(true);
  };

  return (
    <div>
      <Button
        variant="secondary"
        onClick={handleShow}
        style={{ width: 250, height: 40 }}
      >
        Load Loss
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Load Loss</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="input mb-3 d-flex flex-column"
            style={{ marginLeft: "10%", marginRight: "10%" }}
          >
            <label className="left-label" htmlFor="input1">
              Length derivation line
            </label>
            <input
              id="input1"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={lengthDerivation}
              onChange={(e) => setLengthDerivation(e.target.value)}
            />

            <label className="left-label" htmlFor="input2">
              Flow
            </label>
            <input
              id="input2"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={flow}
              onChange={(e) => setFlow(e.target.value)}
            />

            <label className="left-label" htmlFor="input2">
              N outputs
            </label>
            <input
              id="input2"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={noutputs}
              onChange={(e) => setNoutputs(e.target.value)}
            />

            <label className="left-label" htmlFor="input2">
              Diameter derivation line
            </label>
            <input
              id="input2"
              type="text"
              placeholder=""
              className="form-control mb-3"
              value={diameterDerivation}
              onChange={(e) => setDiameterDerivation(e.target.value)}
            />
          </div>

          {calculated && <ResultLoad resultSizingLoad={resultSizingLoad} />}
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
              SizingLoadComponentOverrides.SaveButtonDerivationLoad.onClick
            }
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SizingLoad;
