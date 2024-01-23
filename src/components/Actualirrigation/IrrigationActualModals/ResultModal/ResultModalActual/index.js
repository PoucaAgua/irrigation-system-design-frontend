import React from "react";
import "./style.css";

const ResultModal = ({ resultMaximum }) => {
  return (
    <div>
      {resultMaximum === null ? (
        <div id="position">
          <p className="fs-2 text-center">Loading...</p>
        </div>
      ) : (
        <div id="position">
          <div id="large">
            <table className="table table-bordered border-secondary">
              <thead>
                <tr>
                  <th scope="col">Maximum actual result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{resultMaximum}</td>
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
