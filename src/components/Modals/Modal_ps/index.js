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
            style={{ width: "150px", marginLeft: 14 }}
          >
            Calculate Ps
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                href="0"
                data-bs-toggle="modal"
                data-bs-target="#Canopy"
              >
                Plant Canopy Projection
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="0"
                data-bs-toggle="modal"
                data-bs-target="#Strip"
              >
                Plant Strip Projection
              </a>
            </li>
          </ul>
        </div>

        {/* Modal 1 */}
        <div
          className="modal fade"
          id="Canopy"
          tabIndex="-1"
          aria-labelledby="ModalOneLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="ModalOneLabel">
                  Percent Shaded Area By Plant Canopy Projection
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
                  Crown projection diameter:
                </label>
                <input
                  id="input5"
                  type="text"
                  className="form-control mb-3"
                  style={{ width: "330px" }}
                  placeholder="Dco (m)"
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
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary">
                  Validate
                </button>
                <button type="button" className="btn btn-secondary">
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

        {/* Modal 2 */}
        <div
          className="modal fade"
          id="Strip"
          tabIndex="-1"
          aria-labelledby="ModalTwoLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="ModalTwoLabel">
                  Percent Shaded Area By Plant Strip Projection
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="input mb-3">
                  <label class="form-label">
                    Spacing between rows of plants:
                  </label>
                  <input
                    id="input5"
                    type="text"
                    className="form-control"
                    style={{ width: "330px" }}
                    placeholder="Sr (m)"
                  />
                  <label class="form-label">Shaded strip:</label>
                  <input
                    id="input5"
                    type="text"
                    className="form-control"
                    style={{ width: "330px" }}
                    placeholder="Ss (m)"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary">
                  Validate
                </button>
                <button type="button" className="btn btn-secondary">
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
