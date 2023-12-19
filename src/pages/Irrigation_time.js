import React from "react";
import Header from "../components/Header/index";
import CardTime from "../components/TimeIrrigation/TimeIrrigationCards";

function Irrigation({ user, signOut }) {
  return (
    <>
      <Header user={user} signOut={signOut} />
      <h1 className="text-center" style={{ marginTop: 50 }}>
        Irrigation Time
      </h1>
    </>
  );
}

export default Irrigation;
