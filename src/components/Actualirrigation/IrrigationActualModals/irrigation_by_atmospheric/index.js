import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Atmospheric({
  AtmosphericComponentOverrides,
  resultAtmospheric,
  kc,
  setKc,
  percentwettedarea,
  setPercentwettedarea,
  actualevapotranspiration,
  setActualevapotranspiration,
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
        Irrigation by Atmospheric
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Irrigation by Atmospheric</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input mb-3 d-flex flex-column align-items-center">
            <label
              className="left-label"
              htmlFor="input1"
              style={{ marginRight: "66%" }}
            >
              Kc
            </label>
            <input
              id="input1"
              type="text"
              placeholder=""
              className="form-control mb-3"
              style={{ width: "330px" }}
              value={kc}
              onChange={(e) => setKc(e.target.value)}
            />

            <label
              className="left-label"
              htmlFor="input2"
              style={{ marginRight: "39%" }}
            >
              Percent Wetted Area
            </label>
            <input
              id="input2"
              type="text"
              placeholder=""
              className="form-control mb-3"
              style={{ width: "330px" }}
              value={percentwettedarea}
              onChange={(e) => setPercentwettedarea(e.target.value)}
            />

            <label
              className="left-label"
              htmlFor="input3"
              style={{ marginRight: "31%" }}
            >
              Actual Evapotranspiration
            </label>
            <input
              id="input3"
              type="text"
              placeholder=""
              className="form-control mb-3"
              style={{ width: "330px" }}
              value={actualevapotranspiration}
              onChange={(e) => setActualevapotranspiration(e.target.value)}
            />
          </div>

          {resultAtmospheric !== null && (
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
                      <td>{resultAtmospheric}</td>
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
              AtmosphericComponentOverrides.CalculateButtonAtmospheric.onClick
            }
          >
            Calculate
          </Button>
          <Button
            variant="success"
            onClick={
              AtmosphericComponentOverrides.SaveButtonAtmospheric.onClick
            }
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Atmospheric;
