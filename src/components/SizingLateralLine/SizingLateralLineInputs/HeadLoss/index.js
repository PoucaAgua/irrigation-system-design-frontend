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
        className="form-control mb-3"
        value={lengthLateral}
        onChange={(e) => setLengthLateral(e.target.value)}
      />

      <label className="left-label" htmlFor="input2">
        Internal diameter
      </label>
      <input
        id="input2"
        type="text"
        placeholder=""
        className="form-control mb-3"
        value={internalDiameter}
        onChange={(e) => setInternalDiameter(e.target.value)}
      />

      <label className="left-label" htmlFor="input3">
        Emitter spacing
      </label>
      <input
        id="input3"
        type="text"
        placeholder=""
        className="form-control mb-3"
        value={emitterSpacing}
        onChange={(e) => setEmitterSpacing(e.target.value)}
      />

      <label className="left-label" htmlFor="input4">
        Nominal flow rate
      </label>
      <input
        id="input4"
        type="text"
        placeholder=""
        className="form-control mb-3"
        value={nominalFlow}
        onChange={(e) => setNominalFlow(e.target.value)}
      />
    </div>
  );
}

export default HeadInput;
