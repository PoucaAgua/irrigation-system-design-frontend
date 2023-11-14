import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function TotalIrrigation({
  TotalComponentOverrides,
  resultTotal,
  actualIrrigation,
  setActualIrrigation,
  electricalConductivityIrrigation,
  setElectricalConductivityIrrigation,
  electricalConductivitySaturation,
  setElectricalConductivitySaturation,
  leachingFraction,
  setLeachingFraction,
  efficiency,
  setEfficiency,
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
        Total Irrigation
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Total Irrigation</Modal.Title>
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
              style={{ marginRight: "21%" }}
            >
              Electrical Conductivity Irrigation
            </label>
            <input
              id="input2"
              type="text"
              placeholder=""
              className="form-control mb-3"
              style={{ width: "330px" }}
              value={electricalConductivityIrrigation}
              onChange={(e) =>
                setElectricalConductivityIrrigation(e.target.value)
              }
            />

            <label
              className="left-label"
              htmlFor="input3"
              style={{ marginRight: "19%" }}
            >
              Electrical Conductivity Saturation
            </label>
            <input
              id="input3"
              type="text"
              placeholder=""
              className="form-control mb-3"
              style={{ width: "330px" }}
              value={electricalConductivitySaturation}
              onChange={(e) =>
                setElectricalConductivitySaturation(e.target.value)
              }
            />

            <label
              className="left-label"
              htmlFor="input3"
              style={{ marginRight: "43%" }}
            >
              LeachingFraction
            </label>
            <input
              id="input3"
              type="text"
              placeholder=""
              className="form-control mb-3"
              style={{ width: "330px" }}
              value={leachingFraction}
              onChange={(e) => setLeachingFraction(e.target.value)}
            />

            <label
              className="left-label"
              htmlFor="input3"
              style={{ marginRight: "54%" }}
            >
              Efficiency
            </label>
            <input
              id="input3"
              type="text"
              placeholder=""
              className="form-control mb-3"
              style={{ width: "330px" }}
              value={efficiency}
              onChange={(e) => setEfficiency(e.target.value)}
            />
          </div>

          {resultTotal !== null && (
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
                      <th scope="col">Irrigation by Atmospheric Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{resultTotal}</td>
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
            onClick={TotalComponentOverrides.CalculateTotalIrrigation.onClick}
          >
            Calculate
          </Button>
          <Button
            variant="success"
            onClick={TotalComponentOverrides.SaveButtonTotal.onClick}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TotalIrrigation;
