import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import SoilAndWaterDataInputs from "../SoilAndWaterData/SoilAndWaterDataInputs";
import SoilAndWaterDataTitle from "../SoilAndWaterData/SoilAndWaterDateTitle";
import ModalCEe from "../SoilAndWaterData/SoilAndWaterDateModals/ModalCEe/Index";
import ModalF from "../SoilAndWaterData/SoilAndWaterDateModals/ModalF";
//import TestComponent from "../TestComponent";
import SystemLayoutTitle from "../SystemLayout/SystemLayoutTitle";

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
  const [showContinueButton, setShowContinueButton] = useState(false);

  useEffect(() => {
    const allFieldsFilled =
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

    setShowContinueButton(allFieldsFilled);
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

  const [showNextComponentSystemLayout, setShowNextComponentSystemLayout] =
    useState(false);
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
    setShowContinueButton(false);
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
      {showContinueButton && (
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
          <SystemLayoutTitle />
        </>
      )}
    </>
  );
}

export default AgronomicModuleMain;
