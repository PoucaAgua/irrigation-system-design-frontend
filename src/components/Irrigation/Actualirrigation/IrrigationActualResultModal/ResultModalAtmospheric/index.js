import React from "react";
import "./style.css";
import Spinner from "../../../../SpinnerLoading";

const ResultModal = ({ resultAtmospheric }) => {
  return (
    <div>
      {resultAtmospheric === null ? (
        <div id="position">
          <Spinner />
        </div>
      ) : (
        <div id="position">
          <div id="large">
            <table className="table table-bordered border-secondary">
              <thead>
                <tr>
                  <th scope="col">Irrigation by Atmospheric Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{resultAtmospheric}</td>
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
