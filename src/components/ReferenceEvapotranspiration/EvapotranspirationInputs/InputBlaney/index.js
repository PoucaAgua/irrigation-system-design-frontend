import React, { useState } from "react";
import { createBlaneyComponentOverrides } from "../../EvapotranspirationCalculate/CalculateBlaney";
import IrrigationSystemDesignService from "../../../../services/irrigation_system_design_backend";
import SelectorMonth from "../../EvapotranspirationSelector/EvapotranspirationBlaney/MonthSelector";
import SelectorHemisphere from "../../EvapotranspirationSelector/EvapotranspirationBlaney/HemisphereSelector";
const irrigationSystemDesignService = new IrrigationSystemDesignService();

function Blaney(Blaney) {
  const [loadingCalculate, setLoadingCalculate] = useState(false);
  const [resultBlaney, setResultBlaney] = useState(null);
  const [month, setMonth] = useState(null);
  const [hemisphere, setHemisphere] = useState(null);
  const [temperatureMin, setTemperatureMin] = useState(null);
  const [temperatureMax, setTemperatureMax] = useState(null);
  const [temperatureMed, setTemperatureMed] = useState(null);
  const [latitude, setLatitude] = useState(null);

  const BlaneyComponentOverrides = createBlaneyComponentOverrides({
    irrigationSystemDesignService,
    loadingCalculate,
    setLoadingCalculate,
    resultBlaney,
    setResultBlaney,
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
    Blaney,
  });

  return (
    <>
      <p className="text-center fs-3" style={{ marginTop: 50 }}>
        Blaney Criddle
      </p>
      <SelectorMonth month={month} setMonth={setMonth} />
      <SelectorHemisphere
        hemisphere={hemisphere}
        setHemisphere={setHemisphere}
      />
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
          Latitude:
        </label>
        <input
          id="input1"
          type="text"
          className="form-control mb-3 custom-input"
          placeholder=""
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
      </div>
      <div
        class="d-grid gap-2 d-md-flex justify-content-md-end"
        style={{ marginBottom: 50 }}
      >
        <button
          class="btn btn-success me-md-2"
          type="button"
          onClick={BlaneyComponentOverrides.CalculateButtonBlaney.onClick}
        >
          Calculate
        </button>
        <button class="btn btn-danger" type="button">
          Validate
        </button>
      </div>
      {resultBlaney && (
        <div class="alert alert-light" role="alert">
          <p className="fs-3 text-center">Result:{resultBlaney}</p>
        </div>
      )}
    </>
  );
}
export default Blaney;
