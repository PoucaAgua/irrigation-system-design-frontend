export const createTotalComponentOverrides = ({
  irrigationSystemDesignService,
  setLoadingCalculate,
  loadingCalculate,
  setResultTotal,
  TotalIrrigation,
  actualIrrigation,
  setActualIrrigation,
  electricalConductivityIrrigation,
  setElectricalConductivityIrrigation,
  electricalConductivitySaturation,
  setElectricalConductivitySaturation,
  leachingFraction,
  setLeachingFraction,
  efficiency,
  setEfficiency,
}) => {
  return {
    ActualIrrigation: {
      onChange: (event) => {
        setActualIrrigation(event.target.value);
      },
      type: "number",
    },
    ElectricalConductivityIrrigation: {
      onChange: (event) => {
        setElectricalConductivityIrrigation(event.target.value);
      },
      type: "number",
    },
    ElectricalConductivitySaturation: {
      onChange: (event) => {
        setElectricalConductivitySaturation(event.target.value);
      },
      type: "number",
    },
    LeachingFraction: {
      onChange: (event) => {
        setLeachingFraction(event.target.value);
      },
      type: "number",
    },
    Efficiency: {
      onChange: (event) => {
        setEfficiency(event.target.value);
      },
      type: "number",
    },

    CalculateTotalIrrigation: {
      onClick: async () => {
        setLoadingCalculate(true);

        const payload = {
          actual_irrigation: actualIrrigation,
          electrical_conductivity_of_irrigation:
            electricalConductivityIrrigation,
          electrical_conductivity_of_soil_saturation:
            electricalConductivitySaturation,
          leaching_fraction: leachingFraction,
          efficiency: efficiency,
        };

        try {
          const response =
            await irrigationSystemDesignService.calculateTotalIrrigation(
              payload
            );

          console.log("API Response:", response);
          setResultTotal(response.value);
        } catch (error) {
          console.error("Error calculating Total Irrigation:", error);
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
    TotalIrrigation: {
      value: loadingCalculate ? "Loading..." : TotalIrrigation,
    },
  };
};
