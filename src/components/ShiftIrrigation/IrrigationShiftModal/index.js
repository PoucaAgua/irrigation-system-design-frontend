import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ShiftIrrigation({
  irrigationSystemDesignService,
  setLoadingCalculate,
  loadingCalculate,
  resultShift,
  setResultShift,
  ShiftIrrigation,
  actualIrrigation,
  setActualIrrigation,
  cropEvapotranspiration,
  setCropEvapotranspiration,
  ShiftComponentOverrides,
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
        Maximum irrigation shift
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Maximum irrigation shift</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input mb-3 d-flex flex-column align-items-center">
            <label
              className="left-label"
              htmlFor="input1"
              style={{ marginRight: "46%" }}
            >
              actualIrrigation
            </label>
            <input
              id="input1"
              type="text"
              placeholder=""
              className="form-control mb-3"
              style={{ width: "330px" }}
              value={actualIrrigation}
              onChange={(e) => setActualIrrigation(e.target.value)}
            />

            <label
              className="left-label"
              htmlFor="input2"
              style={{ marginRight: "32%" }}
            >
              Crop Evapotranspiration
            </label>
            <input
              id="input2"
              type="text"
              placeholder=""
              className="form-control mb-3"
              style={{ width: "330px" }}
              value={cropEvapotranspiration}
              onChange={(e) => setCropEvapotranspiration(e.target.value)}
            />
          </div>

          {resultShift !== null && (
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
                      <th scope="col">Maximum irrigation shift Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{resultShift}</td>
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
            onClick={ShiftComponentOverrides.CalculateTotalIrrigation.onClick}
          >
            Calculate
          </Button>
          <Button
            variant="success"
            onClick={ShiftComponentOverrides.SaveButtonTotal.onClick}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ShiftIrrigation;
