import React, { Component } from "react";

export default class Index extends Component {
  render() {
    return (
      <>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ width: "150px", marginRight: 14 }}
          >
            Calculate Pw
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                href="0"
                data-bs-toggle="modal"
                data-bs-target="#tree"
              >
                Irrigation by tree
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="0"
                data-bs-toggle="modal"
                data-bs-target="#radius"
              >
                Twice saturated wetted radius
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="0"
                data-bs-toggle="modal"
                data-bs-target="#strip"
              >
                Continuous strip
              </a>
            </li>
          </ul>
        </div>

        {/*modal init*/}
        <div
          className="modal fade"
          id="tree"
          tabIndex="-1"
          aria-labelledby="ModalOneLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="ModalOneLabel">
                  Irrigation by tree
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
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

                <label htmlFor="input5" className="left-label">
                  Spacing between plants in the row:
                </label>
                <input
                  id="input5"
                  type="text"
                  className="form-control mb-3"
                  style={{ width: "330px" }}
                  placeholder="Sp (m)"
                />

                <label htmlFor="input5" className="left-label">
                  Spacing between rows of plants:
                </label>
                <input
                  id="input5"
                  type="text"
                  className="form-control mb-3"
                  style={{ width: "330px" }}
                  placeholder="Sr (m)"
                />

                <label htmlFor="input5" className="left-label">
                  Maximum diameter wetted by the dripper, m:
                </label>
                <input
                  id="input5"
                  type="text"
                  className="form-control mb-3"
                  style={{ width: "330px" }}
                  placeholder="Dw (m)"
                />

                <p>Dw Calculate.</p>
                <label htmlFor="input5" className="left-label">
                  Wetting depth:
                </label>
                <input
                  id="input5"
                  type="text"
                  className="form-control mb-3"
                  style={{ width: "330px" }}
                  placeholder="Z (cm)"
                />

                <label htmlFor="input5" className="left-label">
                  Q:
                </label>
                <input
                  id="input5"
                  type="text"
                  className="form-control mb-3"
                  style={{ width: "330px" }}
                  placeholder="Q"
                />

                <label htmlFor="input5" className="left-label">
                  Hydraulic conductivity of saturated soil:
                </label>
                <input
                  id="input5"
                  type="text"
                  className="form-control mb-3"
                  style={{ width: "330px" }}
                  placeholder="cm h-1"
                />
              </div>
              <div className="modal-footer">
                <button type="button" class="btn btn-secondary">
                  Validate
                </button>
                <button type="button" class="btn btn-secondary">
                  Calculate
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*modal init*/}
        <div
          className="modal fade"
          id="radius"
          tabIndex="-1"
          aria-labelledby="ModalOneLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="ModalOneLabel">
                  Twice saturated wetted radius
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <label htmlFor="input5" className="left-label">
                  Q:
                </label>
                <input
                  id="input5"
                  type="text"
                  className="form-control mb-3"
                  style={{ width: "330px" }}
                  placeholder="Q"
                />

                <label htmlFor="input5" className="left-label">
                  Hydraulic conductivity:
                </label>
                <input
                  id="input5"
                  type="text"
                  className="form-control mb-3"
                  style={{ width: "330px" }}
                  placeholder="Ko (cm h-1)"
                />

                <label htmlFor="input5" className="left-label">
                  Exponential model parameter for unsaturated soil hydraulic
                  conductivity:
                </label>
                <input
                  id="input5"
                  type="text"
                  className="form-control mb-3"
                  style={{ width: "330px" }}
                  placeholder="α"
                />
              </div>
              <div className="modal-footer">
                <button type="button" class="btn btn-secondary">
                  Validate
                </button>
                <button type="button" class="btn btn-secondary">
                  Calculate
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*modal init*/}
        <div
          className="modal fade"
          id="strip"
          tabIndex="-1"
          aria-labelledby="ModalTwoLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="ModalTwoLabel">
                  Continuous strip
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <label htmlFor="input5" className="left-label">
                  Wetted area:
                </label>
                <input
                  id="input5"
                  type="text"
                  className="form-control mb-3"
                  style={{ width: "330px" }}
                  placeholder="Aw = SP x SW , m²"
                />
                <label htmlFor="input5" className="left-label">
                  Area occupied by the plant:
                </label>
                <input
                  id="input5"
                  type="text"
                  className="form-control mb-3"
                  style={{ width: "330px" }}
                  placeholder="Ap = SP x SR, m²"
                />
                <p>Moistened area</p>
                <label htmlFor="input5" className="left-label">
                  Spacing between plants in the row:
                </label>
                <input
                  id="input5"
                  type="text"
                  className="form-control mb-3"
                  style={{ width: "330px" }}
                  placeholder="Sp (m)"
                />
                <label htmlFor="input5" className="left-label">
                  Wet Strip:
                </label>
                <input
                  id="input5"
                  type="text"
                  className="form-control mb-3"
                  style={{ width: "330px" }}
                  placeholder="Sw (m²)"
                />
                <p>Area occupied plant</p>
                <label htmlFor="input5" className="left-label">
                  Spacing between rows of plants:
                </label>
                <input
                  id="input5"
                  type="text"
                  className="form-control mb-3"
                  style={{ width: "330px" }}
                  placeholder="Sr (m)"
                />
                <label htmlFor="input5" className="left-label">
                  Spacing between plants in the row:
                </label>
                <input
                  id="input5"
                  type="text"
                  className="form-control mb-3"
                  style={{ width: "330px" }}
                  placeholder="Sp (m)"
                />
              </div>
              <div className="modal-footer">
                <button type="button" class="btn btn-secondary">
                  Validate
                </button>
                <button type="button" class="btn btn-secondary">
                  Calculate
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
