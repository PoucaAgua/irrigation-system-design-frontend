// ResultAlert.js
import React from "react";

const ResultCard = ({ resultEvapotranspiration }) => {
  return (
    <>
      <br />
      {resultEvapotranspiration !== null &&
        resultEvapotranspiration !== undefined &&
        resultEvapotranspiration !== "" && (
          <div class="alert alert-light" role="alert">
            <p className="fs-3 text-center">
              Result: {resultEvapotranspiration}
            </p>
          </div>
        )}
    </>
  );
};

export default ResultCard;
