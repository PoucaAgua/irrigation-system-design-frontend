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
  };
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
export default Blaney;
