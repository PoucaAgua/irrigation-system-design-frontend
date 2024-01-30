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
        className="form-control mb-3"
        value={totalIrrigation}
        onChange={(e) => setTotalIrrigation(e.target.value)}
      />

      <label className="left-label" htmlFor="input2">
        Spacing between plants
      </label>
      <input
        id="input2"
        type="text"
        placeholder=""
        className="form-control mb-3"
        value={spacingBetweenPlants}
        onChange={(e) => setSpacingBetweenPlants(e.target.value)}
      />

      <label className="left-label" htmlFor="input3">
        Spacing between side lines
      </label>
      <input
        id="input3"
        type="text"
        placeholder=""
        className="form-control mb-3"
        value={spacingBetweenSideLines}
        onChange={(e) => setSpacingBetweenSideLines(e.target.value)}
      />

      <label className="left-label" htmlFor="input4">
        Number of emitters per plant
      </label>
      <input
        id="input4"
        type="text"
        placeholder=""
        className="form-control mb-3"
        value={numberOfEmittersPerPlant}
        onChange={(e) => setNumberOfEmittersPerPlant(e.target.value)}
      />

      <label className="left-label" htmlFor="input5">
        Emitter flow
      </label>
      <input
        id="input5"
        type="text"
        placeholder=""
        className="form-control mb-3"
        value={emitterFlow}
        onChange={(e) => setEmitterFlow(e.target.value)}
      />
    </div>
  );
}

export default PlantInput;
