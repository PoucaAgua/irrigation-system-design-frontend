import React from "react";

function StripInput({ sr, setSr, ss, setSs }) {
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
        className="form-control"
        placeholder="Sr (m)"
        value={sr}
        onChange={(e) => setSr(e.target.value)}
      />
      <label htmlFor="input2" className="form-label">
        Shaded strip:
      </label>
      <input
        id="input2"
        type="text"
        className="form-control"
        placeholder="Ss (m)"
        value={ss}
        onChange={(e) => setSs(e.target.value)}
      />
    </div>
  );
}

export default StripInput;
