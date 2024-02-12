import React, { useState } from "react";
import MainKeller from "../CropEvapotranspirationMain/KellerMain";
import MainBernardo from "../CropEvapotranspirationMain/BernardoMain";
import MainFereres from "../CropEvapotranspirationMain/FereresMain";
import MainKellerAndBliesner from "../CropEvapotranspirationMain/KellerAndBliesnerMain";
import { createKellerComponentOverrides } from "../CropEvapotranspirationCalculate/KellerCalculate";
import { createBernardoComponentOverrides } from "../CropEvapotranspirationCalculate/BernardoCalculate";
import { createFereresComponentOverrides } from "../CropEvapotranspirationCalculate/FereresCalculate";
import { createKellerAndBliesnerComponentOverrides } from "../CropEvapotranspirationCalculate/KellerAndBliesnerCalculate";
import IrrigationSystemDesignService from "../../../../services/irrigation_system_design_backend";
const irrigationSystemDesignService = new IrrigationSystemDesignService();

function SelectCropEvapotranspiration(
  Bernardo,
  KellerAndBliesner,
  Keller,
  Fereres
) {
  const [loadingCalculate, setLoadingCalculate] = useState(false);
  const [resultCropEvapotranspiration, setResultCropEvapotranspiration] =
    useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [eto, setEto] = useState("");
  const [kc, setKc] = useState("");
  const [kl, setKl] = useState("");
  const [p, setP] = useState("");

  const KellerComponentOverrides = createKellerComponentOverrides({
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
    Keller,
  });
  const BernardoComponentOverrides = createBernardoComponentOverrides({
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
    Bernardo,
  });
  const FereresComponentOverrides = createFereresComponentOverrides({
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
    Fereres,
  });
  const KellerAndBliesnerComponentOverrides =
    createKellerAndBliesnerComponentOverrides({
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
      KellerAndBliesner,
    });

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const getSelectedComponent = () => {
    switch (selectedOption) {
      case "Keller":
        return (
          <MainKeller
            KellerComponentOverrides={KellerComponentOverrides}
            irrigationSystemDesignService={irrigationSystemDesignService}
            loadingCalculate={loadingCalculate}
            setLoadingCalculate={setLoadingCalculate}
            resultCropEvapotranspiration={resultCropEvapotranspiration}
            eto={eto}
            setEto={setEto}
            kc={kc}
            setKc={setKc}
            kl={kl}
            setKl={setKl}
            p={p}
            setP={setP}
          />
        );
      case "Bernardo":
        return (
          <MainBernardo
            BernardoComponentOverrides={BernardoComponentOverrides}
            irrigationSystemDesignService={irrigationSystemDesignService}
            loadingCalculate={loadingCalculate}
            setLoadingCalculate={setLoadingCalculate}
            resultCropEvapotranspiration={resultCropEvapotranspiration}
            eto={eto}
            setEto={setEto}
            kc={kc}
            setKc={setKc}
            kl={kl}
            setKl={setKl}
            p={p}
            setP={setP}
          />
        );
      case "Fereres":
        return (
          <MainFereres
            FereresComponentOverrides={FereresComponentOverrides}
            irrigationSystemDesignService={irrigationSystemDesignService}
            loadingCalculate={loadingCalculate}
            setLoadingCalculate={setLoadingCalculate}
            resultCropEvapotranspiration={resultCropEvapotranspiration}
            eto={eto}
            setEto={setEto}
            kc={kc}
            setKc={setKc}
            kl={kl}
            setKl={setKl}
            p={p}
            setP={setP}
          />
        );
      case "KellerAndBliesner":
        return (
          <MainKellerAndBliesner
            KellerAndBliesnerComponentOverrides={
              KellerAndBliesnerComponentOverrides
            }
            irrigationSystemDesignService={irrigationSystemDesignService}
            loadingCalculate={loadingCalculate}
            setLoadingCalculate={setLoadingCalculate}
            resultCropEvapotranspiration={resultCropEvapotranspiration}
            eto={eto}
            setEto={setEto}
            kc={kc}
            setKc={setKc}
            kl={kl}
            setKl={setKl}
            p={p}
            setP={setP}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <select
        className="form-select d-flex flex-column align-items-center mb-3"
        aria-label="Default select example"
        onChange={handleSelectChange}
        style={{ width: "50vh" }}
      >
        <option value="" selected>
          Select an option
        </option>
        <option value="Keller">Keller</option>
        <option value="Bernardo">Bernardo</option>
        <option value="Fereres">Fereres</option>
        <option value="KellerAndBliesner">Keller And Bliesner</option>
      </select>
      {getSelectedComponent()}
    </div>
  );
}

export default SelectCropEvapotranspiration;
