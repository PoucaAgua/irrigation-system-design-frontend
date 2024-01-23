import React from "react";
import "./style.css";

const ResultModal = ({ resultDiameter }) => {
  return (
    <div>
      {resultDiameter === null ? (
        <div id="position">
          <p className="fs-2 text-center">Loading...</p>
        </div>
      ) : (
        <div id="position">
          <div id="large">
            <table className="table table-bordered border-secondary">
              <thead>
                <tr>
                  <th scope="col">Derivation Diameter Result</th>
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
