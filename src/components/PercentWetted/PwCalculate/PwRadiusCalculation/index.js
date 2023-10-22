// RadiusComponentOverrides.js

export const createRadiusComponentOverrides = ({
  q,
  k0,
  alpha,
  setQ,
  setK0,
  setAlpha,
  setValidationError,
  setLoadingCalculate,
  setResultPw,
  Radius,
  irrigationSystemDesignService,
  loadingCalculate,
}) => {
  return {
    Q: {
      onChange: (event) => {
        setQ(event.target.value);
        setValidationError("");
      },
      type: "number",
    },
    K0: {
      onChange: (event) => {
        setK0(event.target.value);
        setValidationError("");
      },
      type: "number",
    },
    Alpha: {
      onChange: (event) => {
        setAlpha(event.target.value);
        setValidationError("");
      },
      type: "number",
    },

    CalculateButtonRadius: {
      onClick: async () => {
        if (!q || !k0 || !alpha) {
          setValidationError("Please fill in all fields.");
          return;
        }

        setLoadingCalculate(true);
        setValidationError("");

        const payload = {
          q: q,
          hydraulic_conductivity_of_saturated_soil: k0,
          parameter_model_unsaturated_hydraulic: alpha,
        };

        try {
          const response = await irrigationSystemDesignService.calculateRadius(
            payload
          );

          console.log("API Response:", response);
          setResultPw(response.value);
        } catch (error) {
          console.error(
            "Error calculating Twice saturated wetted radius:",
            error
          );
        } finally {
          setLoadingCalculate(false);
        }
      },
    },

    SaveButtonRadius: {
      onClick: () => {
        alert("SaveButton need to be implemented....");
      },
    },
    Radius: {
      value: loadingCalculate ? "Loading..." : Radius,
    },
  };
};
