import React from "react";

function Hargraves_Blaney_Inputs({
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
          Latitude:
        </label>
        <input
          id="input1"
          type="text"
          className={`form-control mb-3 ${latitudeError ? "is-invalid" : ""}`}
          placeholder="(°)"
          value={latitude}
          onChange={handleLatitudeChange}
        />
      </div>
    </>
  );
}
export default Hargraves_Blaney_Inputs;
