import React from "react";

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
          placeholder="(°C)"
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
          placeholder="(°C)"
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
          placeholder="(°C)"
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
          placeholder="(%)"
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
          placeholder="(dd/mm/aa)"
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
          placeholder="(m)"
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
          placeholder="(m/s)"
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
          placeholder="(W/m²)"
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
          placeholder="(Gy)"
          value={dailyRadiation}
          onChange={(e) => setDailyRadiation(e.target.value)}
        />
      </div>
      <div class="d-grid gap-2 col-6 mx-auto" style={{ marginBottom: 50 }}>
        <button
          class="btn btn-secondary"
          type="button"
          onClick={PenmanComponentOverrides.CalculateButtonPenman.onClick}
        >
          Calculate
        </button>
      </div>
      <ResultCard resultEvapotranspiration={resultEvapotranspiration} />
    </>
  );
}
export default Penman;
