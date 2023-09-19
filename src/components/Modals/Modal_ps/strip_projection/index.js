import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function StripModalRender({
  showModalPsStrip,
  toggleModalStrip,
  sr,
  ss,
  setSr,
  setSs,
  resultPsStrip,
  validationError,
  loadingCalculate,
  StripComponentOverrides,
}) {
  return (
    <>
      <div className="form-check" style={{ marginRight: 16 }}>
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
          <div className="input mb-3 d-flex flex-column align-items-center">
            <label className="form-label" style={{ marginRight: "18%" }}>
              Spacing between rows of plants:
            </label>
            <input
              id="input5"
              type="text"
              className="form-control"
              style={{ width: "330px" }}
              placeholder="Sr (m)"
              value={sr}
              onChange={(e) => setSr(e.target.value)}
            />
            <label className="form-label" style={{ marginRight: "47%" }}>
              Shaded strip:
            </label>
            <input
              id="input5"
              type="text"
              className="form-control"
              style={{ width: "330px" }}
              placeholder="Ss (m)"
              value={ss}
              onChange={(e) => setSs(e.target.value)}
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
          {resultPsStrip !== null && (
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
                      <th scope="col">Ps Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{resultPsStrip}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={StripComponentOverrides.SaveButtonPsStrip.onClick}
          >
            Save
          </Button>
          <Button
            variant="primary"
            onClick={StripComponentOverrides.CalculateButtonPsStrip.onClick}
          >
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
