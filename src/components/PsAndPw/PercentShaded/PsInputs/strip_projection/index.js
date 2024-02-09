import React from "react";

function StripInput({
  sr,
  setSr,
  ss,
  setSs,
  ssError,
  srError,
  handleSsChange,
  handleSrChange,
}) {
  return (
    <div
      className="input mb-3 d-flex flex-column"
      style={{ marginLeft: "10%", marginRight: "10%" }}
    >
      <label htmlFor="input1" className="form-label">
        Spacing between rows of plants:
      </label>
      <input
        id="input1"
        type="text"
        className={`form-control mb-3 ${
          srError ? "is-invalid" : sr ? "is-valid" : ""
        }`}
        placeholder="Sr (m)"
        value={sr}
        onChange={handleSrChange}
      />
      <label htmlFor="input2" className="form-label">
        Shaded strip:
      </label>
      <input
        id="input2"
        type="text"
        className={`form-control mb-3 ${
          ssError ? "is-invalid" : ss ? "is-valid" : ""
        }`}
        placeholder="Ss (m)"
        value={ss}
        onChange={handleSsChange}
      />
    </div>
  );
}

export default StripInput;
