import React, { useState } from "react";
import ResultCard from "../../EvapotranspirationCardResult";
import PenmanInput from "../../EvapotranspirationInputs/PenmanInput";

function PenmanMain({
  Penman,
  PenmanComponentOverrides,
  irrigationSystemDesignService,
  loadingCalculate,
  setLoadingCalculate,
  resultEvapotranspiration,
  setResultEvapotranspiration,
  temperatureMin,
  setTemperatureMin,
  temperatureMax,
  setTemperatureMax,
  temperatureMed,
  setTemperatureMed,
  relativeHumidity,
  setRelativeHumidity,
  days,
  setDays,
  altitude,
  setAltitude,
  windSpeed,
  setWindSpeed,
  groundHeat,
  setGroundHeat,
  dailyRadiation,
  setDailyRadiation,
}) {
  const [calculated, setCalculated] = useState(false);
  const handleCalculate = () => {
    PenmanComponentOverrides.CalculateButtonPenman.onClick();
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

    if (relativeHumidity === "") {
      setRelativeHumidityError(true);
    }

    if (days === "") {
      setDaysError(true);
    }

    if (altitude === "") {
      setAltitudeError(true);
    }

    if (windSpeed === "") {
      setWindSpeedError(true);
    }

    if (groundHeat === "") {
      setGroundHeatError(true);
    }

    if (dailyRadiation === "") {
      setDailyRadiationError(true);
    }
  };
  const [temperatureMedError, setTemperatureMedError] = useState(false);
  const [temperatureMaxError, setTemperatureMaxError] = useState(false);
  const [temperatureMinError, setTemperatureMinError] = useState(false);
  const [relativeHumidityError, setRelativeHumidityError] = useState(false);
  const [daysError, setDaysError] = useState(false);
  const [altitudeError, setAltitudeError] = useState(false);
  const [windSpeedError, setWindSpeedError] = useState(false);
  const [groundHeatError, setGroundHeatError] = useState(false);
  const [dailyRadiationError, setDailyRadiationError] = useState(false);

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

  const handleRelativeHumidityChange = (e) => {
    setRelativeHumidity(e.target.value);
    setRelativeHumidityError(false);
  };

  const handleDaysChange = (e) => {
    setDays(e.target.value);
    setDaysError(false);
  };

  const handleAltitudeChange = (e) => {
    setAltitude(e.target.value);
    setAltitudeError(false);
  };

  const handleWindSpeedChange = (e) => {
    setWindSpeed(e.target.value);
    setWindSpeedError(false);
  };

  const handleGroundHeatChange = (e) => {
    setGroundHeat(e.target.value);
    setGroundHeatError(false);
  };

  const handleDailyRadiationChange = (e) => {
    setDailyRadiation(e.target.value);
    setDailyRadiationError(false);
  };

  return (
    <>
      <p className="text-center fs-3" style={{ marginTop: 50 }}>
        Penman Monteith
      </p>
      <PenmanInput
        temperatureMin={temperatureMin}
        temperatureMax={temperatureMax}
        temperatureMed={temperatureMed}
        relativeHumidity={relativeHumidity}
        days={days}
        altitude={altitude}
        windSpeed={windSpeed}
        groundHeat={groundHeat}
        dailyRadiation={dailyRadiation}
        temperatureMaxError={temperatureMaxError}
        handleTemperatureMaxChange={handleTemperatureMaxChange}
        temperatureMedError={temperatureMedError}
        handleTemperatureMedChange={handleTemperatureMedChange}
        temperatureMinError={temperatureMinError}
        handleTemperatureMinChange={handleTemperatureMinChange}
        relativeHumidityError={relativeHumidityError}
        handleRelativeHumidityChange={handleRelativeHumidityChange}
        daysError={daysError}
        handleDaysChange={handleDaysChange}
        altitudeError={altitudeError}
        handleAltitudeChange={handleAltitudeChange}
        windSpeedError={windSpeedError}
        handleWindSpeedChange={handleWindSpeedChange}
        groundHeatError={groundHeatError}
        handleGroundHeatChange={handleGroundHeatChange}
        dailyRadiationError={dailyRadiationError}
        handleDailyRadiationChange={handleDailyRadiationChange}
      />
      <div class="d-grid gap-2 col-6 mx-auto" style={{ marginBottom: 50 }}>
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
export default PenmanMain;
