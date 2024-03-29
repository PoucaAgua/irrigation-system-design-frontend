export const createSizingLoadComponentOverrides = ({
  irrigationSystemDesignService,
  loadingCalculate,
  setLoadingCalculate,
  setResultSizingLoad,
  diameterDerivation,
  setDiameterDerivation,
  noutputs,
  setNoutputs,
  flow,
  setFlow,
  lengthDerivation,
  setLengthDerivation,
  Load,
}) => {
  return {
    DiameterDerivation: {
      onChange: (event) => {
        setDiameterDerivation(event.target.value);
      },
      type: "number",
    },
    Noutputs: {
      onChange: (event) => {
        setNoutputs(event.target.value);
      },
      type: "number",
    },
    Flow: {
      onChange: (event) => {
        setFlow(event.target.value);
      },
      type: "number",
    },
    LengthDerivation: {
      onChange: (event) => {
        setLengthDerivation(event.target.value);
      },
      type: "number",
    },

    CalculateDerivationLoad: {
      onClick: async () => {
        setLoadingCalculate(true);

        const payload = {
          length_derivation_line: lengthDerivation,
          flow: flow,
          n_outputs: noutputs,
          diameter_derivation_line: diameterDerivation,
        };

        try {
          const response =
            await irrigationSystemDesignService.calculateDerivationLoad(
              payload
            );

          console.log("API Response:", response);
          setResultSizingLoad(response.value);
        } catch (error) {
          console.error("Error calculating Derivation Load:", error);
        } finally {
          setLoadingCalculate(false);
        }
      },
    },

    SaveButtonDerivationLoad: {
      onClick: () => {
        alert("SaveButton need to be implemented....");
      },
    },
    Load: {
      value: loadingCalculate ? "Loading..." : Load,
    },
  };
};
