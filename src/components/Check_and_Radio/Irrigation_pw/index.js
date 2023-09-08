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
          <label
            className="form-check-label text-left"
            htmlFor="flexRadioDefault1"
          >
            Tree irrigation
          </label>
        </div>
        <div className="form-check" style={{ marginLeft: 70 }}>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label
            className="form-check-label text-left"
            htmlFor="flexRadioDefault2"
          >
            Irrigation for continuous strip formation
          </label>
        </div>
      </>
    );
  }
}
