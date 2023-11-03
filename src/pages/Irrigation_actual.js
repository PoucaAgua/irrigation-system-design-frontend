import React from "react";
import Header from "../components/Header/index";
import IrrgationCardActual from "../components/Actualirrigation/IrrigationActualCards";
//import { Link } from "react-router-dom";

function Irrigation({ user, signOut }) {
  return (
    <>
      <Header user={user} signOut={signOut} />
      <h1 className="text-center" style={{ marginTop: 50 }}>
        Actual Irrigation
      </h1>
      <IrrgationCardActual />
    </>
  );
}

export default Irrigation;
