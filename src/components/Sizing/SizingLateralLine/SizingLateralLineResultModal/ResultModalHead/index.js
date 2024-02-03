import React from "react";
import "./style.css";
import Spinner from "../../../../SpinnerLoading";

const ResultModal = ({ resultSizingHead }) => {
  return (
    <div>
      {resultSizingHead === null ? (
        <div id="position">
          <Spinner />
        </div>
      ) : (
        <div id="position">
          <div id="large">
            <table className="table table-bordered border-secondary">
              <thead>
                <tr>
                  <th scope="col">Lateral Head Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{resultSizingHead}</td>
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
