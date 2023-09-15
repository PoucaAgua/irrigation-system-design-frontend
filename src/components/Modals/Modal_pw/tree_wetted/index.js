import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import IrrigationSystemDesignService from "../../../../services/irrigation_system_design_backend";
const irrigationSystemDesignService = new IrrigationSystemDesignService();

function TreeModal({ Tree, setTree }) {
  const [loadingCalculate, setLoadingCalculate] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [sr, setSr] = useState("");
  const [sp, setSp] = useState("");
  const [np, setNp] = useState("");
  const [z, setZ] = useState("");
  const [q, setQ] = useState("");
  const [k0, setK0] = useState("");
  const [result, setResult] = useState(null);

  const TreeComponentOverrides = {
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
    Np: {
      onChange: (event) => {
        setNp(event.target.value);
      },
      type: "number",
    },
    Z: {
      onChange: (event) => {
        setNp(event.target.value);
      },
      type: "number",
    },
    Q: {
      onChange: (event) => {
        setNp(event.target.value);
      },
      type: "number",
    },
    K0: {
      onChange: (event) => {
        setNp(event.target.value);
      },
      type: "number",
    },

    CalculateButton: {
      onClick: async () => {
        setLoadingCalculate(true);
        const payload = {
          space_between_lines: sr,
          space_between_plants: sp,
          drippers_number: np,
          z: z,
          q: q,
          hydraulic_conductivity_of_saturated_soil: k0,
        };

        try {
          const response = await irrigationSystemDesignService.calculateTree(
            payload
          );

          console.log("API Response:", response);
          setResult(response.value);
        } catch (error) {
          console.error("Error calculating Irrigation by tree:", error);
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
    Tree: {
      value: loadingCalculate ? "Loading..." : Tree,
    },
  };

  const toggleModalTree = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="form-check" style={{ marginLeft: 16 }}>
        <input
          type="radio"
          className="form-check-input"
          id="radioButton"
          name="modalRadio"
          onChange={toggleModalTree}
        />
        <label className="form-check-label" htmlFor="radioButton">
          Irrigation by tree
        </label>
      </div>

      <Modal show={showModal} onHide={toggleModalTree}>
        <Modal.Header closeButton>
          <Modal.Title>Percent Wetted Area Irrigation by tree</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="input5" className="left-label">
            Number of drippers per plant:
          </label>
          <input
            id="input5"
            type="text"
            className="form-control mb-3"
            style={{ width: "330px" }}
            placeholder="Np"
            value={np}
            onChange={(e) => setNp(e.target.value)}
          />

          <label htmlFor="input5" className="left-label">
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

          <label htmlFor="input5" className="left-label">
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

          <p>Dw Calculate. Maximum diameter wetted by the dripper, m</p>

          <label htmlFor="input5" className="left-label">
            Wetting depth:
          </label>
          <input
            id="input5"
            type="text"
            className="form-control mb-3"
            style={{ width: "330px" }}
            placeholder="Z (cm)"
            value={z}
            onChange={(e) => setZ(e.target.value)}
          />

          <label htmlFor="input5" className="left-label">
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

          <label htmlFor="input5" className="left-label">
            Hydraulic conductivity of saturated soil:
          </label>
          <input
            id="input5"
            type="text"
            className="form-control mb-3"
            style={{ width: "330px" }}
            placeholder="cm h-1"
            value={k0}
            onChange={(e) => setK0(e.target.value)}
          />

          {result !== null && (
            <div>
              <strong>Result:</strong> {result}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={TreeComponentOverrides.SaveButton.onClick}
          >
            Save
          </Button>
          <Button
            variant="primary"
            onClick={TreeComponentOverrides.CalculateButton.onClick}
          >
            Calculate
          </Button>
          <Button variant="danger" onClick={toggleModalTree}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TreeModal;
