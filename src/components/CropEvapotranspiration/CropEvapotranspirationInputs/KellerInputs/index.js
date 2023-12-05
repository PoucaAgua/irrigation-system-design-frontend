import React from "react";
import ResultCard from "../../EvapotranspirationCardResult";

function Bernardo({
  irrigationSystemDesignService,
  loadingCalculate,
  setLoadingCalculate,
  eto,
  setEto,
  kc,
  setKc,
  kl,
  setKl,
  p,
  setP,
  resultCropEvapotranspiration,
  setResultCropEvapotranspiration,
  KellerComponentOverrides,
}) {
  return (
    <>
      <p className="text-center fs-3" style={{ marginTop: 50 }}>
        Keller
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

      <div class="d-grid gap-2 col-6 mx-auto">
        <button
          class="btn btn-secondary"
          type="button"
          onClick={KellerComponentOverrides.CalculateButtonKeller.onClick}
        >
          Calculate
        </button>
      </div>
      <ResultCard resultCropEvapotranspiration={resultCropEvapotranspiration} />
    </>
  );
}
export default Bernardo;
