import React from "react";

function DiameterInput({
  servicePressure,
  setServicePressure,
  nominalFlow,
  setNominalFlow,
  maxFlow,
  setMaxFlow,
  internalDiameter,
  setInternalDiameter,
  emitterSpacing,
  setEmitterSpacing,
  flowExponent,
  setFlowExponent,
  exponentPressure,
  setExponentPressure,
  coefficient,
  setCoefficient,
  coefficientError,
  exponentPressureError,
  flowExponentError,
  emitterSpacingError,
  internalDiameterError,
  maxFlowError,
  nominalFlowError,
  servicePressureError,
  handleCoefficientChange,
  handleExponentPressureChange,
  handleInternalDiameterChange,
  handleFlowExponentChange,
  handleEmitterSpacingChange,
  handleMaxFlowChange,
  handleNominalFlowChange,
  handleServicePressureChange,
}) {
  return (
    <div
      className="input mb-3 d-flex flex-column"
      style={{ marginLeft: "10%", marginRight: "10%" }}
    >
      <label className="left-label" htmlFor="input1">
        Service pressure
      </label>
      <input
        id="input1"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${
          servicePressureError
            ? "is-invalid"
            : servicePressure
            ? "is-valid"
            : ""
        }`}
        value={servicePressure}
        onChange={handleServicePressureChange}
      />

      <label className="left-label" htmlFor="input2">
        Nominal flow rate
      </label>
      <input
        id="input2"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${
          nominalFlowError ? "is-invalid" : nominalFlow ? "is-valid" : ""
        }`}
        value={nominalFlow}
        onChange={handleNominalFlowChange}
      />

      <label className="left-label" htmlFor="input3">
        Max flow rate variation
      </label>
      <input
        id="input3"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${
          maxFlowError ? "is-invalid" : maxFlow ? "is-valid" : ""
        }`}
        value={maxFlow}
        onChange={handleMaxFlowChange}
      />

      <label className="left-label" htmlFor="input4">
        Internal diameter
      </label>
      <input
        id="input4"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${
          internalDiameterError
            ? "is-invalid"
            : internalDiameter
            ? "is-valid"
            : ""
        }`}
        value={internalDiameter}
        onChange={handleInternalDiameterChange}
      />

      <label className="left-label" htmlFor="input5">
        Emitter spacing
      </label>
      <input
        id="input5"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${
          emitterSpacingError ? "is-invalid" : emitterSpacing ? "is-valid" : ""
        }`}
        value={emitterSpacing}
        onChange={handleEmitterSpacingChange}
      />

      <label className="left-label" htmlFor="input6">
        Flow exponent
      </label>
      <input
        id="input6"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${
          flowExponentError ? "is-invalid" : flowExponent ? "is-valid" : ""
        }`}
        value={flowExponent}
        onChange={handleFlowExponentChange}
      />

      <label className="left-label" htmlFor="input7">
        Exponent pressure loss equation
      </label>
      <input
        id="input7"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${
          exponentPressureError
            ? "is-invalid"
            : exponentPressure
            ? "is-valid"
            : ""
        }`}
        value={exponentPressure}
        onChange={handleExponentPressureChange}
      />

      <label className="left-label" htmlFor="input8">
        Coefficient
      </label>
      <input
        id="input8"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${
          coefficientError ? "is-invalid" : coefficient ? "is-valid" : ""
        }`}
        value={coefficient}
        onChange={handleCoefficientChange}
      />
    </div>
  );
}

export default DiameterInput;
