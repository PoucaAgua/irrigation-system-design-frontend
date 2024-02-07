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
  diameterDerivationError,
  lengthDerivationError,
  noutputsError,
  flowError,
  handleDiameterDerivationChange,
  handleLengthDerivationChange,
  handleNoutputsChange,
  handleFlowChange,
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
        className={`form-control mb-3 ${
          lengthDerivationError ? "is-invalid" : ""
        }`}
        value={lengthDerivation}
        onChange={handleLengthDerivationChange}
      />

      <label className="left-label" htmlFor="input2">
        Flow
      </label>
      <input
        id="input2"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${flowError ? "is-invalid" : ""}`}
        value={flow}
        onChange={handleFlowChange}
      />

      <label className="left-label" htmlFor="input3">
        N Outputs
      </label>
      <input
        id="input3"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${noutputsError ? "is-invalid" : ""}`}
        value={noutputs}
        onChange={handleNoutputsChange}
      />

      <label className="left-label" htmlFor="input4">
        Diameter of derivation line
      </label>
      <input
        id="input4"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${
          diameterDerivationError ? "is-invalid" : ""
        }`}
        value={diameterDerivation}
        onChange={handleDiameterDerivationChange}
      />
    </div>
  );
}

export default LoadInput;
