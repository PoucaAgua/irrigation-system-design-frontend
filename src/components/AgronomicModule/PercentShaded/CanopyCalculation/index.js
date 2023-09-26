// CanopyComponentOverrides.js

export const createCanopyComponentOverrides = ({
  sr,
  sp,
  dco,
  setSr,
  setSp,
  setDco,
  setValidationError,
  setLoadingCalculate,
  setResultPs,
  Canopy,
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
    Sp: {
      onChange: (event) => {
        setSp(event.target.value);
      },
      type: "number",
    },
    Dco: {
      onChange: (event) => {
        setDco(event.target.value);
      },
      type: "number",
    },

    CalculateButtonCanopy: {
      onClick: async () => {
        if (!sr || !sp || !dco) {
          setValidationError("Please fill in all fields.");
          return;
        }

        setLoadingCalculate(true);
        setValidationError("");

        const payload = {
          space_between_rows: sr,
          space_between_plants: sp,
          diameter_projection: dco,
        };

        try {
          const response = await irrigationSystemDesignService.calculateCanopy(
            payload
          );

          console.log("API Response:", response);
          setResultPs(response.value);
        } catch (error) {
          console.error("Error calculating Canopy:", error);
        } finally {
          setLoadingCalculate(false);
        }
      },
    },

    SaveButtonCanopy: {
      onClick: () => {
        alert("SaveButton need to be implemented....");
      },
    },
    Canopy: {
      value: loadingCalculate ? "Loading..." : Canopy,
    },
  };
};
