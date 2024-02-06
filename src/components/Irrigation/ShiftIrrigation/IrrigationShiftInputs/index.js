import React from "react";

function ShiftInput({
  actualIrrigation,
  setActualIrrigation,
  cropEvapotranspiration,
  setCropEvapotranspiration,
  actualIrrigationError,
  handleActualIrrigationChange,
  cropEvapotranspirationError,
  handleCropEvapotranspirationChange,
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
        className={`form-control mb-3 ${
          actualIrrigationError ? "is-invalid" : ""
        }`}
        value={actualIrrigation}
        onChange={handleActualIrrigationChange}
      />

      <label className="left-label" htmlFor="input2">
        Crop evapotranspiration
      </label>
      <input
        id="input2"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${
          cropEvapotranspirationError ? "is-invalid" : ""
        }`}
        value={cropEvapotranspiration}
        onChange={handleCropEvapotranspirationChange}
      />
    </div>
  );
}

export default ShiftInput;
