import React from "react";

function HeadInput({
  lengthLateral,
  setLengthLateral,
  internalDiameter,
  setInternalDiameter,
  emitterSpacing,
  setEmitterSpacing,
  nominalFlow,
  setNominalFlow,
  nominalFlowError,
  emitterSpacingError,
  internalDiameterError,
  lengthLateralError,
  handleNominalFlowChange,
  handleEmitterSpacingChange,
  handleInternalDiameterChange,
  handleLengthLateralChange,
}) {
  return (
    <div
      className="input mb-3 d-flex flex-column"
      style={{ marginLeft: "10%", marginRight: "10%" }}
    >
      <label className="left-label" htmlFor="input1">
        Length of lateral line
      </label>
      <input
        id="input1"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${
          lengthLateralError ? "is-invalid" : ""
        }`}
        value={lengthLateral}
        onChange={handleLengthLateralChange}
      />

      <label className="left-label" htmlFor="input2">
        Internal diameter
      </label>
      <input
        id="input2"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${
          internalDiameterError ? "is-invalid" : ""
        }`}
        value={internalDiameter}
        onChange={handleInternalDiameterChange}
      />

      <label className="left-label" htmlFor="input3">
        Emitter spacing
      </label>
      <input
        id="input3"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${
          emitterSpacingError ? "is-invalid" : ""
        }`}
        value={emitterSpacing}
        onChange={handleEmitterSpacingChange}
      />

      <label className="left-label" htmlFor="input4">
        Nominal flow rate
      </label>
      <input
        id="input4"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${nominalFlowError ? "is-invalid" : ""}`}
        value={nominalFlow}
        onChange={handleNominalFlowChange}
      />
    </div>
  );
}

export default HeadInput;
