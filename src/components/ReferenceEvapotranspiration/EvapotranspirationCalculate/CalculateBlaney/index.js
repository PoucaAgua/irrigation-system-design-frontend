export const createBlaneyComponentOverrides = ({
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
  Blaney,
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
    hemisphere: {
      onChange: (event) => {
        setHemisphere(event.target.value);
      },
      type: "number",
    },
    month: {
      onChange: (event) => {
        setMonth(event.target.value);
      },
      type: "number",
    },

    CalculateButtonBlaney: {
      onClick: async () => {
        setLoadingCalculate(true);

        const payload = {
          temperature_med: temperatureMed,
          temperature_max: temperatureMax,
          temperature_min: temperatureMin,
          latitude: latitude,
          hemisphere: hemisphere,
          month: month,
        };

        try {
          const response = await irrigationSystemDesignService.calculateBlaney(
            payload
          );

          console.log("API Response:", response);
          setResultEvapotranspiration(response.value);
        } catch (error) {
          console.error(
            "Error calculating Evapotranspiration Blaney Criddle :",
            error
          );
        } finally {
          setLoadingCalculate(false);
        }
      },
    },

    SaveButtonBlaney: {
      onClick: () => {
        alert("SaveButton need to be implemented....");
      },
    },
    Blaney: {
      value: loadingCalculate ? "Loading..." : Blaney,
    },
  };
};
