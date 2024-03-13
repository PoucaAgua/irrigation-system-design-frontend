import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import SoilAndWaterDataInputs from "../SoilAndWaterData/SoilAndWaterDataInputs";
import SoilAndWaterDataTitle from "../SoilAndWaterData/SoilAndWaterDateTitle";
import ModalCEe from "../SoilAndWaterData/SoilAndWaterDateModals/ModalCEe/Index";
import ModalF from "../SoilAndWaterData/SoilAndWaterDateModals/ModalF";
//import TestComponent from "../TestComponent";
import SystemLayoutTitle from "../SystemLayout/SystemLayoutTitle";
import SystemLayoutInputs from "../SystemLayout/SystemLayoutInputs";
import SystemLayoutModals from "../SystemLayout/SystemLayoutModals";
import { createCanopyComponentOverrides } from "../../PsAndPw/PercentShaded/PsCalculate/CanopyCalculation";
import { createStripComponentOverrides } from "../../PsAndPw/PercentShaded/PsCalculate/StripCalculation";
import { createRadiusComponentOverrides } from "../../PsAndPw/PercentWetted/PwCalculate/PwRadiusCalculation";
import { createStripPwComponentOverrides } from "../../PsAndPw/PercentWetted/PwCalculate/PwStripCalculation";
import { createTreeComponentOverrides } from "../../PsAndPw/PercentWetted/PwCalculate/PwTreeCalculation";

