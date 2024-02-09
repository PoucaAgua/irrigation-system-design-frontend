import React from "react";

function SoilInput({
  soilMoistureFieldCapacity,
  setSoilMoistureFieldCapacity,
  soilMoistureAtPermanentWiltingPoint,
  setSoilMoistureAtPermanentWiltingPoint,
  depletionFactor,
  setDepletionFactor,
  soilDepth,
  setSoilDepth,
  effectivePrecipitation,
  setEffectivePrecipitation,
  soilMoistureFieldCapacityError,
  soilMoistureAtPermanentWiltingPointError,
  depletionFactorError,
  soilDepthError,
  effectivePrecipitationError,
  handleSoilMoistureFieldCapacityChange,
  handleSoilMoistureAtPermanentWiltingChange,
  handleDepletionFactorChange,
  handleSoilDepthChange,
  handleEffectivePrecipitationChange,
}) {
  return (
    <div
      className="input mb-3 d-flex flex-column"
      style={{ marginLeft: "10%", marginRight: "10%" }}
    >
      <label className="left-label" htmlFor="input1">
        Soil moisture field capacity
      </label>
      <input
        id="input1"
        type="text"
        placeholder="Field capacity in cm³/cm³"
        className={`form-control mb-3 ${
          soilMoistureFieldCapacityError
            ? "is-invalid"
            : soilMoistureFieldCapacity
            ? "is-valid"
            : ""
        }`}
        value={soilMoistureFieldCapacity}
        onChange={handleSoilMoistureFieldCapacityChange}
      />

      <label className="left-label" htmlFor="input2">
        Soil moisture at permanent wilting point
      </label>
      <input
        id="input2"
        type="text"
        placeholder="Permanent wilting point in cm³/cm³"
        className={`form-control mb-3 ${
          soilMoistureAtPermanentWiltingPointError
            ? "is-invalid"
            : soilMoistureAtPermanentWiltingPoint
            ? "is-valid"
            : ""
        }`}
        value={soilMoistureAtPermanentWiltingPoint}
        onChange={handleSoilMoistureAtPermanentWiltingChange}
      />

      <label className="left-label" htmlFor="input3">
        Depletion factor
      </label>
      <input
        id="input3"
        type="text"
        placeholder="0.3 to 0.7. It is always less than 1."
        className={`form-control mb-3 ${
          depletionFactorError
            ? "is-invalid"
            : depletionFactor
            ? "is-valid"
            : ""
        }`}
        value={depletionFactor}
        onChange={handleDepletionFactorChange}
      />

      <label className="left-label" htmlFor="input4">
        Soil depth
      </label>
      <input
        id="input4"
        type="text"
        placeholder="Soil depth in cm"
        className={`form-control mb-3 ${
          soilDepthError ? "is-invalid" : soilDepth ? "is-valid" : ""
        }`}
        value={soilDepth}
        onChange={handleSoilDepthChange}
      />

      <label className="left-label" htmlFor="input5">
        Effective precipitation
      </label>
      <input
        id="input5"
        type="text"
        placeholder="Effective precipitation in mm"
        className={`form-control mb-3 ${
          effectivePrecipitationError
            ? "is-invalid"
            : effectivePrecipitation
            ? "is-valid"
            : ""
        }`}
        value={effectivePrecipitation}
        onChange={handleEffectivePrecipitationChange}
      />
    </div>
  );
}

export default SoilInput;
