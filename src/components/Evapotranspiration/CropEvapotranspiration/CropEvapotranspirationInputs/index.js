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
          Eto :
        </label>
        <input
          id="input1"
          type="text"
          className={`form-control mb-3 ${etoError ? "is-invalid" : ""}`}
          placeholder=""
          value={eto}
          onChange={handleEtoChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input1" className="left-label">
          Kc:
        </label>
        <input
          id="input1"
          type="text"
          className={`form-control mb-3 ${kcError ? "is-invalid" : ""}`}
          placeholder=""
          value={kc}
          onChange={handleKcChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input1" className="left-label">
          Kl:
        </label>
        <input
          id="input1"
          type="text"
          className={`form-control mb-3 ${klError ? "is-invalid" : ""}`}
          placeholder=""
          value={kl}
          onChange={handleKlChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input1" className="left-label">
          P:
        </label>
        <input
          id="input1"
          type="text"
          className={`form-control mb-3 ${pError ? "is-invalid" : ""}`}
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
