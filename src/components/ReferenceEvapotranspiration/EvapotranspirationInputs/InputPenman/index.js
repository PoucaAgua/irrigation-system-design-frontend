import React, { useState } from "react";
import { createPenmanComponentOverrides } from "../../EvapotranspirationCalculate/CalculatePenman";
import IrrigationSystemDesignService from "../../../../services/irrigation_system_design_backend";
const irrigationSystemDesignService = new IrrigationSystemDesignService();

function Penman() {
  const [loadingCalculate, setLoadingCalculate] = useState(false);
  const [resultPenman, setResultPenman] = useState(null);
  const [temperatureMin, setTemperatureMin] = useState(null);
  const [temperatureMax, setTemperatureMax] = useState(null);
  const [temperatureMed, setTemperatureMed] = useState(null);
  const [relativeHumidity, setRelativeHumidity] = useState(null);
  const [days, setDays] = useState(null);
  const [altitude, setAltitude] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [groundHeat, setGroundHeat] = useState(null);
  const [dailyRadiation, setDailyRadiation] = useState(null);

  const PenmanComponentOverrides = createPenmanComponentOverrides({
    irrigationSystemDesignService,
    loadingCalculate,
    setLoadingCalculate,
    resultPenman,
    setResultPenman,
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
  });

  return (
    <>
      <p className="text-center fs-3" style={{ marginTop: 50 }}>
        Penman Monteith
      </p>
      <div className="form-group">
        <label htmlFor="input1" className="left-label">
          Temperature med:
        </label>
        <input
          id="input1"
          type="text"
          className="form-control mb-3 custom-input"
          placeholder=""
          value={temperatureMed}
          onChange={(e) => setTemperatureMed(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input1" className="left-label">
          Temperature max:
        </label>
        <input
          id="input1"
          type="text"
          className="form-control mb-3 custom-input"
          placeholder=""
          value={temperatureMax}
          onChange={(e) => setTemperatureMax(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input1" className="left-label">
          Temperature min:
        </label>
        <input
          id="input1"
          type="text"
          className="form-control mb-3 custom-input"
          placeholder=""
          value={temperatureMin}
          onChange={(e) => setTemperatureMin(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input1" className="left-label">
          Relative humidity air
        </label>
        <input
          id="input1"
          type="text"
          className="form-control mb-3 custom-input"
          placeholder=""
          value={relativeHumidity}
          onChange={(e) => setRelativeHumidity(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input1" className="left-label">
          Days:
        </label>
        <input
          id="input1"
          type="text"
          className="form-control mb-3 custom-input"
          placeholder=""
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input1" className="left-label">
          Altitude:
        </label>
        <input
          id="input1"
          type="text"
          className="form-control mb-3 custom-input"
          placeholder=""
          value={altitude}
          onChange={(e) => setAltitude(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input1" className="left-label">
          Wind speed:
        </label>
        <input
          id="input1"
          type="text"
          className="form-control mb-3 custom-input"
          placeholder=""
          value={windSpeed}
          onChange={(e) => setWindSpeed(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input1" className="left-label">
          Ground heat:
        </label>
        <input
          id="input1"
          type="text"
          className="form-control mb-3 custom-input"
          placeholder=""
          value={groundHeat}
          onChange={(e) => setGroundHeat(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="input1" className="left-label">
          Daily radiation:
        </label>
        <input
          id="input1"
          type="text"
          className="form-control mb-3 custom-input"
          placeholder=""
          value={dailyRadiation}
          onChange={(e) => setDailyRadiation(e.target.value)}
        />
      </div>
      <div
        class="d-grid gap-2 d-md-flex justify-content-md-end"
        style={{ marginBottom: 50 }}
      >
        <button
          class="btn btn-success me-md-2"
          type="button"
          onClick={PenmanComponentOverrides.CalculateButtonPenman.onClick}
        >
          Calculate
        </button>
        <button class="btn btn-danger" type="button">
          Validate
        </button>
      </div>
      {resultPenman && (
        <div class="alert alert-light" role="alert">
          <p className="fs-3 text-center">Result:{resultPenman}</p>
        </div>
      )}
    </>
  );
}
export default Penman;
