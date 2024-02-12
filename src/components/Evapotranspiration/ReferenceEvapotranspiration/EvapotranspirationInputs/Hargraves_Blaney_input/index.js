import React from "react";

function HargravesBlaneyInputs({
  temperatureMax,
  temperatureMed,
  temperatureMin,
  latitude,
  temperatureMaxError,
  handleTemperatureMaxChange,
  temperatureMedError,
  handleTemperatureMedChange,
  temperatureMinError,
  handleTemperatureMinChange,
  latitudeError,
  handleLatitudeChange,
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
          Latitude:
        </label>
        <input
          id="input4"
          type="text"
          className={`form-control mb-3 ${
            latitudeError ? "is-invalid" : latitude ? "is-valid" : ""
          }`}
          placeholder="(°)"
          value={latitude}
          onChange={handleLatitudeChange}
        />
      </div>
    </>
  );
}

export default HargravesBlaneyInputs;
