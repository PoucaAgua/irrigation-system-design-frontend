import React from "react";

function RadiusInput({
  q,
  setQ,
  k0,
  setK0,
  alpha,
  setAlpha,
  qError,
  k0Error,
  alphaError,
  handleQChange,
  handleK0Change,
  handleAlphaChange,
}) {
  return (
    <div
      className="input mb-3 d-flex flex-column"
      style={{ marginLeft: "10%", marginRight: "10%" }}
    >
      <label htmlFor="input1" className="left-label">
        Q:
      </label>
      <input
        id="input1"
        type="text"
        className={`form-control mb-3 ${qError ? "is-invalid" : ""}`}
        placeholder="Q"
        value={q}
        onChange={handleQChange}
      />
      <label htmlFor="input2" className="left-label">
        Hydraulic conductivity:
      </label>
      <input
        id="input2"
        type="text"
        className={`form-control mb-3 ${k0Error ? "is-invalid" : ""}`}
        placeholder="Ko (cm h-1)"
        value={k0}
        onChange={handleK0Change}
      />
      <label htmlFor="input3" className="left-label">
        Soil water conductivity parameter:
      </label>
      <input
        id="input3"
        type="text"
        className={`form-control mb-3 ${alphaError ? "is-invalid" : ""}`}
        placeholder="α"
        value={alpha}
        onChange={handleAlphaChange}
      />
    </div>
  );
}

export default RadiusInput;
