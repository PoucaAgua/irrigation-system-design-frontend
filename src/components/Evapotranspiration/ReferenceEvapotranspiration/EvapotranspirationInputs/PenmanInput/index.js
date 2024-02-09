import React from "react";

function PenmanInput({
  temperatureMin,
  temperatureMax,
  temperatureMed,
  relativeHumidity,
  days,
  altitude,
  windSpeed,
  groundHeat,
  dailyRadiation,
  temperatureMaxError,
  handleTemperatureMaxChange,
  temperatureMedError,
  handleTemperatureMedChange,
  temperatureMinError,
  handleTemperatureMinChange,
  relativeHumidityError,
  handleRelativeHumidityChange,
  daysError,
  handleDaysChange,
  altitudeError,
  handleAltitudeChange,
  windSpeedError,
  handleWindSpeedChange,
  groundHeatError,
  handleGroundHeatChange,
  dailyRadiationError,
  handleDailyRadiationChange,
}) {
  return (
    <>
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
    </>
  );
}
export default PenmanInput;
