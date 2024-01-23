import React from "react";

const ResultCard = ({ resultCropEvapotranspiration }) => {
  return (
    <div>
      {resultCropEvapotranspiration === null ? (
        <div>
          <p className="fs-2 text-center">Loading...</p>
        </div>
      ) : (
        <div class="alert alert-light" role="alert">
          <p className="fs-3 text-center">
            Result: {resultCropEvapotranspiration}
          </p>
        </div>
      )}
    </div>
  );
};

export default ResultCard;
