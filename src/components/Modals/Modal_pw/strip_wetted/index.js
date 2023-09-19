import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function PwStripModalRender({
  showModalPwStrip,
  toggleModalPwStrip,
  sr,
  sp,
  sw,
  resultPwStrip,
  validationError,
  loadingCalculate,
  StripPwComponentOverrides,
}) {
  return (
    <>
      {" "}
      <div className="form-check" style={{ marginLeft: 16 }}>
        <input
          type="radio"
          className="form-check-input"
          id="radioButtonCStrip"
          name="modalRadio"
          onChange={toggleModalPwStrip}
        />
        <label className="form-check-label" htmlFor="radioButtonCStrip">
          Continuous Strip
        </label>
      </div>
      <Modal show={showModalPwStrip} onHide={toggleModalPwStrip}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center fs-4">
            Percent Wetted Area By <br /> Continuous strip <br /> Aw / Ap x 100
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input mb-3 d-flex flex-column align-items-center">
            <b
              className="text-center fs-6"
              style={{ marginBottom: 15, marginTop: 10 }}
            >
              Calculate monisted area Aw = SP x SW , m²
            </b>
            <label
              htmlFor="input5"
              className="left-label"
              style={{ marginRight: "27%" }}
            >
              Crown projection diameter:
            </label>
            <input
              id="input5"
              type="text"
              className="form-control mb-3"
              style={{ width: "330px" }}
              placeholder="Sw (m²)"
              value={sw}
              onChange={(e) => StripPwComponentOverrides.Sw.onChange(e)}
            />
            <label
              htmlFor="input5"
              className="left-label"
              style={{ marginRight: "16%" }}
            >
              Spacing between plants in the row
            </label>
            <input
              id="input5"
              type="text"
              className="form-control mb-3"
              style={{ width: "330px" }}
              placeholder="Sp (m)"
              value={sp}
              onChange={(e) => StripPwComponentOverrides.Sp.onChange(e)}
            />

            <b
              className="text-center fs-6"
              style={{ marginBottom: 15, marginTop: 30 }}
            >
              Calculate occupied plant Ap = SP x SR, m²
            </b>
            <label
              htmlFor="input5"
              className="left-label"
              style={{ marginRight: "16%" }}
            >
              Spacing between plants in the row:
            </label>
            <input
              id="input5"
              type="text"
              className="form-control mb-3"
              style={{ width: "330px" }}
              placeholder="Sp (m)"
              value={sp}
              onChange={(e) => StripPwComponentOverrides.Sp.onChange(e)}
            />
            <label
              htmlFor="input5"
              className="left-label"
              style={{ marginRight: "20%" }}
            >
              Spacing between rows of plants:
            </label>
            <input
              id="input5"
              type="text"
              className="form-control mb-3"
              style={{ width: "330px" }}
              placeholder="Sr (m)"
              value={sr}
              onChange={(e) => StripPwComponentOverrides.Sr.onChange(e)}
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
          {resultPwStrip !== null && (
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
                      <th scope="col">Pw Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{resultPwStrip}</td>
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
            onClick={StripPwComponentOverrides.SaveButtonStripPw.onClick}
          >
            Save
          </Button>
          <Button
            variant="primary"
            onClick={StripPwComponentOverrides.CalculateButtonStripPw.onClick}
          >
            Calculate
          </Button>
          <Button variant="danger" onClick={toggleModalPwStrip}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PwStripModalRender;
