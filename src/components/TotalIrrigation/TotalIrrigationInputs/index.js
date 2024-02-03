import React from "react";

function TotalInput({
  actualIrrigation,
  setActualIrrigation,
  electricalConductivityIrrigation,
  setElectricalConductivityIrrigation,
  electricalConductivitySaturation,
  setElectricalConductivitySaturation,
  leachingFraction,
  setLeachingFraction,
  efficiency,
  setEfficiency,
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
        Electrical conductivity irrigation
      </label>
      <input
        id="input2"
        type="text"
        placeholder=""
        className="form-control mb-3"
        value={electricalConductivityIrrigation}
        onChange={(e) => setElectricalConductivityIrrigation(e.target.value)}
      />

      <label className="left-label" htmlFor="input3">
        Electrical conductivity saturation
      </label>
      <input
        id="input3"
        type="text"
        placeholder=""
        className="form-control mb-3"
        value={electricalConductivitySaturation}
        onChange={(e) => setElectricalConductivitySaturation(e.target.value)}
      />

      <label className="left-label" htmlFor="input4">
        Leaching fraction
      </label>
      <input
        id="input4"
        type="text"
        placeholder=""
        className="form-control mb-3"
        value={leachingFraction}
        onChange={(e) => setLeachingFraction(e.target.value)}
      />

      <label className="left-label" htmlFor="input5">
        Efficiency
      </label>
      <input
        id="input5"
        type="text"
        placeholder=""
        className="form-control mb-3"
        value={efficiency}
        onChange={(e) => setEfficiency(e.target.value)}
      />
    </div>
  );
}

export default TotalInput;
