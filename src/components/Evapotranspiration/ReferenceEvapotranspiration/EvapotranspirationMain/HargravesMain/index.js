import React, { useState } from "react";
import ResultCard from "../../EvapotranspirationCardResult";
import SelectorMonth from "../../EvapotranspirationSelector/EvapotranspirationMonth";
import HargravesBlaneyInputs from "../../EvapotranspirationInputs/Hargraves_Blaney_input";

function HargravesMain({
  Hargraves,
  HargravesComponentOverrides,
  irrigationSystemDesignService,
  temperatureMin,
  setTemperatureMin,
  temperatureMax,
  setTemperatureMax,
  temperatureMed,
  setTemperatureMed,
  latitude,
  setLatitude,
  month,
  setMonth,
  resultEvapotranspiration,
  setResultEvapotranspiration,
  loadingCalculate,
  setLoadingCalculate,
}) {
  const [calculated, setCalculated] = useState(false);
  const handleCalculate = () => {
    HargravesComponentOverrides.CalculateButtonHargraves.onClick();
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
  };
  const [temperatureMedError, setTemperatureMedError] = useState(false);
  const [temperatureMaxError, setTemperatureMaxError] = useState(false);
  const [temperatureMinError, setTemperatureMinError] = useState(false);
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

  return (
    <>
      <p className="text-center fs-3" style={{ marginTop: 50 }}>
        Hargraves Samani
      </p>
      <SelectorMonth
        month={month}
        setMonth={setMonth}
        monthError={monthError}
        handleMonthChange={handleMonthChange}
      />
      <HargravesBlaneyInputs
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
export default HargravesMain;
