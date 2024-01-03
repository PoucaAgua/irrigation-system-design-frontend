import React from "react";
import IrrgationCardActual from "../components/Actualirrigation/IrrigationActualCards";

function Irrigation() {
  return (
    <>
      <h1 className="text-center" style={{ marginTop: 50 }}>
        Actual Irrigation
      </h1>
      <IrrgationCardActual />
    </>
  );
}

export default Irrigation;
