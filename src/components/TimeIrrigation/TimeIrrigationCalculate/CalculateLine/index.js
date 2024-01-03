export const createIrrigationTimeByLineComponentOverrides = ({
  irrigationSystemDesignService,
  setLoadingCalculate,
  loadingCalculate,
  setResultIrrigationTimeByLine,
  totalIrrigation,
  setTotalIrrigation,
  spacingBetweenSideLines,
  setSpacingBetweenSideLines,
  emitterFlow,
  setEmitterFlow,
  spacingBetweenEmitters,
  setSpacingbetweenEmitters,
  IrrigationByLine,
}) => {
  return {
    total_irrigation: {
      onChange: (event) => {
        setTotalIrrigation(event.target.value);
      },
      type: "number",
    },
    spacing_between_emitters: {
      onChange: (event) => {
        setSpacingbetweenEmitters(event.target.value);
      },
      type: "number",
    },
    spacing_between_side_lines: {
      onChange: (event) => {
        setSpacingBetweenSideLines(event.target.value);
      },
      type: "number",
    },
    emitter_flow: {
      onChange: (event) => {
        setEmitterFlow(event.target.value);
      },
      type: "number",
    },

    CalculateButtonByLine: {
      onClick: async () => {
        setLoadingCalculate(true);

        const payload = {
          total_irrigation: totalIrrigation,
          spacing_between_emitters: spacingBetweenEmitters,
          spacing_between_side_lines: spacingBetweenSideLines,
          emitter_flow: emitterFlow,
        };

        try {
          const response =
            await irrigationSystemDesignService.calculateIrrigationByLine(
              payload
            );

          console.log("API Response:", response);
          setResultIrrigationTimeByLine(response.value);
        } catch (error) {
          console.error("Error calculating Time irrigation by line:", error);
        } finally {
          setLoadingCalculate(false);
        }
      },
    },

    SaveButtonIrrigationByLine: {
      onClick: () => {
        alert("SaveButton need to be implemented....");
      },
    },
    IrrigationByLine: {
      value: loadingCalculate ? "Loading..." : IrrigationByLine,
    },
  };
};
