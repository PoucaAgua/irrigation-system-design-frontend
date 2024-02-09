import React from "react";

function AtmosphericInput({
  kc,
  setKc,
  percentwettedarea,
  setPercentwettedarea,
  actualevapotranspiration,
  setActualevapotranspiration,
  kcError,
  percentwettedareaError,
  actualevapotranspirationError,
  handleActualevapotranspirationChange,
  handlePercentwettedareaChange,
  handleKcChange,
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
        className={`form-control mb-3 ${
          kcError ? "is-invalid" : kc ? "is-valid" : ""
        }`}
        value={kc}
        onChange={handleKcChange}
      />

      <label className="left-label" htmlFor="input2">
        Percent wetted area
      </label>
      <input
        id="input2"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${
          percentwettedareaError
            ? "is-invalid"
            : percentwettedarea
            ? "is-valid"
            : ""
        }`}
        value={percentwettedarea}
        onChange={handlePercentwettedareaChange}
      />

      <label className="left-label" htmlFor="input3">
        Actual evapotranspiration
      </label>
      <input
        id="input3"
        type="text"
        placeholder=""
        className={`form-control mb-3 ${
          actualevapotranspirationError
            ? "is-invalid"
            : actualevapotranspiration
            ? "is-valid"
            : ""
        }`}
        value={actualevapotranspiration}
        onChange={handleActualevapotranspirationChange}
      />
    </div>
  );
}

export default AtmosphericInput;
