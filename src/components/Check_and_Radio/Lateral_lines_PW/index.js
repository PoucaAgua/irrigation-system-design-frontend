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
            id="flexRadioDefault1"
          />
          <label className="form-check-label " for="flexRadioDefault1">
            Single lateral line
          </label>
        </div>
        <div class="form-check" style={{ marginLeft: 70 }}>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label className="form-check-label" for="flexRadioDefault2">
            Dual lateral lines
          </label>
        </div>
      </>
    );
  }
}
