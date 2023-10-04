import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Soil({
  resultSoilParams,
  soilMoistureFieldCapacity,
  setSoilMoistureFieldCapacity,
  soilMoistureAtPermanentWiltingPoint,
  setSoilMoistureAtPermanentWiltingPoint,
  depletionFactor,
  setDepletionFactor,
  soilDepth,
  setSoilDepth,
  effectivePrecipitation,
  setEffectivePrecipitation,
  SoilComponentOverrides,
  validationError,
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
        Irrigation by Soil
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Irrigation by Soil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input mb-3 d-flex flex-column align-items-center">
            <label
              className="left-label"
              htmlFor="input1"
              style={{ marginRight: "28%" }}
            >
              Soil Moisture Field Capacity
            </label>
            <input
              id="input1"
              type="text"
              placeholder="Field capacity in cm³/cm³"
              className="form-control mb-3"
              style={{ width: "330px" }}
              value={soilMoistureFieldCapacity}
              onChange={(e) => setSoilMoistureFieldCapacity(e.target.value)}
            />

            <label
              className="left-label"
              htmlFor="input2"
              style={{ marginRight: "8%" }}
            >
              Soil Moisture At Permanent Wilting Point
            </label>
            <input
              id="input2"
              type="text"
              placeholder="Permanent wilting point in cm³/cm³"
              className="form-control mb-3"
              style={{ width: "330px" }}
              value={soilMoistureAtPermanentWiltingPoint}
              onChange={(e) =>
                setSoilMoistureAtPermanentWiltingPoint(e.target.value)
              }
            />

            <label
              className="left-label"
              htmlFor="input3"
              style={{ marginRight: "45%" }}
            >
              Depletion Factor
            </label>
            <input
              id="input3"
              type="text"
              placeholder="0.3 to 0.7. It is always less than 1."
              className="form-control mb-3"
              style={{ width: "330px" }}
              value={depletionFactor}
              onChange={(e) => setDepletionFactor(e.target.value)}
            />

            <label
              className="left-label"
              htmlFor="input4"
              style={{ marginRight: "54%" }}
            >
              Soil Depth
            </label>
            <input
              id="input4"
              type="text"
              placeholder=" Soil depth in cm"
              className="form-control mb-3"
              style={{ width: "330px" }}
              value={soilDepth}
              onChange={(e) => setSoilDepth(e.target.value)}
            />

            <label
              className="left-label"
              htmlFor="input5"
              style={{ marginRight: "37%" }}
            >
              Effective Precipitation
            </label>
            <input
              id="input5"
              type="text"
              placeholder=" Effective precipitation in mm"
              className="form-control mb-3"
              style={{ width: "330px" }}
              value={effectivePrecipitation}
              onChange={(e) => setEffectivePrecipitation(e.target.value)}
            />
          </div>
          {validationError && (
            <div
              className="alert alert-danger"
              role="alert"
              style={{ width: "60%", margin: "0 auto" }}
            >
              {validationError}
            </div>
          )}
          {resultSoilParams !== null && (
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
                      <th scope="col">Irrigation by Soil Params</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{resultSoilParams}</td>
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
            onClick={SoilComponentOverrides.CalculateButtonSoilParams.onClick}
          >
            Calculate
          </Button>
          <Button
            variant="success"
            onClick={SoilComponentOverrides.SaveButtonSoilParams.onClick}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Soil;
