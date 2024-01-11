import React from "react";
import CardShift from "../components/ShiftIrrigation/IrrigationShiftCards";

function Irrigation() {
  return (
    <>
      <h1 className="text-center" style={{ marginTop: 50 }}>
        Maximum irrigation shift
      </h1>
      <CardShift />
    </>
  );
}

export default Irrigation;
