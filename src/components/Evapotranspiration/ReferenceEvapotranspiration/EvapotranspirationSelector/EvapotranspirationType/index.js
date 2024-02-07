import React, { useState } from "react";
import InputHargraves from "../../EvapotranspirationInputs/InputHargraves";
import InputBlaney from "../../EvapotranspirationInputs/InputBlaney";
import InputPenman from "../../EvapotranspirationInputs/InputPenman";
import { createHargravesComponentOverrides } from "../../EvapotranspirationCalculate/CalculateHargraves";
import { createBlaneyComponentOverrides } from "../../EvapotranspirationCalculate/CalculateBlaney";
import { createPenmanComponentOverrides } from "../../EvapotranspirationCalculate/CalculatePenman";
import IrrigationSystemDesignService from "../../../../../services/irrigation_system_design_backend";

const irrigationSystemDesignService = new IrrigationSystemDesignService();

function SelectEvapotranspiration() {
  const [loadingCalculate, setLoadingCalculate] = useState(false);
  const [resultEvapotranspiration, setResultEvapotranspiration] =
    useState(null);
  const [month, setMonth] = useState("");
  const [hemisphere, setHemisphere] = useState("");
  const [temperatureMin, setTemperatureMin] = useState("");
  const [temperatureMax, setTemperatureMax] = useState("");
  const [temperatureMed, setTemperatureMed] = useState("");
  const [latitude, setLatitude] = useState("");
  const [relativeHumidity, setRelativeHumidity] = useState("");
  const [days, setDays] = useState("");
  const [altitude, setAltitude] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [groundHeat, setGroundHeat] = useState("");
  const [dailyRadiation, setDailyRadiation] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const BlaneyComponentOverrides = createBlaneyComponentOverrides({
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
  });

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
    resultEvapotranspiration,
    setResultEvapotranspiration,
    loadingCalculate,
    setLoadingCalculate,
  });

  const PenmanComponentOverrides = createPenmanComponentOverrides({
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
  });

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const getSelectedComponent = () => {
    switch (selectedOption) {
      case "Hargraves":
        return (
          <InputHargraves
            HargravesComponentOverrides={HargravesComponentOverrides}
            irrigationSystemDesignService={irrigationSystemDesignService}
            temperatureMin={temperatureMin}
            setTemperatureMin={setTemperatureMin}
            temperatureMax={temperatureMax}
            setTemperatureMax={setTemperatureMax}
            temperatureMed={temperatureMed}
            setTemperatureMed={setTemperatureMed}
            latitude={latitude}
            setLatitude={setLatitude}
            month={month}
            setMonth={setMonth}
            resultEvapotranspiration={resultEvapotranspiration}
            setResultEvapotranspiration={setResultEvapotranspiration}
            loadingCalculate={loadingCalculate}
            setLoadingCalculate={setLoadingCalculate}
          />
        );
      case "Blaney":
        return (
          <InputBlaney
            BlaneyComponentOverrides={BlaneyComponentOverrides}
            irrigationSystemDesignService={irrigationSystemDesignService}
            loadingCalculate={loadingCalculate}
            setLoadingCalculate={setLoadingCalculate}
            resultEvapotranspiration={resultEvapotranspiration}
            setResultEvapotranspiration={setResultEvapotranspiration}
            month={month}
            setMonth={setMonth}
            hemisphere={hemisphere}
            setHemisphere={setHemisphere}
            temperatureMin={temperatureMin}
            setTemperatureMin={setTemperatureMin}
            temperatureMax={temperatureMax}
            setTemperatureMax={setTemperatureMax}
            temperatureMed={temperatureMed}
            setTemperatureMed={setTemperatureMed}
            latitude={latitude}
            setLatitude={setLatitude}
          />
        );
      case "Penman":
        return (
          <InputPenman
            PenmanComponentOverrides={PenmanComponentOverrides}
            irrigationSystemDesignService={irrigationSystemDesignService}
            loadingCalculate={loadingCalculate}
            setLoadingCalculate={setLoadingCalculate}
            resultEvapotranspiration={resultEvapotranspiration}
            setResultEvapotranspiration={setResultEvapotranspiration}
            temperatureMin={temperatureMin}
            setTemperatureMin={setTemperatureMin}
            temperatureMax={temperatureMax}
            setTemperatureMax={setTemperatureMax}
            temperatureMed={temperatureMed}
            setTemperatureMed={setTemperatureMed}
            relativeHumidity={relativeHumidity}
            setRelativeHumidity={setRelativeHumidity}
            days={days}
            setDays={setDays}
            altitude={altitude}
            setAltitude={setAltitude}
            windSpeed={windSpeed}
            setWindSpeed={setWindSpeed}
            groundHeat={groundHeat}
            setGroundHeat={setGroundHeat}
            dailyRadiation={dailyRadiation}
            setDailyRadiation={setDailyRadiation}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <select
        className="form-select d-flex flex-column align-items-center mb-3"
        aria-label="Default select example"
        onChange={handleSelectChange}
      >
        <option value="" selected>
          Select an option
        </option>
        <option value="Hargraves">Hargraves Samani</option>
        <option value="Blaney">Blaney Criddle</option>
        <option value="Penman">Penman Monteith</option>
      </select>
      {getSelectedComponent()}
    </div>
  );
}

export default SelectEvapotranspiration;
