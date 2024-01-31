import React from "react";

function ShiftInput({
  actualIrrigation,
  setActualIrrigation,
  cropEvapotranspiration,
  setCropEvapotranspiration,
}) {
  return (
    <div
      className="input mb-3 d-flex flex-column"
      style={{ marginLeft: "10%", marginRight: "10%" }}
    >
      <label className="left-label" htmlFor="input1">
        Actual irrigation
      </label>
      <input
        id="input1"
        type="text"
        placeholder=""
        className="form-control mb-3"
        value={actualIrrigation}
        onChange={(e) => setActualIrrigation(e.target.value)}
      />

      <label className="left-label" htmlFor="input2">
        Crop evapotranspiration
      </label>
      <input
        id="input2"
        type="text"
        placeholder=""
        className="form-control mb-3"
        value={cropEvapotranspiration}
        onChange={(e) => setCropEvapotranspiration(e.target.value)}
      />
    </div>
  );
}

export default ShiftInput;
