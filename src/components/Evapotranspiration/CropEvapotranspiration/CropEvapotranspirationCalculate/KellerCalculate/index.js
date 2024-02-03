export const createKellerComponentOverrides = ({
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
  Keller,
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

    CalculateButtonKeller: {
      onClick: async () => {
        setLoadingCalculate(true);

        const payload = {
          Eto: eto,
          Kc: kc,
          Kl: kl,
          P: p,
        };

        try {
          const response = await irrigationSystemDesignService.calculateKeller(
            payload
          );

          console.log("API Response:", response);
          setResultCropEvapotranspiration(response.value);
        } catch (error) {
          console.error(
            "Error calculating CropEvapotranspiration Keller:",
            error
          );
        } finally {
          setLoadingCalculate(false);
        }
      },
    },

    SaveButtonKeller: {
      onClick: () => {
        alert("SaveButton need to be implemented....");
      },
    },
    Keller: {
      value: loadingCalculate ? "Loading..." : Keller,
    },
  };
};
