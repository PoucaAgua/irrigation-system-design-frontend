import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function CanopyModalRender({
  showModalCanopy,
  toggleModalCanopy,
  sr,
  sp,
  dco,
  setSr,
  setSp,
  setDco,
  resultPs,
  validationError,
  loadingCalculate,
  CanopyComponentOverrides,
}) {
  return (
    <>
      <div className="form-check" style={{ marginLeft: 16 }}>
        <input
          type="radio"
          className="form-check-input"
          id="radioButtonCanopy"
          name="modalRadio"
          onChange={toggleModalCanopy}
        />
        <label className="form-check-label" htmlFor="radioButtonCanopy">
          Canopy Projection
        </label>
      </div>
      <Modal show={showModalCanopy} onHide={toggleModalCanopy}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center fs-4">
            Percent Shaded Area
            <br /> By Plant Canopy Projection
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="input mb-3 d-flex flex-column"
            style={{ marginLeft: "10%", marginRight: "10%" }}
          >
            <label htmlFor="input1" className="left-label">
              Crown projection diameter:
            </label>
            <input
              id="input1"
              type="text"
              className="form-control mb-3"
              placeholder="Dco (m)"
              value={dco}
              onChange={(e) => setDco(e.target.value)}
            />
            <label htmlFor="input2" className="left-label">
              Spacing between plants in the row:
            </label>
            <input
              id="input2"
              type="text"
              className="form-control mb-3"
              placeholder="Sp (m)"
              value={sp}
              onChange={(e) => setSp(e.target.value)}
            />
            <label htmlFor="input3" className="left-label">
              Spacing between rows of plants:
            </label>
            <input
              id="input3"
              type="text"
              className="form-control mb-3"
              placeholder="Sr (m)"
              value={sr}
              onChange={(e) => setSr(e.target.value)}
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
          {resultPs !== null && (
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
                      <td>{resultPs}</td>
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
            onClick={CanopyComponentOverrides.SaveButtonCanopy.onClick}
          >
            Save
          </Button>
          <Button
            variant="primary"
            onClick={CanopyComponentOverrides.CalculateButtonCanopy.onClick}
          >
            Calculate
          </Button>
          <Button variant="danger" onClick={toggleModalCanopy}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CanopyModalRender;
