export const createSoilComponentOverrides = ({
  irrigationSystemDesignService,
  setResultSoilParams,
  soilMoistureFieldCapacity,
  setSoilMoistureFieldCapacity,
  soilMoistureAtPermanentWiltingPoint,
  setSoilMoistureAtPermanentWiltingPoint,
  depletionFactor,
  setDepletionFactor,
  soilDepth,
  setSoilDepth,
  effectivePrecipitation,
  setEffectivePrecipitation,
  setLoadingCalculate,
  loadingCalculate,
  SoilParams,
}) => {
  return {
    soilMoistureFieldCapacity: {
      onChange: (event) => {
        setSoilMoistureFieldCapacity(event.target.value);
      },
      type: "number",
    },
    soilMoistureAtPermanentWiltingPoint: {
      onChange: (event) => {
        setSoilMoistureAtPermanentWiltingPoint(event.target.value);
      },
      type: "number",
    },
    depletionFactor: {
      onChange: (event) => {
        setDepletionFactor(event.target.value);
      },
      type: "number",
    },
    soilDepth: {
      onChange: (event) => {
        setSoilDepth(event.target.value);
      },
      type: "number",
    },
    effectivePrecipitation: {
      onChange: (event) => {
        setEffectivePrecipitation(event.target.value);
      },
      type: "number",
    },

    CalculateButtonSoilParams: {
      onClick: async () => {
        setLoadingCalculate(true);

        const payload = {
          soil_moisture_field_capacity: soilMoistureFieldCapacity,
          soil_moisture_at_permanent_wilting_point:
            soilMoistureAtPermanentWiltingPoint,
          depletion_factor: depletionFactor,
          soil_depth: soilDepth,
          effective_precipitation: effectivePrecipitation,
        };

        try {
          const response =
            await irrigationSystemDesignService.calculateSoilParams(payload);

          console.log("API Response:", response);
          setResultSoilParams(response.value);
        } catch (error) {
          console.error(
            "Error calculating Actual irrigation soil params:",
            error
          );
        } finally {
          setLoadingCalculate(false);
        }
      },
    },

    SaveButtonSoilParams: {
      onClick: () => {
        alert("SaveButton need to be implemented....");
      },
    },
    SoilParams: {
      value: loadingCalculate ? "Loading..." : SoilParams,
    },
  };
};
