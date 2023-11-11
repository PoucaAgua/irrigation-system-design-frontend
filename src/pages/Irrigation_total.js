import React from "react";
import Header from "../components/Header/index";

function Irrigation({ user, signOut }) {
  return (
    <>
      <Header user={user} signOut={signOut} />
      <h1 className="text-center" style={{ marginTop: 50 }}>
        Total Irrigation
      </h1>
    </>
  );
}

export default Irrigation;
