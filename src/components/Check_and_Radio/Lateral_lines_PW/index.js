import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <>
        <div className="form-check" style={{ marginLeft: 70 }}>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="Single"
          />
          <label className="form-check-label " for="Single">
            Single lateral line
          </label>
        </div>
        <div class="form-check" style={{ marginLeft: 70 }}>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="Dual"
            checked
          />
          <label className="form-check-label" for="Dual">
            Dual lateral lines
          </label>
        </div>
      </>
    );
  }
}
