import React from "react";
import "./style.css";
import Spinner from "../../../../SpinnerLoading";

const ResultModal = ({ resultSizingLoad }) => {
  return (
    <div>
      {resultSizingLoad === null ? (
        <div id="position">
          <Spinner />
        </div>
      ) : (
        <div id="position">
          <div id="large">
            <table className="table table-bordered border-secondary">
              <thead>
                <tr>
                  <th scope="col">Derivation load Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{resultSizingLoad}</td>
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
