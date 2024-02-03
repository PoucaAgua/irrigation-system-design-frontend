import React from "react";
import "./style.css";
import Spinner from "../../../SpinnerLoading";

const ResultModal = ({ resultShift, view }) => {
  return (
    <div>
      {resultShift === null ? (
        <div id="position">
          <Spinner />
        </div>
      ) : (
        <div id="position">
          <div id="large">
            <table className="table table-bordered border-secondary">
              <thead>
                <tr>
                  <th scope="col">Maximum irrigation shift Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{resultShift}</td>
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
