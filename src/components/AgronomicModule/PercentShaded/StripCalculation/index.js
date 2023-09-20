// StripComponentOverrides.js

export const createStripComponentOverrides = ({
  ss,
  sr,
  setSr,
  setSs,
  setValidationError,
  setLoadingCalculate,
  setResultPsStrip,
  Strip,
  irrigationSystemDesignService,
  loadingCalculate,
}) => {
  return {
    Sr: {
      onChange: (event) => {
        setSr(event.target.value);
        setValidationError("");
      },
      type: "number",
    },
    Ss: {
      onChange: (event) => {
        setSs(event.target.value);
        setValidationError("");
      },
      type: "number",
    },

    CalculateButtonPsStrip: {
      onClick: async () => {
        if (!sr || !ss) {
          setValidationError("Please fill in all fields.");
          return;
        }

        setLoadingCalculate(true);
        setValidationError("");

        const payload = {
          space_between_rows: sr,
          shaded_strip_plant: ss,
        };

        try {
          const response = await irrigationSystemDesignService.calculateStrip(
            payload
          );

          console.log("API Response:", response);
          setResultPsStrip(response.value);
        } catch (error) {
          console.error("Error calculating Strip:", error);
        } finally {
          setLoadingCalculate(false);
        }
      },
    },

    SaveButtonPsStrip: {
      onClick: () => {
        alert("SaveButton need to be implemented....");
      },
    },
    Strip: {
      value: loadingCalculate ? "Loading..." : Strip,
    },
  };
};
