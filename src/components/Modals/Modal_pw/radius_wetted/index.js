import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function RadiusModalRender({
  showModalPwRadius,
  toggleModalRadius,
  q,
  k0,
  alpha,
  resultPw,
  validationError,
  loadingCalculate,
  RadiusComponentOverrides,
}) {
  return (
    <>
      {" "}
      <div className="form-check" style={{ marginLeft: 16 }}>
        <input
          type="radio"
          className="form-check-input"
          id="radioButtonRadius"
          name="modalRadio"
          onChange={toggleModalRadius}
        />
        <label className="form-check-label" htmlFor="radioButtonRadius">
          Twice Saturated Wetted Radius
        </label>
      </div>
      <Modal show={showModalPwRadius} onHide={toggleModalRadius}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center fs-4">
            Percent Wetted Area <br />
            By Twice saturated wetted radius
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input mb-3 d-flex flex-column align-items-center">
            <label
              htmlFor="input5"
              className="left-label"
              style={{ marginRight: "65%" }}
            >
              Q:
            </label>
            <input
              id="input5"
              type="text"
              className="form-control mb-3"
              style={{ width: "330px" }}
              placeholder="Q"
              value={q}
              onChange={(e) => RadiusComponentOverrides.Q.onChange(e)}
            />
            <label
              htmlFor="input5"
              className="left-label"
              style={{ marginRight: "34%" }}
            >
              Hydraulic conductivity:
            </label>
            <input
              id="input5"
              type="text"
              className="form-control mb-3"
              style={{ width: "330px" }}
              placeholder="Ko (cm h-1)"
              value={k0}
              onChange={(e) => RadiusComponentOverrides.K0.onChange(e)}
            />
            <label
              htmlFor="input5"
              className="left-label"
              style={{ marginRight: "16%" }}
            >
              Soil Water Conductivity Parameter:
            </label>
            <input
              id="input5"
              type="text"
              className="form-control mb-3"
              style={{ width: "330px" }}
              placeholder="α"
              value={alpha}
              onChange={(e) => RadiusComponentOverrides.Alpha.onChange(e)}
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
          {resultPw !== null && (
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
                      <td>{resultPw}</td>
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
            onClick={RadiusComponentOverrides.SaveButtonRadius.onClick}
          >
            Save
          </Button>
          <Button
            variant="primary"
            onClick={RadiusComponentOverrides.CalculateButtonRadius.onClick}
          >
            Calculate
          </Button>
          <Button variant="danger" onClick={toggleModalRadius}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RadiusModalRender;
