import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import IrrigationSystemDesignService from "../../../../services/irrigation_system_design_backend";

const irrigationSystemDesignService = new IrrigationSystemDesignService();

function CanopyModal({ Canopy, setCanopy }) {
  const [loadingCalculate, setLoadingCalculate] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [sr, setSr] = useState("");
  const [sp, setSp] = useState("");
  const [dco, setDco] = useState("");
  const [result, setResult] = useState(null);
  const [validationError, setValidationError] = useState("");

  const CanopyComponentOverrides = {
    Sr: {
      onChange: (event) => {
        setSr(event.target.value);
      },
      type: "number",
    },
    Sp: {
      onChange: (event) => {
        setSp(event.target.value);
      },
      type: "number",
    },
    Dco: {
      onChange: (event) => {
        setDco(event.target.value);
      },
      type: "number",
    },

    CalculateButton: {
      onClick: async () => {
        if (!sr || !sp || !dco) {
          setValidationError("Please fill in all fields.");
          return;
        }

        setLoadingCalculate(true);
        setValidationError("");

        const payload = {
          space_between_rows: sr,
          space_between_plants: sp,
          diameter_projection: dco,
        };

        try {
          const response = await irrigationSystemDesignService.calculateCanopy(
            payload
          );

          console.log("API Response:", response);
          setResult(response.value);
        } catch (error) {
          console.error("Error calculating Canopy:", error);
        } finally {
          setLoadingCalculate(false);
        }
      },
    },

    SaveButton: {
      onClick: () => {
        alert("SaveButton need to be implemented....");
      },
    },
    Canopy: {
      value: loadingCalculate ? "Loading..." : Canopy,
    },
  };

  const toggleModalCanopy = () => {
    setShowModal(!showModal);
  };

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

      <Modal show={showModal} onHide={toggleModalCanopy}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center fs-4">
            Percent Shaded Area
            <br /> By Plant Canopy Projection
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input mb-3 d-flex flex-column align-items-center">
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
              placeholder="Dco (m)"
              value={dco}
              onChange={(e) => setDco(e.target.value)}
            />
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
              onChange={(e) => setSp(e.target.value)}
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
          {result !== null && (
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
                      <td>{result}</td>
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
            onClick={CanopyComponentOverrides.SaveButton.onClick}
          >
            Save
          </Button>
          <Button
            variant="primary"
            onClick={CanopyComponentOverrides.CalculateButton.onClick}
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

export default CanopyModal;
