import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function SizingDiameter({
  SizingDiameterComponentOverrides,
  resultDiameter,
  speedMax,
  setSpeedMax,
  demandFlow,
  setDemandFlow,
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
        Diameter
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Diameter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input mb-3 d-flex flex-column align-items-center">
            <label
              className="left-label"
              htmlFor="input1"
              style={{ marginRight: "46%" }}
            >
              Demand Flow
            </label>
            <input
              id="input1"
              type="text"
              placeholder=""
              className="form-control mb-3"
              style={{ width: "330px" }}
              value={demandFlow}
              onChange={(e) => setDemandFlow(e.target.value)}
            />

            <label
              className="left-label"
              htmlFor="input2"
              style={{ marginRight: "32%" }}
            >
              Speed Max
            </label>
            <input
              id="input2"
              type="text"
              placeholder=""
              className="form-control mb-3"
              style={{ width: "330px" }}
              value={speedMax}
              onChange={(e) => setSpeedMax(e.target.value)}
            />
          </div>

          {resultDiameter !== null && (
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
                      <th scope="col">Sizing Diameter Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{resultDiameter}</td>
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
              SizingDiameterComponentOverrides.CalculateTotalIrrigation.onClick
            }
          >
            Calculate
          </Button>
          <Button
            variant="success"
            onClick={SizingDiameterComponentOverrides.SaveButtonTotal.onClick}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SizingDiameter;
