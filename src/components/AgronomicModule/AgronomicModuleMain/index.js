import React, { useState } from "react";
import SoilAndWaterDataInputs from "../SoilAndWaterDataInputs";
import SoilAndWaterDataTitle from "../SoildAndWaterDateTitle";
import ModalCEe from "../SoilAndWaterDateModals/ModalCEe/Index";
import ModalF from "../SoilAndWaterDateModals/ModalF";

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

  return (
    <>
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
    </>
  );
}

export default AgronomicModuleMain;
