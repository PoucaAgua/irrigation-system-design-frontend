import React, { useState } from "react";
import ResultCard from "../../EvapotranspirationCardResult";
import SelectorMonth from "../../EvapotranspirationSelector/EvapotranspirationHargraves/MonthSelector";

function Hargraves({
  Hargraves,
  HargravesComponentOverrides,
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
  resultEvapotranspiration,
  setResultEvapotranspiration,
  loadingCalculate,
  setLoadingCalculate,
}) {
  const [calculated, setCalculated] = useState(false);
  const handleCalculate = () => {
    HargravesComponentOverrides.CalculateButtonHargraves.onClick();
    setCalculated(true);
  };
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
          Latitude:
        </label>
        <input
          id="input1"
          type="text"
          className="form-control mb-3 custom-input"
          placeholder="(°)"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
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
export default Hargraves;
