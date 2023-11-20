import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <>
        <p className="text-center fs-3" style={{ marginTop: 50 }}>
          Hargraves Samani
        </p>
        <select
          class="form-select d-flex flex-column align-items-center mb-3"
          aria-label="Default select example"
        >
          <option selected>Select the month</option>
          <option value="Jan">January</option>
          <option value="Fev">February</option>
          <option value="Mar">March</option>
          <option value="Abr">April</option>
          <option value="Mai">May</option>
          <option value="Jun">June</option>
          <option value="Jul">July</option>
          <option value="Ago">August</option>
          <option value="Set">September</option>
          <option value="Out">October</option>
          <option value="Nov">November</option>
          <option value="Dez">December</option>
        </select>
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
            Latitude:
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
