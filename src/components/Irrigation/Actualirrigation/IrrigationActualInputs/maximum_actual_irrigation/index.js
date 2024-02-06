import React from "react";

function MaximunInput({
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
  fractionOfTotalWettedArea,
  setFractionOfTotalWettedArea,
  soilMoistureFieldCapacityError,
  soilMoistureAtPermanentWiltingPointError,
  depletionFactorError,
  soilDepthError,
  effectivePrecipitationError,
  fractionOfTotalWettedAreaError,
  handleFractionOfTotalWettedChange,
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
          soilMoistureFieldCapacityError ? "is-invalid" : ""
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
          soilMoistureAtPermanentWiltingPointError ? "is-invalid" : ""
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
          depletionFactorError ? "is-invalid" : ""
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
        className={`form-control mb-3 ${soilDepthError ? "is-invalid" : ""}`}
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
          effectivePrecipitationError ? "is-invalid" : ""
        }`}
        value={effectivePrecipitation}
        onChange={handleEffectivePrecipitationChange}
      />

      <label className="left-label" htmlFor="input6">
        Fraction of total wetted area
      </label>
      <input
        id="input6"
        type="text"
        placeholder="fraction of total wetted area, dimensionless"
        className={`form-control mb-3 ${
          fractionOfTotalWettedAreaError ? "is-invalid" : ""
        }`}
        value={fractionOfTotalWettedArea}
        onChange={handleFractionOfTotalWettedChange}
      />
    </div>
  );
}

export default MaximunInput;
