export const createMaximumComponentOverrides = ({
  irrigationSystemDesignService,
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
  fractionOfTotalWettedArea,
  setFractionOfTotalWettedArea,
  Maximum,
  setResultMaximum,
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
    fractionOfTotalWettedArea: {
      onChange: (event) => {
        setFractionOfTotalWettedArea(event.target.value);
      },
      type: "number",
    },

    CalculateButtonMaximum: {
      onClick: async () => {
        setLoadingCalculate(true);

        const payload = {
          soil_moisture_field_capacity: soilMoistureFieldCapacity,
          soil_moisture_at_permanent_wilting_point:
            soilMoistureAtPermanentWiltingPoint,
          depletion_factor: depletionFactor,
          soil_depth: soilDepth,
          effective_precipitation: effectivePrecipitation,
          fraction_of_total_wetted_area: fractionOfTotalWettedArea,
        };

        try {
          const response = await irrigationSystemDesignService.calculateMaximum(
            payload
          );

          console.log("API Response:", response);
          setResultMaximum(response.value);
        } catch (error) {
          console.error("Error calculating Actual irrigation maximum:", error);
        } finally {
          setLoadingCalculate(false);
        }
      },
    },

    SaveButtonMaximum: {
      onClick: () => {
        alert("SaveButton need to be implemented....");
      },
    },
    Maximum: {
      value: loadingCalculate ? "Loading..." : Maximum,
    },
  };
};
