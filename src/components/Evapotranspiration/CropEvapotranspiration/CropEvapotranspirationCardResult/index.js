import React from "react";
import Spinner from "../../../SpinnerLoading";

const ResultCard = ({ resultCropEvapotranspiration }) => {
  return (
    <div>
      {resultCropEvapotranspiration === null ? (
        <div>
          <Spinner />
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
