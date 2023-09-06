import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function HomeButtons() {
  return (
    <>
      <div
        className="d-grid gap-2 col-6 mx-auto custom-button"
        style={{ marginTop: 30 }}
      >
        <Link
          to="/Evapotranspiration"
          className="btn btn-secondary custom-button"
          type="button"
        >
          Evapotranspiration
        </Link>
        <Link
          to="/CropCoefficient"
          className="btn btn-secondary custom-button"
          type="button"
        >
          CropCoefficient
        </Link>
        <Link
          to="/PercenteShaded"
          className="btn btn-secondary custom-button"
          type="button"
        >
          PercenteShaded
        </Link>
        <Link
          to="/SizeLines"
          className="btn btn-secondary custom-button"
          type="button"
        >
          SizeLines
        </Link>
        <Link
          to="/Irrigation"
          className="btn btn-secondary custom-button"
          type="button"
        >
          Irrigation
        </Link>
        <Link
          to="/IrrigationSystem"
          className="btn btn-secondary custom-button"
          type="button"
        >
          IrrigationSystem
        </Link>
      </div>
    </>
  );
}

export default HomeButtons;
