import React, { useState } from "react";
import { createHargravesComponentOverrides } from "../../EvapotranspirationCalculate/CalculateHargraves";
import IrrigationSystemDesignService from "../../../../services/irrigation_system_design_backend";
import SelectorMonth from "../../EvapotranspirationSelector/EvapotranspirationHargraves/MonthSelector";
const irrigationSystemDesignService = new IrrigationSystemDesignService();

function Hargraves(Hargraves) {
  const [loadingCalculate, setLoadingCalculate] = useState(false);
  const [resultHargraves, setResultHargraves] = useState(null);
  const [month, setMonth] = useState(null);
  const [temperatureMin, setTemperatureMin] = useState(null);
  const [temperatureMax, setTemperatureMax] = useState(null);
  const [temperatureMed, setTemperatureMed] = useState(null);
  const [latitude, setLatitude] = useState(null);

  const HargravesComponentOverrides = createHargravesComponentOverrides({
    irrigationSystemDesignService,
    temperatureMin,
    setTemperatureMin,
    temperatureMax,
    setTemperatureMax,
    temperatureMed,
    setTemperatureMed,
    latitude,
    setLatitude,
    month,
    setMonth,
    resultHargraves,
    setResultHargraves,
    loadingCalculate,
    setLoadingCalculate,
    Hargraves,
  });

  return (
    <>
      <p className="text-center fs-3" style={{ marginTop: 50 }}>
        Hargraves Samani
      </p>
      <SelectorMonth month={month} setMonth={setMonth} />
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
          onClick={HargravesComponentOverrides.CalculateButtonHargraves.onClick}
        >
          Calculate
        </button>
        <button class="btn btn-danger" type="button">
          Validate
        </button>
      </div>
    </>
  );
}
export default Hargraves;
