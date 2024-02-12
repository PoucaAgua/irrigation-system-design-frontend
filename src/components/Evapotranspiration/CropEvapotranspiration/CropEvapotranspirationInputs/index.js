import React from "react";

function CropEvapotranspirationInputs({
  eto,
  setEto,
  kc,
  setKc,
  kl,
  setKl,
  p,
  setP,
  etoError,
  kcError,
  klError,
  pError,
  handleEtoChange,
  handleKcChange,
  handleKlChange,
  handlePChange,
}) {
  return (
    <>
      <div className="form-group">
        <label htmlFor="input1" className="left-label">
          Eto:
        </label>
        <input
          id="input1"
          type="text"
          className={`form-control mb-3 ${
            etoError ? "is-invalid" : eto ? "is-valid" : ""
          }`}
          placeholder=""
          value={eto}
          onChange={handleEtoChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input2" className="left-label">
          Kc:
        </label>
        <input
          id="input2"
          type="text"
          className={`form-control mb-3 ${
            kcError ? "is-invalid" : kc ? "is-valid" : ""
          }`}
          placeholder=""
          value={kc}
          onChange={handleKcChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input3" className="left-label">
          Kl:
        </label>
        <input
          id="input3"
          type="text"
          className={`form-control mb-3 ${
            klError ? "is-invalid" : kl ? "is-valid" : ""
          }`}
          placeholder=""
          value={kl}
          onChange={handleKlChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input4" className="left-label">
          P:
        </label>
        <input
          id="input4"
          type="text"
          className={`form-control mb-3 ${
            pError ? "is-invalid" : p ? "is-valid" : ""
          }`}
          placeholder=""
          value={p}
          onChange={handlePChange}
        />
      </div>
      <br />
    </>
  );
}

export default CropEvapotranspirationInputs;
