import React from "react";
import Header from "../components/Header/index";
import CardShift from "../components/ShiftIrrigation/IrrigationShiftCards";

function Irrigation({ user, signOut }) {
  return (
    <>
      <Header user={user} signOut={signOut} />
      <h1 className="text-center" style={{ marginTop: 50 }}>
        Maximum irrigation shift
      </h1>
      <CardShift />
    </>
  );
}

export default Irrigation;
