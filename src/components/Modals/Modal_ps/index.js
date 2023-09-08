import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <>
        <button
          type="button"
          className="btn btn-secondary mr-3"
          style={{ width: "150px", marginLeft: 14 }}
          data-bs-toggle="modal"
          data-bs-target="#CalculatePs"
        >
          Calculate Ps
        </button>

        <div
          class="modal fade"
          id="CalculatePs"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Percentage of shaded area - Ps
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="d-flex flex-column align-items-center">
                  <div className="form-group">
                    <label htmlFor="input5" className="left-label">
                      Shaded strip:
                    </label>
                    <input
                      id="input5"
                      type="text"
                      className="form-control mb-3"
                      style={{ width: "330px" }}
                      placeholder="Ss (m)"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="input6" className="left-label">
                      Crown projection diameter:
                    </label>
                    <input
                      id="input6"
                      type="text"
                      className="form-control mb-3"
                      style={{ width: "330px" }}
                      placeholder="Dco (m)"
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
