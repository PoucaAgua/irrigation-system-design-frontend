import React from "react";
import SelectorType from "../components/Evapotranspiration/ReferenceEvapotranspiration/EvapotranspirationSelector/EvapotranspirationType";
import TitleReferenceEvapotranspiration from "../components/Titles/Title_ReferenceEvapotranspiration";

function ReferenceEvapotranspiration() {
  return (
    <>
      <TitleReferenceEvapotranspiration />
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

export default ReferenceEvapotranspiration;
