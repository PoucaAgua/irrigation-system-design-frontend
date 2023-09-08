import React, { Component } from "react";
import RadioLateral from "../../Check_and_Radio/Lateral_lines_PW";
import RadioIrrigaton from "../../Check_and_Radio/Irrigation_pw";

export default class index extends Component {
  render() {
    return (
      <>
        <button
          type="button"
          className="btn btn-secondary mr-3"
          style={{ width: "150px", marginRight: 14 }}
          data-bs-toggle="modal"
          data-bs-target="#CalculatePw"
        >
          Calculate Pw
        </button>

        <div
          class="modal fade"
          id="CalculatePw"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Percentage of wetted area - Pw
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <RadioLateral />
                <br />
                <RadioIrrigaton />
                <br />
                <div className="d-flex flex-column align-items-center">
                  <div className="form-group">
                    <label htmlFor="input2" className="left-label">
                      Hydraulic conductivity:
                    </label>
                    <input
                      id="input2"
                      type="text"
                      className="form-control mb-3"
                      style={{ width: "330px" }}
                      placeholder="Ko (cm h-1)"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="input3" className="left-label">
                      Exponential Model Parameter for Soil K:
                    </label>
                    <input
                      id="input3"
                      type="text"
                      className="form-control mb-3"
                      style={{ width: "330px" }}
                      placeholder="conductivity - α"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="input4" className="left-label">
                      Dripper flow rate (cm3 h-1):
                    </label>
                    <input
                      id="input4"
                      type="text"
                      className="form-control mb-3"
                      style={{ width: "330px" }}
                      placeholder="(cm3 h-1)"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="input5" className="left-label">
                      Number of drippers per plant:
                    </label>
                    <input
                      id="input5"
                      type="text"
                      className="form-control mb-3"
                      style={{ width: "330px" }}
                      placeholder="Np"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="input6" className="left-label">
                      Wetting depth:
                    </label>
                    <input
                      id="input6"
                      type="text"
                      className="form-control mb-3"
                      style={{ width: "330px" }}
                      placeholder="Z (cm)"
                    />
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-secondary">
                  Validate
                </button>
                <button type="button" class="btn btn-secondary">
                  Calculate
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
