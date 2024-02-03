import React from "react";

function LoadInput({
  lengthDerivation,
  setLengthDerivation,
  flow,
  setFlow,
  noutputs,
  setNoutputs,
  diameterDerivation,
  setDiameterDerivation,
}) {
  return (
    <div
      className="input mb-3 d-flex flex-column"
      style={{ marginLeft: "10%", marginRight: "10%" }}
    >
      <label className="left-label" htmlFor="input1">
        Length of derivation line
      </label>
      <input
        id="input1"
        type="text"
        placeholder=""
        className="form-control mb-3"
        value={lengthDerivation}
        onChange={(e) => setLengthDerivation(e.target.value)}
      />

      <label className="left-label" htmlFor="input2">
        Flow
      </label>
      <input
        id="input2"
        type="text"
        placeholder=""
        className="form-control mb-3"
        value={flow}
        onChange={(e) => setFlow(e.target.value)}
      />

      <label className="left-label" htmlFor="input3">
        N Outputs
      </label>
      <input
        id="input3"
        type="text"
        placeholder=""
        className="form-control mb-3"
        value={noutputs}
        onChange={(e) => setNoutputs(e.target.value)}
      />

      <label className="left-label" htmlFor="input4">
        Diameter of derivation line
      </label>
      <input
        id="input4"
        type="text"
        placeholder=""
        className="form-control mb-3"
        value={diameterDerivation}
        onChange={(e) => setDiameterDerivation(e.target.value)}
      />
    </div>
  );
}

export default LoadInput;
