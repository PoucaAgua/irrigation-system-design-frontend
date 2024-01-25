import React, { Component } from "react";
import "./style.css";

export default class index extends Component {
  render() {
    return (
      <>
        <div className="text-center">
          <div className="spinner-border" role="status" id="Spinner">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="fs-4">Loading</p>
        </div>
      </>
    );
  }
}
