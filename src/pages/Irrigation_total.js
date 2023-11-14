import React from "react";
import Header from "../components/Header/index";
import CardTotal from "../components/TotalIrrigation/TotalIrrigationCard";

function Irrigation({ user, signOut }) {
  return (
    <>
      <Header user={user} signOut={signOut} />
      <h1 className="text-center" style={{ marginTop: 50 }}>
        Total Irrigation
      </h1>
      <CardTotal />
    </>
  );
}

export default Irrigation;
