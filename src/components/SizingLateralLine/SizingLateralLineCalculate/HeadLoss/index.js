export const createSizingLoadComponentOverrides = ({
  irrigationSystemDesignService,
  loadingCalculate,
  setLoadingCalculate,
  setResultSizingHead,
  nominalFlow,
  setNominalFlow,
  emitterSpacing,
  setEmitterSpacing,
  internalDiameter,
  setInternalDiameter,
  lengthLateral,
  setLengthLateral,
  Head,
}) => {
  return {
    NominalFlowRate: {
      onChange: (event) => {
        setNominalFlow(event.target.value);
      },
      type: "number",
    },
    EmitterSpacing: {
      onChange: (event) => {
        setEmitterSpacing(event.target.value);
      },
      type: "number",
    },
    InternalDiameter: {
      onChange: (event) => {
        setInternalDiameter(event.target.value);
      },
      type: "number",
    },
    LengthLateralLine: {
      onChange: (event) => {
        setLengthLateral(event.target.value);
      },
      type: "number",
    },

    CalculateHead: {
      onClick: async () => {
        setLoadingCalculate(true);

        const payload = {
          length_lateral_line: lengthLateral,
          internal_diameter: internalDiameter,
          emitter_spacing: emitterSpacing,
          nominal_flow_rate: nominalFlow,
        };

        try {
          const response = await irrigationSystemDesignService.CalculateHead(
            payload
          );

          console.log("API Response:", response);
          setResultSizingHead(response.value);
        } catch (error) {
          console.error("Error calculating Head:", error);
        } finally {
          setLoadingCalculate(false);
        }
      },
    },

    SaveButtonHead: {
      onClick: () => {
        alert("SaveButton need to be implemented....");
      },
    },
    Head: {
      value: loadingCalculate ? "Loading..." : Head,
    },
  };
};
