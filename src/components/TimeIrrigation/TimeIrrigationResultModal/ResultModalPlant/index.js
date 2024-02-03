import React from "react";
import "./style.css";
import Spinner from "../../../SpinnerLoadind";

const ResultModal = ({ resultIrrigationTimeByPlant }) => {
  return (
    <div>
      {resultIrrigationTimeByPlant === null ? (
        <div id="position">
          <Spinner />
        </div>
      ) : (
        <div id="position">
          <div id="large">
            <table className="table table-bordered border-secondary">
              <thead>
                <tr>
                  <th scope="col">Irrigation Time by Plant</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{resultIrrigationTimeByPlant}</td>
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
