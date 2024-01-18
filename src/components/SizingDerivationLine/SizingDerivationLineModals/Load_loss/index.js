import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

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
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

          {resultSizingLoad !== null && (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "60%", height: "40%" }}>
                <table className="table table-bordered border-secondary">
                  <thead>
                    <tr>
                      <th scope="col">Sizing Load Loss Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{resultSizingLoad}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={
              SizingLoadComponentOverrides.CalculateDerivationLoad.onClick
            }
          >
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