function AgronomicModuleMain() {
  const [soilCapacity, setSoilCapacity] = useState("");
  const [soilPermanent, setSoilPermanent] = useState("");
  const [soilConsumption, setSoilConsumption] = useState("");
  const [effectiveDepth, setEffectiveDepth] = useState("");
  const [electricalSaturation, setElectricalSaturation] = useState("");
  const [electricalIrrigation, setElectricalIrrigation] = useState("");
  const [group, setGroup] = useState("");
  const [crop, setCrop] = useState("");
  const [CEe, setCEe] = useState("");
  const [f, setF] = useState("");

  const [sl, setSl] = useState("");
  const [pw, setPw] = useState("");
  const [ps, setPs] = useState("");
  const [ue, setUe] = useState("");
  const [loadingCalculate, setLoadingCalculate] = useState(false);
  const [showModalCanopy, setShowModalCanopy] = useState(false);
  const [sr, setSr] = useState("");
  const [sp, setSp] = useState("");
  const [dco, setDco] = useState("");
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

  const [showContinueButtonSystemLayout, setShowContinueButtonSystemLayout] =
    useState(false);
  const [
    showContinueButtonEmitterSelection,
    setShowContinueButtonEmitterSelection,
  ] = useState(false);

  const [showNextComponentSystemLayout, setShowNextComponentSystemLayout] =
    useState(false);

  const CanopyComponentOverrides = createCanopyComponentOverrides({
    sr,
    sp,
    dco,
    setSr,
    setSp,
    setDco,
    setLoadingCalculate,
    setResultPs,
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
    setLoadingCalculate,
    setResultPs,
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
    setLoadingCalculate,
    setResultPw,
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
    setLoadingCalculate,
    setResultPw,
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
    setLoadingCalculate,
    setResultPw,
  });
  const toggleModalTree = () => {
    setShowModalPwTree(!showModalPwTree);
  };

  useEffect(() => {
    const allFieldsFilledSystemLayout =
      sr !== "" &&
      sp !== "" &&
      dco !== "" &&
      ss !== "" &&
      sl !== "" &&
      q !== "" &&
      k0 !== "" &&
      pw !== "" &&
      ps !== "" &&
      alpha !== "" &&
      np !== "" &&
      ue !== "" &&
      z !== "";

    setShowContinueButtonEmitterSelection(allFieldsFilledSystemLayout);
  }, [sr, sp, dco, ss, sl, q, k0, alpha, np, z, pw, ps, ue]);

  useEffect(() => {
    const allFieldsFilledSoilAndWaterDate =
      soilCapacity !== "" &&
      soilPermanent !== "" &&
      soilConsumption !== "" &&
      effectiveDepth !== "" &&
      electricalSaturation !== "" &&
      electricalIrrigation !== "" &&
      group !== "" &&
      crop !== "" &&
      CEe !== "" &&
      f !== "";

    setShowContinueButtonSystemLayout(allFieldsFilledSoilAndWaterDate);
  }, [
    soilCapacity,
    soilPermanent,
    soilConsumption,
    effectiveDepth,
    electricalSaturation,
    electricalIrrigation,
    group,
    crop,
    CEe,
    f,
  ]);

  const handleContinue = () => {
    setSoilCapacity("");
    setSoilPermanent("");
    setSoilConsumption("");
    setEffectiveDepth("");
    setElectricalSaturation("");
    setElectricalIrrigation("");
    setGroup("");
    setCrop("");
    setCEe("");
    setF("");
    setShowContinueButtonSystemLayout(false);
    setShowNextComponentSystemLayout(true);
  };

  return (
    <>
      {!showNextComponentSystemLayout && (
        <div className="container">
          <SoilAndWaterDataTitle />
          <SoilAndWaterDataInputs
            soilCapacity={soilCapacity}
            setSoilCapacity={setSoilCapacity}
            soilPermanent={soilPermanent}
            setSoilPermanent={setSoilPermanent}
            soilConsumption={soilConsumption}
            setSoilConsumption={setSoilConsumption}
            effectiveDepth={effectiveDepth}
            setEffectiveDepth={setEffectiveDepth}
            electricalSaturation={electricalSaturation}
            setElectricalSaturation={setElectricalSaturation}
            electricalIrrigation={electricalIrrigation}
            setElectricalIrrigation={setElectricalIrrigation}
          />
          <div
            className="text-center"
            style={{ alignItems: "center", marginTop: 15, marginBottom: 15 }}
          >
            <ModalCEe
              group={group}
              setGroup={setGroup}
              crop={crop}
              setCrop={setCrop}
              CEe={CEe}
              setCEe={setCEe}
            />
            <ModalF
              group={group}
              setGroup={setGroup}
              crop={crop}
              setCrop={setCrop}
              f={f}
              setF={setF}
            />
          </div>
        </div>
      )}
      {showContinueButtonSystemLayout && (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 15 }}
        >
          <Button
            onClick={handleContinue}
            style={{
              width: 220,
              height: 40,
            }}
            variant="secondary"
            className="text-center"
          >
            Continuar
          </Button>
        </div>
      )}
      {showNextComponentSystemLayout && (
        <>
          {" "}
          <div className="container">
            <SystemLayoutTitle />
            <SystemLayoutInputs
              sr={sr}
              setSr={setSr}
              sp={sp}
              setSp={setSp}
              sl={sl}
              setSl={setSl}
              pw={pw}
              setPw={setPw}
              ps={ps}
              setPs={setPs}
              ue={ue}
              setUe={setUe}
            />
            <SystemLayoutModals
              showModalCanopy={showModalCanopy}
              toggleModalCanopy={toggleModalCanopy}
              sr={sr}
              sp={sp}
              dco={dco}
              setSr={setSr}
              setSp={setSp}
              setDco={setDco}
              resultPs={resultPs}
              loadingCalculate={loadingCalculate}
              CanopyComponentOverrides={CanopyComponentOverrides}
              toggleModalStrip={toggleModalStrip}
              ss={ss}
              setSs={setSs}
              showModalPsStrip={showModalPsStrip}
              setShowModalPsStrip={setShowModalPsStrip}
              StripComponentOverrides={StripComponentOverrides}
              showModalPwTree={showModalPwTree}
              toggleModalTree={toggleModalTree}
              setNp={setNp}
              setZ={setZ}
              setQ={setQ}
              setK0={setK0}
              resultPw={resultPw}
              TreeComponentOverrides={TreeComponentOverrides}
              np={np}
              z={z}
              q={q}
              k0={k0}
              showModalPwStrip={showModalPwStrip}
              toggleModalPwStrip={toggleModalPwStrip}
              sw={sw}
              setSw={setSw}
              StripPwComponentOverrides={StripPwComponentOverrides}
              showModalPwRadius={showModalPwRadius}
              toggleModalRadius={toggleModalRadius}
              alpha={alpha}
              setAlpha={setAlpha}
              RadiusComponentOverrides={RadiusComponentOverrides}
            />
          </div>
        </>
      )}
      {showContinueButtonEmitterSelection && (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 15 }}
        >
          <Button
            onClick={handleContinue}
            style={{
              width: 220,
              height: 40,
            }}
            variant="secondary"
            className="text-center"
          >
            Continuar
          </Button>
        </div>
      )}
    </>
  );
}

export default AgronomicModuleMain;
