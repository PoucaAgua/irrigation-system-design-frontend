import React from "react";
import Header from "../components/Header/index";

function Evapotranspiration(user, signOut) {
  return (
    <>
      <Header user={user} signOut={signOut} />
      <h1 className="text-center" style={{ marginTop: 50 }}>
        Evapotranspiration
      </h1>
    </>
  );
}

export default Evapotranspiration;
