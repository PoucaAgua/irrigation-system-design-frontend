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
            temperatureMaxError
              ? "is-invalid"
              : temperatureMax
              ? "is-valid"
              : ""
          }`}
          placeholder="(°C)"
          value={temperatureMax}
          onChange={handleTemperatureMaxChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input2" className="left-label">
          Temperature med:
        </label>
        <input
          id="input2"
          type="text"
          className={`form-control mb-3 ${
            temperatureMedError
              ? "is-invalid"
              : temperatureMed
              ? "is-valid"
              : ""
          }`}
          placeholder="(°C)"
          value={temperatureMed}
          onChange={handleTemperatureMedChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input3" className="left-label">
          Temperature min:
        </label>
        <input
          id="input3"
          type="text"
          className={`form-control mb-3 ${
            temperatureMinError
              ? "is-invalid"
              : temperatureMin
              ? "is-valid"
              : ""
          }`}
          placeholder="(°C)"
          value={temperatureMin}
          onChange={handleTemperatureMinChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input4" className="left-label">
          Relative humidity air
        </label>
        <input
          id="input4"
          type="text"
          className={`form-control mb-3 ${
            relativeHumidityError
              ? "is-invalid"
              : relativeHumidity
              ? "is-valid"
              : ""
          }`}
          placeholder="(%)"
          value={relativeHumidity}
          onChange={handleRelativeHumidityChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input5" className="left-label">
          Days:
        </label>
        <input
          id="input5"
          type="text"
          className={`form-control mb-3 ${
            daysError ? "is-invalid" : days ? "is-valid" : ""
          }`}
          placeholder="(dd/mm/aa)"
          value={days}
          onChange={handleDaysChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input6" className="left-label">
          Altitude:
        </label>
        <input
          id="input6"
          type="text"
          className={`form-control mb-3 ${
            altitudeError ? "is-invalid" : altitude ? "is-valid" : ""
          }`}
          placeholder="(m)"
          value={altitude}
          onChange={handleAltitudeChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input7" className="left-label">
          Wind speed:
        </label>
        <input
          id="input7"
          type="text"
          className={`form-control mb-3 ${
            windSpeedError ? "is-invalid" : windSpeed ? "is-valid" : ""
          }`}
          placeholder="(m/s)"
          value={windSpeed}
          onChange={handleWindSpeedChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input8" className="left-label">
          Ground heat:
        </label>
        <input
          id="input8"
          type="text"
          className={`form-control mb-3 ${
            groundHeatError ? "is-invalid" : groundHeat ? "is-valid" : ""
          }`}
          placeholder="(W/m²)"
          value={groundHeat}
          onChange={handleGroundHeatChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input9" className="left-label">
          Daily radiation:
        </label>
        <input
          id="input9"
          type="text"
          className={`form-control mb-3 ${
            dailyRadiationError
              ? "is-invalid"
              : dailyRadiation
              ? "is-valid"
              : ""
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
