import React from "react";
import Header from "../components/Header/index";
import IrrgationCardMenu from "../components/IrrigationCardMenu/index";
//import { Link } from "react-router-dom";

function Irrigation({ user, signOut }) {
  return (
    <>
      <Header user={user} signOut={signOut} />
      <h1 className="text-center" style={{ marginTop: 50 }}>
        Irrigation
      </h1>
      <IrrgationCardMenu />
    </>
  );
}

export default Irrigation;
