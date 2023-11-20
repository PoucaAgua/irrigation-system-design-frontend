import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <>
        <p className="text-center fs-3" style={{ marginTop: 50 }}>
          Penman Monteith
        </p>
        <div className="form-group">
          <label htmlFor="input1" className="left-label">
            Temperature med:
          </label>
          <input
            id="input1"
            type="text"
            className="form-control mb-3 custom-input"
            placeholder=""
            value={0}
            onChange={(e) => 0(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input1" className="left-label">
            Temperature max:
          </label>
          <input
            id="input1"
            type="text"
            className="form-control mb-3 custom-input"
            placeholder=""
            value={0}
            onChange={(e) => 0(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input1" className="left-label">
            Temperature min:
          </label>
          <input
            id="input1"
            type="text"
            className="form-control mb-3 custom-input"
            placeholder=""
            value={0}
            onChange={(e) => 0(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input1" className="left-label">
            Relative humidity air
          </label>
          <input
            id="input1"
            type="text"
            className="form-control mb-3 custom-input"
            placeholder=""
            value={0}
            onChange={(e) => 0(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input1" className="left-label">
            Days:
          </label>
          <input
            id="input1"
            type="text"
            className="form-control mb-3 custom-input"
            placeholder=""
            value={0}
            onChange={(e) => 0(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input1" className="left-label">
            Altitude:
          </label>
          <input
            id="input1"
            type="text"
            className="form-control mb-3 custom-input"
            placeholder=""
            value={0}
            onChange={(e) => 0(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input1" className="left-label">
            Wind speed:
          </label>
          <input
            id="input1"
            type="text"
            className="form-control mb-3 custom-input"
            placeholder=""
            value={0}
            onChange={(e) => 0(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input1" className="left-label">
            Ground heat:
          </label>
          <input
            id="input1"
            type="text"
            className="form-control mb-3 custom-input"
            placeholder=""
            value={0}
            onChange={(e) => 0(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input1" className="left-label">
            Daily_radiation:
          </label>
          <input
            id="input1"
            type="text"
            className="form-control mb-3 custom-input"
            placeholder=""
            value={0}
            onChange={(e) => 0(e.target.value)}
          />
        </div>
        <div
          class="d-grid gap-2 d-md-flex justify-content-md-end"
          style={{ marginBottom: 50 }}
        >
          <button class="btn btn-success me-md-2" type="button">
            Calculate
          </button>
          <button class="btn btn-danger" type="button">
            Validate
          </button>
        </div>
      </>
    );
  }
}
