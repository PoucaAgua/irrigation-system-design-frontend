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
          <div className="input mb-3 d-flex flex-column align-items-center">
            <label
              className="left-label"
              htmlFor="input1"
              style={{ marginRight: "46%" }}
            >
              Length derivation line
            </label>
            <input
              id="input1"
              type="text"
              placeholder=""
              className="form-control mb-3"
              style={{ width: "330px" }}
              value={lengthDerivation}
              onChange={(e) => setLengthDerivation(e.target.value)}
            />

            <label
              className="left-label"
              htmlFor="input2"
              style={{ marginRight: "32%" }}
            >
              Flow
            </label>
            <input
              id="input2"
              type="text"
              placeholder=""
              className="form-control mb-3"
              style={{ width: "330px" }}
              value={flow}
              onChange={(e) => setFlow(e.target.value)}
            />

            <label
              className="left-label"
              htmlFor="input2"
              style={{ marginRight: "32%" }}
            >
              N outputs
            </label>
            <input
              id="input2"
              type="text"
              placeholder=""
              className="form-control mb-3"
              style={{ width: "330px" }}
              value={noutputs}
              onChange={(e) => setNoutputs(e.target.value)}
            />

            <label
              className="left-label"
              htmlFor="input2"
              style={{ marginRight: "32%" }}
            >
              diameter_derivation_line
            </label>
            <input
              id="input2"
              type="text"
              placeholder=""
              className="form-control mb-3"
              style={{ width: "330px" }}
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
            onClick={SizingLoadComponentOverrides.CalculateSizingLoad.onClick}
          >
            Calculate
          </Button>
          <Button
            variant="success"
            onClick={SizingLoadComponentOverrides.SaveButtonSizingLoad.onClick}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SizingLoad;
