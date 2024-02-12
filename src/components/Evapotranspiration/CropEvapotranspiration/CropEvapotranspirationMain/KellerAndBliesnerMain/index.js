import React, { useState } from "react";
import ResultCard from "../../CropEvapotranspirationCardResult";
import CropEvapotranspirationInputs from "../../CropEvapotranspirationInputs";

function KellerAndBliesner({
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
  KellerAndBliesnerComponentOverrides,
}) {
  const [calculated, setCalculated] = useState(false);
  const handleCalculate = () => {
    KellerAndBliesnerComponentOverrides.CalculateButtonKellerAndBliesner.onClick();
    setCalculated(true);

    if (eto === "") {
      setEtoError(true);
    }

    if (kl === "") {
      setklError(true);
    }

    if (kc === "") {
      setkcError(true);
    }

    if (p === "") {
      setPError(true);
    }
  };
  const [etoError, setEtoError] = useState(false);
  const [kcError, setkcError] = useState(false);
  const [klError, setklError] = useState(false);
  const [pError, setPError] = useState(false);

  const handleEtoChange = (e) => {
    setEto(e.target.value);
    setEtoError(false);
  };

  const handleKcChange = (e) => {
    setKc(e.target.value);
    setkcError(false);
  };

  const handleKlChange = (e) => {
    setKl(e.target.value);
    setklError(false);
  };

  const handlePChange = (e) => {
    setP(e.target.value);
    setPError(false);
  };

  return (
    <>
      <p className="text-center fs-3" style={{ marginTop: 50 }}>
        Keller And Bliesner
      </p>
      <CropEvapotranspirationInputs
        eto={eto}
        setEto={setEto}
        kc={kc}
        setKc={setKc}
        kl={kl}
        setKl={setKl}
        p={p}
        setP={setP}
        etoError={etoError}
        kcError={kcError}
        klError={klError}
        pError={pError}
        handleEtoChange={handleEtoChange}
        handleKcChange={handleKcChange}
        handleKlChange={handleKlChange}
        handlePChange={handlePChange}
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
export default KellerAndBliesner;
