import React from "react";
import Header from "../components/Header/index";
import SelectorType from "../components/CropEvapotranspiration/CropEvapotranspirationSelector";

function CropEvapotranspiration({ user, signOut }) {
  return (
    <>
      <Header user={user} signOut={signOut} />
      <h1 className="text-center fs-2" style={{ marginTop: 50 }}>
        CropEvapotranspiration
      </h1>
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
