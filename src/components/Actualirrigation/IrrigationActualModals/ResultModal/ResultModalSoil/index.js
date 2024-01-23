import React from "react";
import "./style.css";
import Spinner from "../../../../SpinnerLoadind";

const ResultModal = ({ resultSoilParams }) => {
  return (
    <div>
      {resultSoilParams === null ? (
        <div id="position">
          <Spinner />
        </div>
      ) : (
        <div id="position">
          <div id="large">
            <table className="table table-bordered border-secondary">
              <thead>
                <tr>
                  <th scope="col">Irrigation by Soil Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{resultSoilParams}</td>
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
