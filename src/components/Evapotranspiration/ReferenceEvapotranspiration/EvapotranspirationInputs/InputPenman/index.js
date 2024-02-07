import React, { useState } from "react";
import ResultCard from "../../EvapotranspirationCardResult";

function Penman({
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
      <div className="form-group">
        <label htmlFor="input1" className="left-label">
          Temperature max:
        </label>
        <input
          id="input1"
          type="text"
          className={`form-control mb-3 ${
            temperatureMaxError ? "is-invalid" : ""
          }`}
          placeholder="(°C)"
          value={temperatureMax}
          onChange={handleTemperatureMaxChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input1" className="left-label">
          Temperature med:
        </label>
        <input
          id="input1"
          type="text"
          className={`form-control mb-3 ${
            temperatureMedError ? "is-invalid" : ""
          }`}
          placeholder="(°C)"
          value={temperatureMed}
          onChange={handleTemperatureMedChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input1" className="left-label">
          Temperature min:
        </label>
        <input
          id="input1"
          type="text"
          className={`form-control mb-3 ${
            temperatureMinError ? "is-invalid" : ""
          }`}
          placeholder="(°C)"
          value={temperatureMin}
          onChange={handleTemperatureMinChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input1" className="left-label">
          Relative humidity air
        </label>
        <input
          id="input1"
          type="text"
          className={`form-control mb-3 ${
            relativeHumidityError ? "is-invalid" : ""
          }`}
          placeholder="(%)"
          value={relativeHumidity}
          onChange={handleRelativeHumidityChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input1" className="left-label">
          Days:
        </label>
        <input
          id="input1"
          type="text"
          className={`form-control mb-3 ${daysError ? "is-invalid" : ""}`}
          placeholder="(dd/mm/aa)"
          value={days}
          onChange={handleDaysChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input1" className="left-label">
          Altitude:
        </label>
        <input
          id="input1"
          type="text"
          className={`form-control mb-3 ${altitudeError ? "is-invalid" : ""}`}
          placeholder="(m)"
          value={altitude}
          onChange={handleAltitudeChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input1" className="left-label">
          Wind speed:
        </label>
        <input
          id="input1"
          type="text"
          className={`form-control mb-3 ${windSpeedError ? "is-invalid" : ""}`}
          placeholder="(m/s)"
          value={windSpeed}
          onChange={handleWindSpeedChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input1" className="left-label">
          Ground heat:
        </label>
        <input
          id="input1"
          type="text"
          className={`form-control mb-3 ${groundHeatError ? "is-invalid" : ""}`}
          placeholder="(W/m²)"
          value={groundHeat}
          onChange={handleGroundHeatChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input1" className="left-label">
          Daily radiation:
        </label>
        <input
          id="input1"
          type="text"
          className={`form-control mb-3 ${
            dailyRadiationError ? "is-invalid" : ""
          }`}
          placeholder="(Gy)"
          value={dailyRadiation}
          onChange={handleDailyRadiationChange}
        />
      </div>
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
export default Penman;
