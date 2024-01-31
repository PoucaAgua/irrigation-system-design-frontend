export const createStripPwComponentOverrides = ({
  sr,
  sp,
  sw,
  loadingCalculate,
  setSr,
  setSp,
  setSw,
  setLoadingCalculate,
  setResultPw,
  PwStrip,
  irrigationSystemDesignService,
}) => {
  return {
    Sr: {
      onChange: (event) => {
        setSr(event.target.value);
      },
      type: "number",
    },
    Sp: {
      onChange: (event) => {
        setSp(event.target.value);
      },
      type: "number",
    },
    Sw: {
      onChange: (event) => {
        setSw(event.target.value);
      },
      type: "number",
    },

    CalculateButtonStripPw: {
      onClick: async () => {
        setLoadingCalculate(true);

        const payload = {
          row_spacing_plants: sr,
          space_between_plants: sp,
          wetted_zone: sw,
        };

        try {
          const response = await irrigationSystemDesignService.calculatePwStrip(
            payload
          );

          console.log("API Response:", response);
          setResultPw(response.value);
        } catch (error) {
          console.error("Error calculating Continuous strip:", error);
        } finally {
          setLoadingCalculate(false);
        }
      },
    },

    SaveButtonStripPw: {
      onClick: () => {
        alert("SaveButton need be implemented....");
      },
    },
    PwStrip: {
      value: loadingCalculate ? "Loading..." : PwStrip,
    },
  };
};
