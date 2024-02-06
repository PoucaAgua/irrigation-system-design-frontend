import React from "react";

function LineInput({
  totalIrrigation,
  setTotalIrrigation,
  spacingBetweenSideLines,
  setSpacingBetweenSideLines,
  spacingBetweenEmitters,
  setSpacingbetweenEmitters,
  emitterFlow,
  setEmitterFlow,
  totalIrrigationError,
  spacingBetweenSideLinesError,
  spacingBetweenEmittersError,
  emitterFlowError,
  handleTotalIrrigationChange,
  handleSpacingBetweenSideLinesChange,
  handleSpacingBetweenEmittersChange,
  handleEmitterFlowChange,
}) {
  return (
    <div
      className="input mb-3 d-flex flex-column"
      style={{ marginLeft: "10%", marginRight: "10%" }}
    >
      <label className="left-label" htmlFor="input1">
        Total irrigation
      </label>
      <input
        id="input1"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${
          totalIrrigationError ? "is-invalid" : ""
        }`}
        value={totalIrrigation}
        onChange={handleTotalIrrigationChange}
      />

      <label className="left-label" htmlFor="input2">
        Spacing between side lines
      </label>
      <input
        id="input2"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${
          spacingBetweenSideLinesError ? "is-invalid" : ""
        }`}
        value={spacingBetweenSideLines}
        onChange={handleSpacingBetweenSideLinesChange}
      />

      <label className="left-label" htmlFor="input3">
        Spacing between emitters
      </label>
      <input
        id="input3"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${
          spacingBetweenEmittersError ? "is-invalid" : ""
        }`}
        value={spacingBetweenEmitters}
        onChange={handleSpacingBetweenEmittersChange}
      />

      <label className="left-label" htmlFor="input4">
        Emitter flow
      </label>
      <input
        id="input4"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${emitterFlowError ? "is-invalid" : ""}`}
        value={emitterFlow}
        onChange={handleEmitterFlowChange}
      />
    </div>
  );
}

export default LineInput;
