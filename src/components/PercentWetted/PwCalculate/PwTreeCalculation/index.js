export const createTreeComponentOverrides = ({
  sr,
  sp,
  np,
  z,
  q,
  k0,
  loadingCalculate,
  setSr,
  setSp,
  setNp,
  setZ,
  setQ,
  setK0,
  setLoadingCalculate,
  setResultPw,
  Tree,
  irrigationSystemDesignService,
}) => {
  return {
    Sr: {
      onChange: (event) => {
        setSr(event.target.value);
      },
      type: "number",
    },
    Sp: {
      onChange: (event) => {
        setSp(event.target.value);
      },
      type: "number",
    },
    Np: {
      onChange: (event) => {
        setNp(event.target.value);
      },
      type: "number",
    },
    Z: {
      onChange: (event) => {
        setZ(event.target.value);
      },
      type: "number",
    },
    Q: {
      onChange: (event) => {
        setQ(event.target.value);
      },
      type: "number",
    },
    K0: {
      onChange: (event) => {
        setK0(event.target.value);
      },
      type: "number",
    },

    CalculateButtonPwTree: {
      onClick: async () => {
        setLoadingCalculate(true);

        const payload = {
          space_between_lines: sr,
          space_between_plants: sp,
          drippers_number: np,
          z: z,
          q: q,
          hydraulic_conductivity_of_saturated_soil: k0,
        };

        try {
          const response = await irrigationSystemDesignService.calculateTree(
            payload
          );

          console.log("API Response:", response);
          setResultPw(response.value);
        } catch (error) {
          console.error("Error calculating Irrigation by tree:", error);
        } finally {
          setLoadingCalculate(false);
        }
      },
    },

    SaveButtonPwTree: {
      onClick: () => {
        alert("SaveButton need to be implemented....");
      },
    },
    Tree: {
      value: loadingCalculate ? "Loading..." : Tree,
    },
  };
};
