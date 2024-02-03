import React from "react";
import "./style.css";
import Spinner from "../../../../SpinnerLoading";

const ResultModal = ({ resultPs }) => {
  return (
    <div>
      {resultPs === null ? (
        <div id="position">
          <Spinner />
        </div>
      ) : (
        <div id="position">
          <div id="large">
            <table className="table table-bordered border-secondary">
              <thead>
                <tr>
                  <th scope="col">Canopy Projection Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{resultPs}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultModal;
