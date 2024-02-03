export const createShiftComponentOverrides = ({
  irrigationSystemDesignService,
  setLoadingCalculate,
  loadingCalculate,
  resultShift,
  setResultShift,
  ShiftIrrigation,
  actualIrrigation,
  setActualIrrigation,
  cropEvapotranspiration,
  setCropEvapotranspiration,
  ShiftComponentOverrides,
}) => {
  return {
    ActualIrrigation: {
      onChange: (event) => {
        setActualIrrigation(event.target.value);
      },
      type: "number",
    },
    CropEvapotranspiration: {
      onChange: (event) => {
        setCropEvapotranspiration(event.target.value);
      },
      type: "number",
    },

    CalculateTotalIrrigation: {
      onClick: async () => {
        setLoadingCalculate(true);

        const payload = {
          actual_irrigation: actualIrrigation,
          crop_evapotranspiration: cropEvapotranspiration,
        };

        try {
          const response =
            await irrigationSystemDesignService.calculateShiftIrrigation(
              payload
            );

          console.log("API Response:", response);
          setResultShift(response.value);
        } catch (error) {
          console.error("Error calculating Maximum irrigation shift:", error);
        } finally {
          setLoadingCalculate(false);
        }
      },
    },

    SaveButtonTotal: {
      onClick: () => {
        alert("SaveButton need to be implemented....");
      },
    },
    ShiftIrrigation: {
      value: loadingCalculate ? "Loading..." : ShiftIrrigation,
    },
  };
};
