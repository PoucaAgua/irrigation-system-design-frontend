import React from "react";

function StripInput({
  sw,
  setSw,
  sp,
  setSp,
  sr,
  setSr,
  StripPwComponentOverrides,
  spError,
  srError,
  swError,
  handleSrChange,
  handleSpChange,
  handleSwChange,
}) {
  return (
    <div
      className="input mb-3 d-flex flex-column"
      style={{ marginLeft: "10%", marginRight: "10%" }}
    >
      <b
        className="text-center fs-6"
        style={{ marginBottom: 15, marginTop: 10 }}
      >
        Calculate monisted area Aw = SP x SW, m²
      </b>
      <label htmlFor="input1" className="left-label">
        Crown projection diameter:
      </label>
      <input
        id="input1"
        type="text"
        className={`form-control mb-3 ${swError ? "is-invalid" : ""}`}
        placeholder="Sw (m²)"
        value={sw}
        onChange={handleSwChange}
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

      <b
        className="text-center fs-6"
        style={{ marginBottom: 15, marginTop: 30 }}
      >
        Calculate occupied plant Ap = SP x SR, m²
      </b>
      <label htmlFor="input3" className="left-label">
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
      <label htmlFor="input4" className="left-label">
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
    </div>
  );
}

export default StripInput;
