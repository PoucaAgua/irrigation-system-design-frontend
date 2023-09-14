import React from "react";
//import { Link } from "react-router-dom";
import Header from "../components/Header";
import TitlePercentShaded from "../components/Titles/Title_PercenteShaded";
import PercenteShadedInputs from "../components/Inputs/PercentShaded_input";
import ModalPsStrip from "../components/Modals/Modal_ps/strip_projection";
import ModalPsCanopy from "../components/Modals/Modal_ps/canopy_projection";
import ModalPwRadius from "../components/Modals/Modal_pw/radius_wetted";

function PercenteShaded({ user, signOut }) {
  return (
    <>
      <Header user={user} signOut={signOut} />

      <TitlePercentShaded />
      <PercenteShadedInputs />
      <p className="fs-3 text-center">Percent Shaded Area - PS </p>
      <div className="d-flex justify-content-center">
        <ModalPsStrip />
        <ModalPsCanopy />
      </div>
      <p className="fs-3 text-center">Percent Wetted Area - PW </p>
      <div className="d-flex justify-content-center">
        <ModalPwRadius />
      </div>
    </>
  );
}

export default PercenteShaded;
