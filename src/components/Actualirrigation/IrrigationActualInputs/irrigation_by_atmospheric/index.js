import React from "react";

function AtmosphericInput({
  kc,
  setKc,
  percentwettedarea,
  setPercentwettedarea,
  actualevapotranspiration,
  setActualevapotranspiration,
}) {
  return (
    <div
      className="input mb-3 d-flex flex-column"
      style={{ marginLeft: "10%", marginRight: "10%" }}
    >
      <label className="left-label" htmlFor="input1">
        Kc
      </label>
      <input
        id="input1"
        type="text"
        placeholder=""
        className="form-control mb-3"
        value={kc}
        onChange={(e) => setKc(e.target.value)}
      />

      <label className="left-label" htmlFor="input2">
        Percent wetted area
      </label>
      <input
        id="input2"
        type="text"
        placeholder=""
        className="form-control mb-3"
        value={percentwettedarea}
        onChange={(e) => setPercentwettedarea(e.target.value)}
      />

      <label className="left-label" htmlFor="input3">
        Actual evapotranspiration
      </label>
      <input
        id="input3"
        type="text"
        placeholder=""
        className="form-control mb-3"
        value={actualevapotranspiration}
        onChange={(e) => setActualevapotranspiration(e.target.value)}
      />
    </div>
  );
}

export default AtmosphericInput;
