import React, { useState } from "react";
import ResultCard from "../../EvapotranspirationCardResult";
import SelectorMonth from "../../EvapotranspirationSelector/EvapotranspirationBlaney/MonthSelector";
import SelectorHemisphere from "../../EvapotranspirationSelector/EvapotranspirationBlaney/HemisphereSelector";
import InputBlaney from "../../EvapotranspirationInputs/Hargraves_Blaney_input";

function BlaneyMain({
  Blaney,
  BlaneyComponentOverrides,
  irrigationSystemDesignService,
  loadingCalculate,
  setLoadingCalculate,
  resultEvapotranspiration,
  setResultEvapotranspiration,
  month,
  setMonth,
  hemisphere,
  setHemisphere,
  temperatureMin,
  setTemperatureMin,
  temperatureMax,
  setTemperatureMax,
  temperatureMed,
  setTemperatureMed,
  latitude,
  setLatitude,
}) {
  const [calculated, setCalculated] = useState(false);
  const handleCalculate = () => {
    BlaneyComponentOverrides.CalculateButtonBlaney.onClick();
    setCalculated(true);

    if (temperatureMax === "") {
      setTemperatureMaxError(true);
    }

    if (temperatureMed === "") {
      setTemperatureMedError(true);
    }

    if (temperatureMin === "") {
      setTemperatureMinError(true);
    }

    if (latitude === "") {
      setLatitudeError(true);
    }

    if (month === "") {
      setMonthError(true);
    }

    if (hemisphere === "") {
      setHemisphereError(true);
    }
  };
  const [temperatureMedError, setTemperatureMedError] = useState(false);
  const [temperatureMaxError, setTemperatureMaxError] = useState(false);
  const [temperatureMinError, setTemperatureMinError] = useState(false);
  const [hemisphereError, setHemisphereError] = useState(false);
  const [latitudeError, setLatitudeError] = useState(false);
  const [monthError, setMonthError] = useState(false);

  const handleTemperatureMaxChange = (e) => {
    setTemperatureMax(e.target.value);
    setTemperatureMaxError(false);
  };

  const handleTemperatureMedChange = (e) => {
    setTemperatureMed(e.target.value);
    setTemperatureMedError(false);
  };

  const handleTemperatureMinChange = (e) => {
    setTemperatureMin(e.target.value);
    setTemperatureMinError(false);
  };

  const handleLatitudeChange = (e) => {
    setLatitude(e.target.value);
    setLatitudeError(false);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    setMonthError(false);
  };

  const handleHemisphereChange = (e) => {
    setHemisphere(e.target.value);
    setHemisphereError(false);
  };

  return (
    <>
      <p className="text-center fs-3" style={{ marginTop: 50 }}>
        Blaney Criddle
      </p>
      <SelectorMonth
        month={month}
        setMonth={setMonth}
        monthError={monthError}
        handleMonthChange={handleMonthChange}
      />
      <SelectorHemisphere
        hemisphere={hemisphere}
        setHemisphere={setHemisphere}
        hemisphereError={hemisphereError}
        handleHemisphereChange={handleHemisphereChange}
      />
      <InputBlaney
        temperatureMax={temperatureMax}
        temperatureMed={temperatureMed}
        temperatureMin={temperatureMin}
        latitude={latitude}
        temperatureMaxError={temperatureMaxError}
        handleTemperatureMaxChange={handleTemperatureMaxChange}
        temperatureMedError={temperatureMedError}
        handleTemperatureMedChange={handleTemperatureMedChange}
        temperatureMinError={temperatureMinError}
        handleTemperatureMinChange={handleTemperatureMinChange}
        latitudeError={latitudeError}
        handleLatitudeChange={handleLatitudeChange}
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
        <ResultCard resultEvapotranspiration={resultEvapotranspiration} />
      )}
    </>
  );
}
export default BlaneyMain;
