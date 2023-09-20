import React, { useState } from "react";
import Header from "../components/Header";
import Pwtitle from "../components/Titles/Titles_percent_shaded/Pw_area";
import Pstitle from "../components/Titles/Titles_percent_shaded/Ps_area";
import TitlePercentShaded from "../components/Titles/Titles_percent_shaded/Title_PercenteShaded";
import PercenteShadedInputs from "../components/Inputs/PercentShaded_input";
import StripModalRender from "../components/Modals/Modal_ps/strip_projection";
import CanopyModalRender from "../components/Modals/Modal_ps/canopy_projection";
import RadiusModalRender from "../components/Modals/Modal_pw/radius_wetted";
import PwTreeModalRender from "../components/Modals/Modal_pw/tree_wetted";
import PwStripModalRender from "../components/Modals/Modal_pw/strip_wetted";
import IrrigationSystemDesignService from "../services/irrigation_system_design_backend";
import { createCanopyComponentOverrides } from "../components/AgronomicModule/PercentShaded/CanopyCalculation";
import { createStripComponentOverrides } from "../components/AgronomicModule/PercentShaded/StripCalculation";
import { createRadiusComponentOverrides } from "../components/AgronomicModule/PercentWetted/PwRadiusCalculation";
import { createStripPwComponentOverrides } from "../components/AgronomicModule/PercentWetted/PwStripCalculation";
import { createTreeComponentOverrides } from "../components/AgronomicModule/PercentWetted/PwTreeCalculation";
const irrigationSystemDesignService = new IrrigationSystemDesignService();

