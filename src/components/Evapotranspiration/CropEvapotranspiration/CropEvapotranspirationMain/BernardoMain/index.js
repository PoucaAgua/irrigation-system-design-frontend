import React, { useState } from "react";
import ResultCard from "../../CropEvapotranspirationCardResult";
import CropEvapotranspirationInputs from "../../CropEvapotranspirationInputs";

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
  BernardoComponentOverrides,
}) {
  const [calculated, setCalculated] = useState(false);
  const handleCalculate = () => {
    BernardoComponentOverrides.CalculateButtonBernardo.onClick();
    setCalculated(true);
  };
  return (
    <>
      <CropEvapotranspirationInputs
        eto={eto}
        setEto={setEto}
        kc={kc}
        setKc={setKc}
        kl={kl}
        setKl={setKl}
        p={p}
        setP={setP}
      />
      <div class="d-grid gap-2 col-6 mx-auto">
        <button
          class="btn btn-secondary"
          type="button"
          onClick={handleCalculate}
        >
          Calculate
        </button>
      </div>
      <br />
      {calculated && (
        <ResultCard
          resultCropEvapotranspiration={resultCropEvapotranspiration}
        />
      )}
    </>
  );
}
export default Bernardo;
