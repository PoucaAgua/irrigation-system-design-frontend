import React, { useState } from "react";
import Header from "../components/Header";
import Pwtitle from "../components/PercentWetted/PwTitle/Pw_area";
import Pstitle from "../components/PercentShaded/PsTitle/Ps_area";
import TitlePercentShaded from "../components/Titles/Titles_percent_shaded/Title_PercenteShaded";
import PercenteShadedInputs from "../components/Inputs/PsAndPw_inputs";
import StripModalRender from "../components/PercentShaded/PsModals/strip_projection";
import CanopyModalRender from "../components/PercentShaded/PsModals/canopy_projection";
import RadiusModalRender from "../components/PercentWetted/PwModals/radius_wetted";
import PwTreeModalRender from "../components/PercentWetted/PwModals/tree_wetted";
import PwStripModalRender from "../components/PercentWetted/PwModals/strip_wetted";
import IrrigationSystemDesignService from "../services/irrigation_system_design_backend";
import { createCanopyComponentOverrides } from "../components/PercentShaded/PsCalculate/CanopyCalculation";
import { createStripComponentOverrides } from "../components/PercentShaded/PsCalculate/StripCalculation";
import { createRadiusComponentOverrides } from "../components/PercentWetted/PwCalculate/PwRadiusCalculation";
import { createStripPwComponentOverrides } from "../components/PercentWetted/PwCalculate/PwStripCalculation";
import { createTreeComponentOverrides } from "../components/PercentWetted/PwCalculate/PwTreeCalculation";
import { Container } from "react-bootstrap";
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
  const [validationError, setValidationError] = useState("");
  const [showModalPsStrip, setShowModalPsStrip] = useState(false);
  const [ss, setSs] = useState("");
  const [resultPs, setResultPs] = useState(null);
  const [showModalPwRadius, setShowModalPwRadius] = useState(false);
  const [q, setQ] = useState("");
  const [k0, setK0] = useState("");
  const [alpha, setAlpha] = useState("");
  const [resultPw, setResultPw] = useState(null);
  const [showModalPwStrip, setShowModalPwStrip] = useState(false);
  const [sw, setSw] = useState("");
  const [showModalPwTree, setShowModalPwTree] = useState(false);
  const [np, setNp] = useState("");
  const [z, setZ] = useState("");
  const [inputValuePs, setInputValuePs] = useState("");
  const [inputValuePw, setInputValuePw] = useState("");
  const [isInputPsDisabled, setIsInputPsDisabled] = useState(false);
  const [isInputPwDisabled, setIsInputPwDisabled] = useState(false);
  const shouldHideCards = isInputPsDisabled || isInputPwDisabled;
  const shouldHideAllCards = isInputPsDisabled && isInputPwDisabled;
  const shouldHideCardsPs = !isInputPsDisabled;
  const shouldHideCardsPw = !isInputPwDisabled;

  const CanopyComponentOverrides = createCanopyComponentOverrides({
    sr,
    sp,
    dco,
    setSr,
    setSp,
    setDco,
    setValidationError,
    setLoadingCalculate,
    setResultPs,
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
    setResultPs,
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
    setResultPw,
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
    setResultPw,
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
    setResultPw,
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
        resultPs={resultPs}
        resultPw={resultPw}
        setResultPs={setResultPs}
        setResultPw={setResultPw}
        inputValuePs={inputValuePs}
        inputValuePw={inputValuePw}
        isInputPsDisabled={isInputPsDisabled}
        isInputPwDisabled={isInputPwDisabled}
        setInputValuePs={setInputValuePs}
        setInputValuePw={setInputValuePw}
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

      {!shouldHideAllCards && (
        <>
          <Container style={{ maxWidth: 660, height: 280 }}>
            <div class="row">
              {!shouldHideCards && (
                <>
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <div
                      class="card"
                      style={{ height: 200, marginLeft: 20, marginRight: 20 }}
                    >
                      <div class="card-body">
                        <div class="card-title">
                          <Pstitle />
                        </div>
                        <CanopyModalRender
                          showModalCanopy={showModalCanopy}
                          toggleModalCanopy={toggleModalCanopy}
                          sr={sr}
                          sp={sp}
                          dco={dco}
                          setSr={setSr}
                          setSp={setSp}
                          setDco={setDco}
                          resultPs={resultPs}
                          validationError={validationError}
                          loadingCalculate={loadingCalculate}
                          CanopyComponentOverrides={CanopyComponentOverrides}
                        />
                        <StripModalRender
                          toggleModalStrip={toggleModalStrip}
                          sr={sr}
                          ss={ss}
                          setSr={setSr}
                          setSs={setSs}
                          showModalPsStrip={showModalPsStrip}
                          setShowModalPsStrip={setShowModalPsStrip}
                          resultPs={resultPs}
                          validationError={validationError}
                          loadingCalculate={loadingCalculate}
                          StripComponentOverrides={StripComponentOverrides}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div
                      class="card"
                      style={{
                        height: 200,
                        marginLeft: 20,
                        marginRight: 20,
                      }}
                    >
                      <div class="card-body">
                        <div class="card-title">
                          <Pwtitle />
                        </div>
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
                          resultPw={resultPw}
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
                          resultPw={resultPw}
                          validationError={validationError}
                          loadingCalculate={loadingCalculate}
                          StripPwComponentOverrides={StripPwComponentOverrides}
                        />
                        <RadiusModalRender
                          showModalPwRadius={showModalPwRadius}
                          toggleModalRadius={toggleModalRadius}
                          q={q}
                          k0={k0}
                          alpha={alpha}
                          resultPw={resultPw}
                          validationError={validationError}
                          loadingCalculate={loadingCalculate}
                          RadiusComponentOverrides={RadiusComponentOverrides}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
              {!shouldHideCardsPw && (
                <>
                  {" "}
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <div
                      class="card"
                      style={{
                        width: 600,
                        marginLeft: 20,
                        marginRight: 20,
                        alignItems: "center",
                      }}
                    >
                      <div class="card-body">
                        <div class="card-title">
                          <Pstitle />
                        </div>{" "}
                        <CanopyModalRender
                          showModalCanopy={showModalCanopy}
                          toggleModalCanopy={toggleModalCanopy}
                          sr={sr}
                          sp={sp}
                          dco={dco}
                          setSr={setSr}
                          setSp={setSp}
                          setDco={setDco}
                          resultPs={resultPs}
                          validationError={validationError}
                          loadingCalculate={loadingCalculate}
                          CanopyComponentOverrides={CanopyComponentOverrides}
                        />
                        <StripModalRender
                          toggleModalStrip={toggleModalStrip}
                          sr={sr}
                          ss={ss}
                          setSr={setSr}
                          setSs={setSs}
                          showModalPsStrip={showModalPsStrip}
                          setShowModalPsStrip={setShowModalPsStrip}
                          resultPs={resultPs}
                          validationError={validationError}
                          loadingCalculate={loadingCalculate}
                          StripComponentOverrides={StripComponentOverrides}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
              {!shouldHideCardsPs && (
                <>
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <div
                      class="card"
                      style={{
                        width: 600,
                        marginLeft: 20,
                        marginRight: 20,
                        alignItems: "center",
                      }}
                    >
                      <div class="card-body">
                        <div class="card-title">
                          <Pwtitle />
                        </div>{" "}
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
                          resultPw={resultPw}
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
                          resultPw={resultPw}
                          validationError={validationError}
                          loadingCalculate={loadingCalculate}
                          StripPwComponentOverrides={StripPwComponentOverrides}
                        />
                        <RadiusModalRender
                          showModalPwRadius={showModalPwRadius}
                          toggleModalRadius={toggleModalRadius}
                          q={q}
                          k0={k0}
                          alpha={alpha}
                          resultPw={resultPw}
                          validationError={validationError}
                          loadingCalculate={loadingCalculate}
                          RadiusComponentOverrides={RadiusComponentOverrides}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </Container>
        </>
      )}
    </>
  );
}

export default PercenteShaded;
