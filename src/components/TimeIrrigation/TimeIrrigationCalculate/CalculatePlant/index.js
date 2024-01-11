export const createIrrigationTimeByPlantComponentOverrides = ({
  irrigationSystemDesignService,
  setLoadingCalculate,
  loadingCalculate,
  setResultIrrigationTimeByPlant,
  totalIrrigation,
  setTotalIrrigation,
  spacingBetweenSideLines,
  setSpacingBetweenSideLines,
  emitterFlow,
  setEmitterFlow,
  spacingBetweenPlants,
  setSpacingBetweenPlants,
  numberOfEmittersPerPlant,
  setNumberOfEmittersPerPlant,
  IrrigationByPlant,
}) => {
  return {
    total_irrigation: {
      onChange: (event) => {
        setTotalIrrigation(event.target.value);
      },
      type: "number",
    },
    spacing_between_plants: {
      onChange: (event) => {
        setSpacingBetweenPlants(event.target.value);
      },
      type: "number",
    },
    spacing_between_side_lines: {
      onChange: (event) => {
        setSpacingBetweenSideLines(event.target.value);
      },
      type: "number",
    },
    number_of_emitters_per_plant: {
      onChange: (event) => {
        setNumberOfEmittersPerPlant(event.target.value);
      },
      type: "number",
    },
    emitter_flow: {
      onChange: (event) => {
        setEmitterFlow(event.target.value);
      },
      type: "number",
    },

    CalculateButtonByPlant: {
      onClick: async () => {
        setLoadingCalculate(true);

        const payload = {
          total_irrigation: totalIrrigation,
          spacing_between_plants: spacingBetweenPlants,
          spacing_between_side_lines: spacingBetweenSideLines,
          number_of_emitters_per_plant: numberOfEmittersPerPlant,
          emitter_flow: emitterFlow,
        };

        try {
          const response =
            await irrigationSystemDesignService.calculateIrrigationByPlant(
              payload
            );

          console.log("API Response:", response);
          setResultIrrigationTimeByPlant(response.value);
        } catch (error) {
          console.error("Error calculating Time irrigation by plant:", error);
        } finally {
          setLoadingCalculate(false);
        }
      },
    },

    SaveButtonIrrigationByPlant: {
      onClick: () => {
        alert("SaveButton need to be implemented....");
      },
    },
    IrrigationByPlant: {
      value: loadingCalculate ? "Loading..." : IrrigationByPlant,
    },
  };
};
