export const createStripComponentOverrides = ({
  ss,
  sr,
  setSr,
  setSs,
  setLoadingCalculate,
  setResultPs,
  Strip,
  irrigationSystemDesignService,
  loadingCalculate,
}) => {
  return {
    Sr: {
      onChange: (event) => {
        setSr(event.target.value);
      },
      type: "number",
    },
    Ss: {
      onChange: (event) => {
        setSs(event.target.value);
      },
      type: "number",
    },

    CalculateButtonPsStrip: {
      onClick: async () => {
        setLoadingCalculate(true);

        const payload = {
          space_between_rows: sr,
          shaded_strip_plant: ss,
        };

        try {
          const response = await irrigationSystemDesignService.calculateStrip(
            payload
          );

          console.log("API Response:", response);
          setResultPs(response.value);
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
