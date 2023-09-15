import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import IrrigationSystemDesignService from "../../../../services/irrigation_system_design_backend";
const irrigationSystemDesignService = new IrrigationSystemDesignService();

function RadiusModal({ Radius, setRadius }) {
  const [loadingCalculate, setLoadingCalculate] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [q, setQ] = useState("");
  const [k0, setK0] = useState("");
  const [alpha, setAlpha] = useState("");
  const [result, setResult] = useState(null);

  const RadiusComponentOverrides = {
    Q: {
      onChange: (event) => {
        setQ(event.target.value);
      },
      type: "number",
    },
    K0: {
      onChange: (event) => {
        setK0(event.target.value);
      },
      type: "number",
    },
    Alpha: {
      onChange: (event) => {
        setAlpha(event.target.value);
      },
      type: "number",
    },

    CalculateButton: {
      onClick: async () => {
        setLoadingCalculate(true);
        const payload = {
          q: q,
          hydraulic_conductivity_of_saturated_soil: k0,
          parameter_model_unsaturated_hydraulic: alpha,
        };

        try {
          const response = await irrigationSystemDesignService.calculateRadius(
            payload
          );

          console.log("API Response:", response);
          setResult(response.value);
        } catch (error) {
          console.error(
            "Error calculating Twice saturated wetted radius:",
            error
          );
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
    Radius: {
      value: loadingCalculate ? "Loading..." : Radius,
    },
  };

  const toggleModalRadius = () => {
    setShowModal(!showModal);
  };

  return (
    <>
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

      <Modal show={showModal} onHide={toggleModalRadius}>
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
              onChange={(e) => setQ(e.target.value)}
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
              onChange={(e) => setK0(e.target.value)}
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
              onChange={(e) => setAlpha(e.target.value)}
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
                      <th scope="col">Pw Result</th>
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
            onClick={RadiusComponentOverrides.SaveButton.onClick}
          >
            Save
          </Button>
          <Button
            variant="primary"
            onClick={RadiusComponentOverrides.CalculateButton.onClick}
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

export default RadiusModal;
