export const createSizingDiameterComponentOverrides = ({
  irrigationSystemDesignService,
  loadingCalculate,
  setLoadingCalculate,
  setResultDiamater,
  speedMax,
  setSpeedMax,
  demandFlow,
  setDemandFlow,
  Diameter,
}) => {
  return {
    SpeedMax: {
      onChange: (event) => {
        setSpeedMax(event.target.value);
      },
      type: "number",
    },
    DemandFlow: {
      onChange: (event) => {
        setDemandFlow(event.target.value);
      },
      type: "number",
    },

    CalculateDerivationDiameter: {
      onClick: async () => {
        setLoadingCalculate(true);

        const payload = {
          demand_flow: demandFlow,
          speed_max: speedMax,
        };

        try {
          const response =
            await irrigationSystemDesignService.calculateDerivationDiameter(
              payload
            );

          console.log("API Response:", response);
          setResultDiamater(response.value);
        } catch (error) {
          console.error("Error calculating Derivation Diameter:", error);
        } finally {
          setLoadingCalculate(false);
        }
      },
    },

    SaveButtonDerivationDiameter: {
      onClick: () => {
        alert("SaveButton need to be implemented....");
      },
    },
    Diameter: {
      value: loadingCalculate ? "Loading..." : Diameter,
    },
  };
};
