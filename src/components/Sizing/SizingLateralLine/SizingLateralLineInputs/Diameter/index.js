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
        className="form-control mb-3"
        value={servicePressure}
        onChange={(e) => setServicePressure(e.target.value)}
      />

      <label className="left-label" htmlFor="input2">
        Nominal flow rate
      </label>
      <input
        id="input2"
        type="text"
        placeholder=""
        className="form-control mb-3"
        value={nominalFlow}
        onChange={(e) => setNominalFlow(e.target.value)}
      />

      <label className="left-label" htmlFor="input3">
        Max flow rate variation
      </label>
      <input
        id="input3"
        type="text"
        placeholder=""
        className="form-control mb-3"
        value={maxFlow}
        onChange={(e) => setMaxFlow(e.target.value)}
      />

      <label className="left-label" htmlFor="input4">
        Internal diameter
      </label>
      <input
        id="input4"
        type="text"
        placeholder=""
        className="form-control mb-3"
        value={internalDiameter}
        onChange={(e) => setInternalDiameter(e.target.value)}
      />

      <label className="left-label" htmlFor="input5">
        Emitter spacing
      </label>
      <input
        id="input5"
        type="text"
        placeholder=""
        className="form-control mb-3"
        value={emitterSpacing}
        onChange={(e) => setEmitterSpacing(e.target.value)}
      />

      <label className="left-label" htmlFor="input6">
        Flow exponent
      </label>
      <input
        id="input6"
        type="text"
        placeholder=""
        className="form-control mb-3"
        value={flowExponent}
        onChange={(e) => setFlowExponent(e.target.value)}
      />

      <label className="left-label" htmlFor="input7">
        Exponent pressure loss equation
      </label>
      <input
        id="input7"
        type="text"
        placeholder=""
        className="form-control mb-3"
        value={exponentPressure}
        onChange={(e) => setExponentPressure(e.target.value)}
      />

      <label className="left-label" htmlFor="input8">
        Coefficient
      </label>
      <input
        id="input8"
        type="text"
        placeholder=""
        className="form-control mb-3"
        value={coefficient}
        onChange={(e) => setCoefficient(e.target.value)}
      />
    </div>
  );
}

export default DiameterInput;
