import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import IrrigationSystemDesignService from "../../../../services/irrigation_system_design_backend";
const irrigationSystemDesignService = new IrrigationSystemDesignService();

function StripModal({ Strip, setStrip }) {
  const [loadingCalculate, setLoadingCalculate] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [sr, setSr] = useState("");
  const [ss, setSs] = useState("");
  const [result, setResult] = useState(null);

  const StripComponentOverrides = {
    Sr: {
      onChange: (event) => {
        setSr(event.target.value);
      },
      type: "number",
    },
    Ss: {
      onChange: (event) => {
        setSs(event.target.value);
      },
      type: "number",
    },

    CalculateButton: {
      onClick: async () => {
        setLoadingCalculate(true);
        const payload = {
          space_between_rows: sr,
          shaded_strip_plant: ss,
        };

        try {
          const response = await irrigationSystemDesignService.calculateStrip(
            payload
          );

          console.log("API Response:", response);
          setResult(response.value);
        } catch (error) {
          console.error("Error calculating Strip:", error);
        } finally {
          setLoadingCalculate(false);
        }
      },
    },

    SaveButton: {
      onClick: () => {
        alert("SaveButton need be implemented....");
      },
    },
    Strip: {
      value: loadingCalculate ? "Loading..." : Strip,
    },
  };

  const toggleModalStrip = () => {
    setShowModal(!showModal);
  };

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

      <Modal show={showModal} onHide={toggleModalStrip}>
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
                <table class="table table-bordered border-secondary">
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
            onClick={StripComponentOverrides.SaveButton.onClick}
          >
            Save
          </Button>
          <Button
            variant="primary"
            onClick={StripComponentOverrides.CalculateButton.onClick}
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

export default StripModal;
