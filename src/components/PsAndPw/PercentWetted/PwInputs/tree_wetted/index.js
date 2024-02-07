import React from "react";

function TreeInput({
  np,
  setNp,
  sp,
  setSp,
  sr,
  setSr,
  z,
  setZ,
  q,
  setQ,
  k0,
  setK0,
  k0Error,
  qError,
  zError,
  spError,
  srError,
  npError,
  handleK0Change,
  handleQChange,
  handleZChange,
  handleSrChange,
  handleSpChange,
  handleNpChange,
}) {
  return (
    <div
      className="input mb-3 d-flex flex-column"
      style={{ marginLeft: "10%", marginRight: "10%" }}
    >
      <label htmlFor="input1" className="left-label">
        Number of drippers per plant:
      </label>
      <input
        id="input1"
        type="text"
        className={`form-control mb-3 ${npError ? "is-invalid" : ""}`}
        placeholder="Np"
        value={np}
        onChange={handleNpChange}
      />

      <label htmlFor="input2" className="left-label">
        Spacing between plants in the row:
      </label>
      <input
        id="input2"
        type="text"
        className={`form-control mb-3 ${spError ? "is-invalid" : ""}`}
        placeholder="Sp (m)"
        value={sp}
        onChange={handleSpChange}
      />

      <label htmlFor="input3" className="left-label">
        Spacing between rows of plants:
      </label>
      <input
        id="input3"
        type="text"
        className={`form-control mb-3 ${srError ? "is-invalid" : ""}`}
        placeholder="Sr (m)"
        value={sr}
        onChange={handleSrChange}
      />

      <b
        className="text-center fs-5"
        style={{ marginTop: 15, marginBottom: 15 }}
      >
        Dw Calculate
      </b>

      <label htmlFor="input4" className="left-label">
        Wetting depth:
      </label>
      <input
        id="input4"
        type="text"
        className={`form-control mb-3 ${zError ? "is-invalid" : ""}`}
        placeholder="Z (cm)"
        value={z}
        onChange={handleZChange}
      />

      <label htmlFor="input5" className="left-label">
        Q:
      </label>
      <input
        id="input5"
        type="text"
        className={`form-control mb-3 ${qError ? "is-invalid" : ""}`}
        placeholder="Q"
        value={q}
        onChange={handleQChange}
      />

      <label htmlFor="input6" className="left-label">
        Hydraulic conductivity of saturated soil:
      </label>
      <input
        id="input6"
        type="text"
        className={`form-control mb-3 ${k0Error ? "is-invalid" : ""}`}
        placeholder="cm h-1 (k0)"
        value={k0}
        onChange={handleK0Change}
      />
    </div>
  );
}

export default TreeInput;
