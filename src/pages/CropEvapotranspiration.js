import React from "react";
import SelectorType from "../components/Evapotranspiration/CropEvapotranspiration/CropEvapotranspirationSelector";
import TitleCropEvapotranspiration from "../components/Titles/Title_CropEvapotranspiration";

function CropEvapotranspiration() {
  return (
    <>
      <TitleCropEvapotranspiration />
      <div
        className="d-flex flex-column align-items-center"
        style={{ marginTop: 25 }}
      >
        <div className="form-group">
          <SelectorType />
        </div>
      </div>
    </>
  );
}

export default CropEvapotranspiration;
