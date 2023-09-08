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
            id="Tree"
          />
          <label className="form-check-label text-left" htmlFor="Tree">
            Tree irrigation
          </label>
        </div>
        <div className="form-check" style={{ marginLeft: 70 }}>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="continuous"
            checked
          />
          <label className="form-check-label text-left" htmlFor="continuous">
            Irrigation for continuous strip formation
          </label>
        </div>
      </>
    );
  }
}
