export const createAtmosphericComponentOverrides = ({
  setResultAtmospheric,
  actualevapotranspiration,
  kc,
  percentwettedarea,
  setActualevapotranspiration,
  setKc,
  setPercentwettedarea,
  irrigationSystemDesignService,
  setLoadingCalculate,
  setValidationError,
  loadingCalculate,
  Atmospheric,
}) => {
  return {
    Actual_evapotranspiration: {
      onChange: (event) => {
        setActualevapotranspiration(event.target.value);
      },
      type: "number",
    },
    Kc: {
      onChange: (event) => {
        setKc(event.target.value);
      },
      type: "number",
    },
    percentwettedarea: {
      onChange: (event) => {
        setPercentwettedarea(event.target.value);
      },
      type: "number",
    },

    CalculateButtonAtmospheric: {
      onClick: async () => {
        if (!kc || !actualevapotranspiration || !percentwettedarea) {
          setValidationError("Please fill in all fields.");
          return;
        }

        setLoadingCalculate(true);
        setValidationError("");

        const payload = {
          kc: kc,
          percent_wetted_area: percentwettedarea,
          actual_evapotranspiration: actualevapotranspiration,
        };

        try {
          const response =
            await irrigationSystemDesignService.calculateAtmospheric(payload);

          console.log("API Response:", response);
          setResultAtmospheric(response.value);
        } catch (error) {
          console.error(
            "Error calculating Actual irrigation Atmospheric:",
            error
          );
        } finally {
          setLoadingCalculate(false);
        }
      },
    },

    SaveButtonAtmospheric: {
      onClick: () => {
        alert("SaveButton need to be implemented....");
      },
    },
    Atmospheric: {
      value: loadingCalculate ? "Loading..." : Atmospheric,
    },
  };
};
