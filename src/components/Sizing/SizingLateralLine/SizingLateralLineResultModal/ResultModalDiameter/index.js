import React from "react";
import "./style.css";
import Spinner from "../../../SpinnerLoadind";

const ResultModal = ({ resultDiameter }) => {
  return (
    <div>
      {resultDiameter === null ? (
        <div id="position">
          <Spinner />
        </div>
      ) : (
        <div id="position">
          <div id="large">
            <table className="table table-bordered border-secondary">
              <thead>
                <tr>
                  <th scope="col">Lateral Diameter Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{resultDiameter}</td>
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
