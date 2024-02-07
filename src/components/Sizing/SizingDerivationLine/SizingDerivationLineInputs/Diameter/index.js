import React from "react";

function DiameterInput({
  demandFlow,
  setDemandFlow,
  speedMax,
  setSpeedMax,
  demandFlowError,
  speedMaxError,
  handleDemandFlowChange,
  handleSpeedMaxChange,
}) {
  return (
    <div
      className="input mb-3 d-flex flex-column"
      style={{ marginLeft: "10%", marginRight: "10%" }}
    >
      <label className="left-label" htmlFor="input1">
        Demand flow
      </label>
      <input
        id="input1"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${demandFlowError ? "is-invalid" : ""}`}
        value={demandFlow}
        onChange={handleDemandFlowChange}
      />

      <label className="left-label" htmlFor="input2">
        Speed max
      </label>
      <input
        id="input2"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${speedMaxError ? "is-invalid" : ""}`}
        value={speedMax}
        onChange={handleSpeedMaxChange}
      />
    </div>
  );
}

export default DiameterInput;
