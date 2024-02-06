import React from "react";

function PlantInput({
  totalIrrigation,
  setTotalIrrigation,
  spacingBetweenPlants,
  setSpacingBetweenPlants,
  spacingBetweenSideLines,
  setSpacingBetweenSideLines,
  numberOfEmittersPerPlant,
  setNumberOfEmittersPerPlant,
  emitterFlow,
  setEmitterFlow,
  numberOfEmittersPerPlantError,
  spacingBetweenSideLinesError,
  spacingBetweenPlantsError,
  totalIrrigationError,
  emitterFlowError,
  handleTotalIrrigationChange,
  handleSpacingBetweenSideLinesChange,
  handleSpacingBetweenPlantsChange,
  handleEmitterFlowChange,
  handleNumberOfEmittersPerPlantChange,
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
        Spacing between plants
      </label>
      <input
        id="input2"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${
          spacingBetweenPlantsError ? "is-invalid" : ""
        }`}
        value={spacingBetweenPlants}
        onChange={handleSpacingBetweenPlantsChange}
      />

      <label className="left-label" htmlFor="input3">
        Spacing between side lines
      </label>
      <input
        id="input3"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${
          spacingBetweenSideLinesError ? "is-invalid" : ""
        }`}
        value={spacingBetweenSideLines}
        onChange={handleSpacingBetweenSideLinesChange}
      />

      <label className="left-label" htmlFor="input4">
        Number of emitters per plant
      </label>
      <input
        id="input4"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${
          numberOfEmittersPerPlantError ? "is-invalid" : ""
        }`}
        value={numberOfEmittersPerPlant}
        onChange={handleNumberOfEmittersPerPlantChange}
      />

      <label className="left-label" htmlFor="input5">
        Emitter flow
      </label>
      <input
        id="input5"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${emitterFlowError ? "is-invalid" : ""}`}
        value={emitterFlow}
        onChange={handleEmitterFlowChange}
      />
    </div>
  );
}

export default PlantInput;
