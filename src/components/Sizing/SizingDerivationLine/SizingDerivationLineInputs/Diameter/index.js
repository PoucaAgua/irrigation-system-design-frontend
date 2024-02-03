import React from "react";

function DiameterInput({ demandFlow, setDemandFlow, speedMax, setSpeedMax }) {
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
        className="form-control mb-3"
        value={demandFlow}
        onChange={(e) => setDemandFlow(e.target.value)}
      />

      <label className="left-label" htmlFor="input2">
        Speed max
      </label>
      <input
        id="input2"
        type="text"
        placeholder=""
        className="form-control mb-3"
        value={speedMax}
        onChange={(e) => setSpeedMax(e.target.value)}
      />
    </div>
  );
}

export default DiameterInput;
