import React from "react";
import "./style.css"; // Importe seu arquivo CSS personalizado

function LabeledInputs() {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="form-group">
        <label htmlFor="input1" className="left-label">
          Spacing between rows of plants:
        </label>
        <input
          id="input1"
          type="text"
          className="form-control mb-3"
          style={{ width: "330px" }}
          placeholder="Sr (m)"
        />
      </div>

      <div className="form-group">
        <label htmlFor="input2" className="left-label">
          Spacing between plants in the row:
        </label>
        <input
          id="input2"
          type="text"
          className="form-control mb-3"
          style={{ width: "330px" }}
          placeholder="Sp (m)"
        />
      </div>

      <div className="form-group">
        <label htmlFor="input3" className="left-label">
          Spacing between lateral lines:
        </label>
        <input
          id="input3"
          type="text"
          className="form-control mb-3"
          style={{ width: "330px" }}
          placeholder="Sl (m)"
        />
      </div>

      <div className="form-group">
        <label htmlFor="input4" className="left-label">
          Percentage of wetted area:
        </label>
        <input
          id="input4"
          type="text"
          className="form-control mb-3"
          style={{ width: "330px" }}
          placeholder="Pw (%)"
        />
      </div>

      <div className="form-group">
        <label htmlFor="input5" className="left-label">
          Percentage of wetted area:
        </label>
        <input
          id="input5"
          type="text"
          className="form-control mb-3"
          style={{ width: "330px" }}
          placeholder="Ps (%)"
        />
      </div>

      <div className="form-group">
        <label htmlFor="input6" className="left-label">
          Assumed emission uniformity for the project:
        </label>
        <input
          id="input6"
          type="text"
          className="form-control mb-3"
          style={{ width: "330px" }}
          placeholder="UE (%)"
        />
      </div>
    </div>
  );
}

export default LabeledInputs;
