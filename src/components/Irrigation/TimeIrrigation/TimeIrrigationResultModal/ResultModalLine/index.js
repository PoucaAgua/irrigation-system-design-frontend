import React from "react";
import "./style.css";
import Spinner from "../../../../SpinnerLoading";

const ResultModal = ({ resultIrrigationTimeByLine }) => {
  return (
    <div>
      {resultIrrigationTimeByLine === null ? (
        <div id="position">
          <Spinner />
        </div>
      ) : (
        <div id="position">
          <div id="large">
            <table className="table table-bordered border-secondary">
              <thead>
                <tr>
                  <th scope="col">Irrigation Time by Line</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{resultIrrigationTimeByLine}</td>
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
