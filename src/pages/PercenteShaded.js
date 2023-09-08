import React from "react";
//import { Link } from "react-router-dom";
import Header from "../components/Header";
import TitlePercentShaded from "../components/Titles/Title_PercenteShaded";
import PercenteShadedInputs from "../components/Inputs/PercentShaded_input";
import ModalPW from "../components/Modals/Modal_pw";
import ModalPS from "../components/Modals/Modal_ps";

function PercenteShaded({ user, signOut }) {
  return (
    <>
      <Header user={user} signOut={signOut} />

      <TitlePercentShaded />
      <PercenteShadedInputs />
      <div className="d-flex justify-content-center">
        <ModalPW />
        <ModalPS />
      </div>
    </>
  );
}

export default PercenteShaded;
