import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function SizingHead({
  SizingHeadComponentOverrides,
  resultSizingHead,
  nominalFlow,
  setNominalFlow,
  emitterSpacing,
  setEmitterSpacing,
  internalDiameter,
  setInternalDiameter,
  lengthLateral,
  setLengthLateral,
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
        Head Loss
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Head Loss</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input mb-3 d-flex flex-column align-items-center">
            <label
              className="left-label"
              htmlFor="input1"
              style={{ marginRight: "46%" }}
            >
              Length lateral line
            </label>
            <input
              id="input1"
              type="text"
              placeholder=""
              className="form-control mb-3"
              style={{ width: "330px" }}
              value={lengthLateral}
              onChange={(e) => setLengthLateral(e.target.value)}
            />

            <label
              className="left-label"
              htmlFor="input2"
              style={{ marginRight: "32%" }}
            >
              Internal diameter
            </label>
            <input
              id="input2"
              type="text"
              placeholder=""
              className="form-control mb-3"
              style={{ width: "330px" }}
              value={internalDiameter}
              onChange={(e) => setInternalDiameter(e.target.value)}
            />

            <label
              className="left-label"
              htmlFor="input2"
              style={{ marginRight: "32%" }}
            >
              Emitter Spacing
            </label>
            <input
              id="input2"
              type="text"
              placeholder=""
              className="form-control mb-3"
              style={{ width: "330px" }}
              value={emitterSpacing}
              onChange={(e) => setEmitterSpacing(e.target.value)}
            />

            <label
              className="left-label"
              htmlFor="input2"
              style={{ marginRight: "32%" }}
            >
              Nominal flow rate
            </label>
            <input
              id="input2"
              type="text"
              placeholder=""
              className="form-control mb-3"
              style={{ width: "330px" }}
              value={nominalFlow}
              onChange={(e) => setNominalFlow(e.target.value)}
            />
          </div>

          {resultSizingHead !== null && (
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
                      <th scope="col">Sizing Head Loss Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{resultSizingHead}</td>
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
            onClick={SizingHeadComponentOverrides.CalculateSizingHead.onClick}
          >
            Calculate
          </Button>
          <Button
            variant="success"
            onClick={SizingHeadComponentOverrides.SaveButtonSizingHead.onClick}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SizingHead;
