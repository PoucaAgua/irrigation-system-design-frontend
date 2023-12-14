import React from "react";
import Header from "../components/Header/index";
import SelectorType from "../components/ReferenceEvapotranspiration/EvapotranspirationSelector/EvapotranspirationType";

function ReferenceEvapotranspiration({ user, signOut }) {
  return (
    <>
      <Header user={user} signOut={signOut} />
      <h1 className="text-center fs-2" style={{ marginTop: 50 }}>
        Reference Evapotranspiration
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

export default ReferenceEvapotranspiration;
