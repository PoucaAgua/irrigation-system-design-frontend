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
  const [validationError, setValidationError] = useState("");

  const TreeComponentOverrides = {
    Sr: {
      onChange: (event) => {
        setSr(event.target.value);
        setValidationError("");
      },
      type: "number",
    },
    Sp: {
      onChange: (event) => {
        setSp(event.target.value);
        setValidationError("");
      },
      type: "number",
    },
    Np: {
      onChange: (event) => {
        setNp(event.target.value);
        setValidationError("");
      },
      type: "number",
    },
    Z: {
      onChange: (event) => {
        setZ(event.target.value);
        setValidationError("");
      },
      type: "number",
    },
    Q: {
      onChange: (event) => {
        setQ(event.target.value);
        setValidationError("");
      },
      type: "number",
    },
    K0: {
      onChange: (event) => {
        setK0(event.target.value);
        setValidationError("");
      },
      type: "number",
    },

    CalculateButton: {
      onClick: async () => {
        if (!sr || !sp || !np || !z || !q || !k0) {
          setValidationError("Please fill in all fields.");
          return;
        }

        setLoadingCalculate(true);
        setValidationError("");

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
        alert("SaveButton need to be implemented....");
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
          id="radioButtonTree"
          name="modalRadio"
          onChange={toggleModalTree}
        />
        <label className="form-check-label" htmlFor="radioButtonTree">
          Irrigation by Tree
        </label>
      </div>

      <Modal show={showModal} onHide={toggleModalTree}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center fs-4">
            Percent Wetted Area
            <br /> Irrigation by tree
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input mb-3 d-flex flex-column align-items-center">
            <label
              htmlFor="input5"
              className="left-label"
              style={{ marginRight: "23%" }}
            >
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

            <b
              className="text-center fs-5"
              style={{ marginTop: 15, marginBottom: 15 }}
            >
              Dw Calculate
            </b>

            <label
              htmlFor="input5"
              className="left-label"
              style={{ marginRight: "46%" }}
            >
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
              style={{ marginRight: "9%" }}
            >
              Hydraulic conductivity of saturated soil:
            </label>
            <input
              id="input5"
              type="text"
              className="form-control mb-3"
              style={{ width: "330px" }}
              placeholder="cm h-1 (k0)"
              value={k0}
              onChange={(e) => setK0(e.target.value)}
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
