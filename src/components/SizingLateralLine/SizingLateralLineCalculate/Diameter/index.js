export const createSizingDiameterComponentOverrides = ({
  irrigationSystemDesignService,
  loadingCalculate,
  setLoadingCalculate,
  setResultDiameter,
  servicePressure,
  setServicePressure,
  nominalFlow,
  setNominalFlow,
  maxFlow,
  setMaxFlow,
  internalDiameter,
  setInternalDiameter,
  emitterSpacing,
  setEmitterSpacing,
  flowExponent,
  setFlowExponent,
  exponentPressure,
  setExponentPressure,
  coefficient,
  setCoefficient,
  Diameter,
}) => {
  return {
    ServicePressure: {
      onChange: (event) => {
        setServicePressure(event.target.value);
      },
      type: "number",
    },
    NominalFlowFate: {
      onChange: (event) => {
        setNominalFlow(event.target.value);
      },
      type: "number",
    },
    MaxFlowRateVariation: {
      onChange: (event) => {
        setMaxFlow(event.target.value);
      },
      type: "number",
    },
    InternalDiameter: {
      onChange: (event) => {
        setInternalDiameter(event.target.value);
      },
      type: "number",
    },
    EmitterSpacing: {
      onChange: (event) => {
        setEmitterSpacing(event.target.value);
      },
      type: "number",
    },
    FlowExponent: {
      onChange: (event) => {
        setFlowExponent(event.target.value);
      },
      type: "number",
    },
    ExponentPressureLossEquation: {
      onChange: (event) => {
        setExponentPressure(event.target.value);
      },
      type: "number",
    },
    Coefficient: {
      onChange: (event) => {
        setCoefficient(event.target.value);
      },
      type: "number",
    },

    CalculateLateralDiameter: {
      onClick: async () => {
        setLoadingCalculate(true);

        const payload = {
          service_pressure: servicePressure,
          nominal_flow_rate: nominalFlow,
          max_flow_rate_variation: maxFlow,
          internal_diameter: internalDiameter,
          emitter_spacing: emitterSpacing,
          flow_exponent: flowExponent,
          exponent_pressure_loss_equation: exponentPressure,
          coefficient: coefficient,
        };

        try {
          const response =
            await irrigationSystemDesignService.calculateLateralDiameter(
              payload
            );

          console.log("API Response:", response);
          setResultDiameter(response.value);
        } catch (error) {
          console.error("Error calculating Diameter:", error);
        } finally {
          setLoadingCalculate(false);
        }
      },
    },

    SaveButtonLateralDiameter: {
      onClick: () => {
        alert("SaveButton need to be implemented....");
      },
    },
    Diameter: {
      value: loadingCalculate ? "Loading..." : Diameter,
    },
  };
};
