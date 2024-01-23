import React from "react";
import Spinner from "../../SpinnerLoadind";

const ResultCard = ({ resultEvapotranspiration }) => {
  return (
    <div>
      {resultEvapotranspiration === null ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div class="alert alert-light" role="alert">
          <p className="fs-3 text-center">Result: {resultEvapotranspiration}</p>
        </div>
      )}
    </div>
  );
};

export default ResultCard;
