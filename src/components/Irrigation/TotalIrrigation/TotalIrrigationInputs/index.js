import React from "react";

function TotalInput({
  actualIrrigation,
  setActualIrrigation,
  electricalConductivityIrrigation,
  handleElectricalConductivityIrrigationChange,
  setElectricalConductivityIrrigation,
  electricalConductivitySaturation,
  handleElectricalConductivitySaturationChange,
  setElectricalConductivitySaturation,
  leachingFraction,
  handleLeachingFractionChange,
  setLeachingFraction,
  efficiency,
  handleEfficiencyChange,
  setEfficiency,
  actualIrrigationError,
  handleActualIrrigationChange,
  electricalConductivityIrrigationError,
  electricalConductivitySaturationError,
  leachingFractionError,
  efficiencyError,
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
          actualIrrigationError
            ? "is-invalid"
            : actualIrrigation
            ? "is-valid"
            : ""
        }`}
        value={actualIrrigation}
        onChange={handleActualIrrigationChange}
      />

      <label className="left-label" htmlFor="input2">
        Electrical conductivity irrigation
      </label>
      <input
        id="input2"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${
          electricalConductivityIrrigationError
            ? "is-invalid"
            : electricalConductivityIrrigation
            ? "is-valid"
            : ""
        }`}
        value={electricalConductivityIrrigation}
        onChange={handleElectricalConductivityIrrigationChange}
      />

      <label className="left-label" htmlFor="input3">
        Electrical conductivity saturation
      </label>
      <input
        id="input3"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${
          electricalConductivitySaturationError
            ? "is-invalid"
            : electricalConductivitySaturation
            ? "is-valid"
            : ""
        }`}
        value={electricalConductivitySaturation}
        onChange={handleElectricalConductivitySaturationChange}
      />

      <label className="left-label" htmlFor="input4">
        Leaching fraction
      </label>
      <input
        id="input4"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${
          leachingFractionError
            ? "is-invalid"
            : leachingFraction
            ? "is-valid"
            : ""
        }`}
        value={leachingFraction}
        onChange={handleLeachingFractionChange}
      />

      <label className="left-label" htmlFor="input5">
        Efficiency
      </label>
      <input
        id="input5"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${
          efficiencyError ? "is-invalid" : efficiency ? "is-valid" : ""
        }`}
        value={efficiency}
        onChange={handleEfficiencyChange}
      />
    </div>
  );
}

export default TotalInput;