function PercenteShaded({
  user,
  signOut,
  Canopy,
  setCanopy,
  Strip,
  setStrip,
  Radius,
  setRadius,
  PwStrip,
  setPwStrip,
  Tree,
  setTree,
}) {
  const [loadingCalculate, setLoadingCalculate] = useState(false);
  const [showModalCanopy, setShowModalCanopy] = useState(false);
  const [sr, setSr] = useState("");
  const [sp, setSp] = useState("");
  const [dco, setDco] = useState("");
  const [resultPsCanopy, setResultPsCanopy] = useState(null);
  const [validationError, setValidationError] = useState("");
  const [showModalPsStrip, setShowModalPsStrip] = useState(false);
  const [ss, setSs] = useState("");
  const [resultPsStrip, setResultPsStrip] = useState(null);
  const [showModalPwRadius, setShowModalPwRadius] = useState(false);
  const [q, setQ] = useState("");
  const [k0, setK0] = useState("");
  const [alpha, setAlpha] = useState("");
  const [resultPwRadius, setResultPwRadius] = useState(null);
  const [showModalPwStrip, setShowModalPwStrip] = useState(false);
  const [sw, setSw] = useState("");
  const [resultPwStrip, setResultPwStrip] = useState(null);
  const [showModalPwTree, setShowModalPwTree] = useState(false);
  const [np, setNp] = useState("");
  const [z, setZ] = useState("");
  const [resultPwTree, setResultPwTree] = useState(null);
  const [inputValuePsCanopy, setInputValuePsCanopy] = useState("");
  const [inputValuePsStrip, setInputValuePsStrip] = useState("");
  const [inputValuePwTree, setInputValuePwTree] = useState("");
  const [inputValuePwStrip, setInputValuePwStrip] = useState("");
  const [inputValuePwRadius, setInputValuePwRadius] = useState("");
  const [isInputPsDisabled, setIsInputPsDisabled] = useState(false);
  const [isInputPwDisabled, setIsInputPwDisabled] = useState(false);

  const CanopyComponentOverrides = createCanopyComponentOverrides({
    sr,
    sp,
    dco,
    setSr,
    setSp,
    setDco,
    setValidationError,
    setLoadingCalculate,
    setResultPsCanopy,
    Canopy,
    irrigationSystemDesignService,
    loadingCalculate,
  });
  const toggleModalCanopy = () => {
    setShowModalCanopy(!showModalCanopy);
  };

  const StripComponentOverrides = createStripComponentOverrides({
    sr,
    ss,
    setSr,
    setSs,
    setValidationError,
    setLoadingCalculate,
    setResultPsStrip,
    Strip,
    irrigationSystemDesignService,
    loadingCalculate,
  });
  const toggleModalStrip = () => {
    setShowModalPsStrip(!showModalPsStrip);
  };

  const RadiusComponentOverrides = createRadiusComponentOverrides({
    q,
    k0,
    alpha,
    setQ,
    setK0,
    setAlpha,
    setValidationError,
    setLoadingCalculate,
    setResultPwRadius,
    Radius,
    irrigationSystemDesignService,
    loadingCalculate,
  });
  const toggleModalRadius = () => {
    setShowModalPwRadius(!showModalPwRadius);
  };

  const StripPwComponentOverrides = createStripPwComponentOverrides({
    sr,
    sp,
    sw,
    loadingCalculate,
    setSr,
    setSp,
    setSw,
    setValidationError,
    setLoadingCalculate,
    setResultPwStrip,
    PwStrip,
    irrigationSystemDesignService,
  });
  const toggleModalPwStrip = () => {
    setShowModalPwStrip(!showModalPwStrip);
  };

  const TreeComponentOverrides = createTreeComponentOverrides({
    sr,
    sp,
    np,
    z,
    q,
    k0,
    loadingCalculate,
    setSr,
    setSp,
    setNp,
    setZ,
    setQ,
    setK0,
    setValidationError,
    setLoadingCalculate,
    setResultPwTree,
    Tree,
    irrigationSystemDesignService,
  });
  const toggleModalTree = () => {
    setShowModalPwTree(!showModalPwTree);
  };

  return (
    <>
      <Header user={user} signOut={signOut} />

      <TitlePercentShaded />
      <PercenteShadedInputs
        resultPsCanopy={resultPsCanopy}
        resultPsStrip={resultPsStrip}
        resultPwTree={resultPwTree}
        resultPwStrip={resultPwStrip}
        resultPwRadius={resultPwRadius}
        setResultPsCanopy={setResultPsCanopy}
        setResultPsStrip={setResultPsStrip}
        setResultPwTree={setResultPwTree}
        setResultPwStrip={setResultPwStrip}
        setResultPwRadius={setResultPwRadius}
        inputValuePsCanopy={inputValuePsCanopy}
        inputValuePsStrip={inputValuePsStrip}
        inputValuePwTree={inputValuePwTree}
        inputValuePwStrip={inputValuePwStrip}
        inputValuePwRadius={inputValuePwRadius}
        isInputPsDisabled={isInputPsDisabled}
        isInputPwDisabled={isInputPwDisabled}
        setInputValuePsCanopy={setInputValuePsCanopy}
        setInputValuePsStrip={setInputValuePsStrip}
        setInputValuePwTree={setInputValuePwTree}
        setInputValuePwStrip={setInputValuePwStrip}
        setInputValuePwRadius={setInputValuePwRadius}
        setIsInputPsDisabled={setIsInputPsDisabled}
        setIsInputPwDisabled={setIsInputPwDisabled}
        sr={sr}
        sp={sp}
        sw={sw}
        ss={ss}
        dco={dco}
        z={z}
        q={q}
        k0={k0}
        np={np}
        alpha={alpha}
        setSr={setSr}
        setSs={setSs}
        setNp={setNp}
        setZ={setZ}
        setQ={setQ}
        setK0={setK0}
        setSp={setSp}
        setDco={setDco}
        StripComponentOverrides={StripComponentOverrides}
        CanopyComponentOverrides={CanopyComponentOverrides}
        TreeComponentOverrides={TreeComponentOverrides}
        StripPwComponentOverrides={StripPwComponentOverrides}
        RadiusComponentOverrides={RadiusComponentOverrides}
      />
      <Pstitle />
      <div className="d-flex justify-content-center">
        <StripModalRender
          toggleModalStrip={toggleModalStrip}
          sr={sr}
          ss={ss}
          setSr={setSr}
          setSs={setSs}
          showModalPsStrip={showModalPsStrip}
          setShowModalPsStrip={setShowModalPsStrip}
          resultPsStrip={resultPsStrip}
          validationError={validationError}
          loadingCalculate={loadingCalculate}
          StripComponentOverrides={StripComponentOverrides}
        />

        <CanopyModalRender
          showModalCanopy={showModalCanopy}
          toggleModalCanopy={toggleModalCanopy}
          sr={sr}
          sp={sp}
          dco={dco}
          setSr={setSr}
          setSp={setSp}
          setDco={setDco}
          resultPsCanopy={resultPsCanopy}
          validationError={validationError}
          loadingCalculate={loadingCalculate}
          CanopyComponentOverrides={CanopyComponentOverrides}
        />
      </div>
      <Pwtitle />
      <div className="d-flex justify-content-center">
        <PwTreeModalRender
          showModalPwTree={showModalPwTree}
          toggleModalTree={toggleModalTree}
          setNp={setNp}
          setSp={setSp}
          setSr={setSr}
          setZ={setZ}
          setQ={setQ}
          setK0={setK0}
          validationError={validationError}
          resultPwTree={resultPwTree}
          TreeComponentOverrides={TreeComponentOverrides}
          np={np}
          sp={sp}
          sr={sr}
          z={z}
          q={q}
          k0={k0}
        />

        <PwStripModalRender
          showModalPwStrip={showModalPwStrip}
          toggleModalPwStrip={toggleModalPwStrip}
          sr={sr}
          sp={sp}
          sw={sw}
          resultPwStrip={resultPwStrip}
          validationError={validationError}
          loadingCalculate={loadingCalculate}
          StripPwComponentOverrides={StripPwComponentOverrides}
        />
      </div>
      <div className="d-flex justify-content-center" style={{ marginTop: 10 }}>
        <RadiusModalRender
          showModalPwRadius={showModalPwRadius}
          toggleModalRadius={toggleModalRadius}
          q={q}
          k0={k0}
          alpha={alpha}
          resultPwRadius={resultPwRadius}
          validationError={validationError}
          loadingCalculate={loadingCalculate}
          RadiusComponentOverrides={RadiusComponentOverrides}
        />
      </div>
    </>
  );
}

export default PercenteShaded;
