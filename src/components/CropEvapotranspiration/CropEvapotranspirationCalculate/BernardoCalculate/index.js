export const createBernardoComponentOverrides = ({
  irrigationSystemDesignService,
  loadingCalculate,
  setLoadingCalculate,
  eto,
  setEto,
  kc,
  setKc,
  kl,
  setKl,
  p,
  setP,
  resultCropEvapotranspiration,
  setResultCropEvapotranspiration,
  Bernardo,
}) => {
  return {
    Eto: {
      onChange: (event) => {
        setEto(event.target.value);
      },
      type: "number",
    },
    Kc: {
      onChange: (event) => {
        setKc(event.target.value);
      },
      type: "number",
    },
    Kl: {
      onChange: (event) => {
        setKl(event.target.value);
      },
      type: "number",
    },
    P: {
      onChange: (event) => {
        setP(event.target.value);
      },
      type: "number",
    },

    CalculateButtonBernardo: {
      onClick: async () => {
        setLoadingCalculate(true);

        const payload = {
          Eto: eto,
          Kc: kc,
          Kl: kl,
          P: p,
        };

        try {
          const response =
            await irrigationSystemDesignService.calculateBernardo(payload);

          console.log("API Response:", response);
          setResultCropEvapotranspiration(response.value);
        } catch (error) {
          console.error(
            "Error calculating CropEvapotranspiration Bernardo :",
            error
          );
        } finally {
          setLoadingCalculate(false);
        }
      },
    },

    SaveButtonBernardo: {
      onClick: () => {
        alert("SaveButton need to be implemented....");
      },
    },
    Bernardo: {
      value: loadingCalculate ? "Loading..." : Bernardo,
    },
  };
};
