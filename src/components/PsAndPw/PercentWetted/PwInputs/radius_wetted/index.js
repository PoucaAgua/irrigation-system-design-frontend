import React from "react";

function RadiusInput({ q, setQ, k0, setK0, alpha, setAlpha }) {
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
        className="form-control mb-3"
        placeholder="Q"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <label htmlFor="input2" className="left-label">
        Hydraulic conductivity:
      </label>
      <input
        id="input2"
        type="text"
        className="form-control mb-3"
        placeholder="Ko (cm h-1)"
        value={k0}
        onChange={(e) => setK0(e.target.value)}
      />
      <label htmlFor="input3" className="left-label">
        Soil water conductivity parameter:
      </label>
      <input
        id="input3"
        type="text"
        className="form-control mb-3"
        placeholder="α"
        value={alpha}
        onChange={(e) => setAlpha(e.target.value)}
      />
    </div>
  );
}

export default RadiusInput;
