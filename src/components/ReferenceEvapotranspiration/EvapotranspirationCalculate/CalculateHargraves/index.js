export const createHargravesComponentOverrides = ({
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
    latitude: {
      onChange: (event) => {
        setLatitude(event.target.value);
      },
      type: "number",
    },
    month: {
      onChange: (event) => {
        setMonth(event.target.value);
      },
      type: "number",
    },

    CalculateButtonHargraves: {
      onClick: async () => {
        setLoadingCalculate(true);

        const payload = {
          temperature_med: temperatureMed,
          temperature_max: temperatureMax,
          temperature_min: temperatureMin,
          latitude: latitude,
          month: month,
        };

        try {
          const response =
            await irrigationSystemDesignService.calculateHargraves(payload);

          console.log("API Response:", response);
          setResultHargraves(response.value);
        } catch (error) {
          console.error(
            "Error calculating Evapotranspiration Hargraves Samani :",
            error
          );
        } finally {
          setLoadingCalculate(false);
        }
      },
    },

    SaveButtonHargraves: {
      onClick: () => {
        alert("SaveButton need to be implemented....");
      },
    },
    Hargraves: {
      value: loadingCalculate ? "Loading..." : Hargraves,
    },
  };
};
