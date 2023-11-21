export const createPenmanComponentOverrides = ({
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
  Penman,
}) => {
  return {
    temperature_med: {
      onChange: (event) => {
        setTemperatureMed(event.target.value);
      },
      type: "number",
    },
    temperature_max: {
      onChange: (event) => {
        setTemperatureMax(event.target.value);
      },
      type: "number",
    },
    temperature_min: {
      onChange: (event) => {
        setTemperatureMin(event.target.value);
      },
      type: "number",
    },
    relative_humidity_air: {
      onChange: (event) => {
        setRelativeHumidity(event.target.value);
      },
      type: "number",
    },
    days: {
      onChange: (event) => {
        setDays(event.target.value);
      },
      type: "number",
    },
    altitude: {
      onChange: (event) => {
        setAltitude(event.target.value);
      },
      type: "number",
    },
    wind_speed: {
      onChange: (event) => {
        setWindSpeed(event.target.value);
      },
      type: "number",
    },
    ground_heat: {
      onChange: (event) => {
        setGroundHeat(event.target.value);
      },
      type: "number",
    },
    daily_radiation: {
      onChange: (event) => {
        setDailyRadiation(event.target.value);
      },
      type: "number",
    },

    CalculateButtonPenman: {
      onClick: async () => {
        setLoadingCalculate(true);

        const payload = {
          temperature_med: temperatureMed,
          temperature_max: temperatureMax,
          temperature_min: temperatureMin,
          relative_humidity_air: relativeHumidity,
          days: days,
          altitude: altitude,
          wind_speed: windSpeed,
          ground_heat: groundHeat,
          daily_radiation: dailyRadiation,
        };

        try {
          const response = await irrigationSystemDesignService.calculatePenman(
            payload
          );

          console.log("API Response:", response);
          setResultPenman(response.value);
        } catch (error) {
          console.error(
            "Error calculating Evapotranspiration Penman Monteith :",
            error
          );
        } finally {
          setLoadingCalculate(false);
        }
      },
    },

    SaveButtonPenman: {
      onClick: () => {
        alert("SaveButton need to be implemented....");
      },
    },
    Penman: {
      value: loadingCalculate ? "Loading..." : Penman,
    },
  };
};
