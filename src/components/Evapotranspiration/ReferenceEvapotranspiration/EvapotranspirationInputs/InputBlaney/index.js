import React, { useState } from "react";
import ResultCard from "../../EvapotranspirationCardResult";
import SelectorMonth from "../../EvapotranspirationSelector/EvapotranspirationBlaney/MonthSelector";
import SelectorHemisphere from "../../EvapotranspirationSelector/EvapotranspirationBlaney/HemisphereSelector";

function Blaney({
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
export default Blaney;
