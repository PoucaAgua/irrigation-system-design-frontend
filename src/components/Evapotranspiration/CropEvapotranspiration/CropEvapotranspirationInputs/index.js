import React, { useState } from "react";

function CropEvapotranspirationInputs({
  eto,
  setEto,
  kc,
  setKc,
  kl,
  setKl,
  p,
  setP,
  resultCropEvapotranspiration,
  BernardoComponentOverrides,
}) {
  return (
    <>
      <p className="text-center fs-3" style={{ marginTop: 50 }}>
        Bernardo
      </p>
      <div className="form-group">
        <label htmlFor="input1" className="left-label">
          Eto :
        </label>
        <input
          id="input1"
          type="text"
          className="form-control mb-3 custom-input"
          placeholder=""
          value={eto}
          onChange={(e) => setEto(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input1" className="left-label">
          Kc:
        </label>
        <input
          id="input1"
          type="text"
          className="form-control mb-3 custom-input"
          placeholder=""
          value={kc}
          onChange={(e) => setKc(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input1" className="left-label">
          Kl:
        </label>
        <input
          id="input1"
          type="text"
          className="form-control mb-3 custom-input"
          placeholder=""
          value={kl}
          onChange={(e) => setKl(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input1" className="left-label">
          P:
        </label>
        <input
          id="input1"
          type="text"
          className="form-control mb-3 custom-input"
          placeholder=""
          value={p}
          onChange={(e) => setP(e.target.value)}
        />
      </div>
      <br />
    </>
  );
}
export default CropEvapotranspirationInputs;
