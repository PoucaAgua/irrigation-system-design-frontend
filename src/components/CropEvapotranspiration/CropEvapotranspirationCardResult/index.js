// ResultAlert.js
import React from "react";

const ResultCard = ({ resultCropEvapotranspiration }) => {
  return (
    <>
      <br />
      {resultCropEvapotranspiration !== null &&
        resultCropEvapotranspiration !== undefined &&
        resultCropEvapotranspiration !== "" && (
          <div class="alert alert-light" role="alert">
            <p className="fs-3 text-center">
              Result: {resultCropEvapotranspiration}
            </p>
          </div>
        )}
    </>
  );
};

export default ResultCard;
