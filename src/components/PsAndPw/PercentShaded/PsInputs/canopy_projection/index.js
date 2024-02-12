import React from "react";

function CanopyInput({
  dco,
  setDco,
  sp,
  setSp,
  sr,
  setSr,
  dcoError,
  spError,
  srError,
  handleSpChange,
  handleSrChange,
  handleDcoChange,
}) {
  return (
    <div
      className="input mb-3 d-flex flex-column"
      style={{ marginLeft: "10%", marginRight: "10%" }}
    >
      <label htmlFor="input1" className="left-label">
        Crown projection diameter:
      </label>
      <input
        id="input1"
        type="text"
        className={`form-control mb-3 ${
          dcoError ? "is-invalid" : dco ? "is-valid" : ""
        }`}
        placeholder="Dco (m)"
        value={dco}
        onChange={handleDcoChange}
      />

      <label htmlFor="input2" className="left-label">
        Spacing between plants in the row:
      </label>
      <input
        id="input2"
        type="text"
        className={`form-control mb-3 ${
          spError ? "is-invalid" : sp ? "is-valid" : ""
        }`}
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
        className={`form-control mb-3 ${
          srError ? "is-invalid" : sr ? "is-valid" : ""
        }`}
        placeholder="Sr (m)"
        value={sr}
        onChange={handleSrChange}
      />
    </div>
  );
}

export default CanopyInput;
