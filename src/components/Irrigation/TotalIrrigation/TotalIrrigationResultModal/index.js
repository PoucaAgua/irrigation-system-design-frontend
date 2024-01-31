import React from "react";
import "./style.css";
import Spinner from "../../../SpinnerLoading";

const ResultModal = ({ resultTotal }) => {
  return (
    <div>
      {resultTotal === null ? (
        <div id="position">
          <Spinner />
        </div>
      ) : (
        <div id="position">
          <div id="large">
            <table className="table table-bordered border-secondary">
              <thead>
                <tr>
                  <th scope="col">Total irrigation Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{resultTotal}</td>
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
