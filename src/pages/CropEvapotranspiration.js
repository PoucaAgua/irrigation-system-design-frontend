import React from "react";
import Header from "../components/Header/index";

function CropEvapotranspiration({ user, signOut }) {
  return (
    <>
      <Header user={user} signOut={signOut} />
      <h1 className="text-center fs-2" style={{ marginTop: 50 }}>
        CropEvapotranspiration
      </h1>
    </>
  );
}

export default CropEvapotranspiration;
