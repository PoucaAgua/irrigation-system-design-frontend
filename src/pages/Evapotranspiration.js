import React from "react";
import Header from "../components/Header/index";
import EvapotranspirationCards from "../components/EvapotranspirationCards";

function Evapotranspiration({ user, signOut }) {
  return (
    <>
      <Header user={user} signOut={signOut} />
      <h1 className="text-center fs-2" style={{ marginTop: 50 }}>
        Evapotranspiration
      </h1>
      <EvapotranspirationCards />
    </>
  );
}

export default Evapotranspiration;
