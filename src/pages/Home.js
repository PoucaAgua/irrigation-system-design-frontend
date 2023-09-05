import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>Home</div>
      <Link to="/CropCoefficient">CropCoefficient</Link>
      <Link to="/Evapotranspiration">Evapotranspiration</Link>
      <Link to="/IrrigationSystem">IrrigationSystem</Link>
      <Link to="/PercenteShaded">PercenteShaded</Link>
      <Link to="/SizeLines">SizeLines</Link>
      <Link to="/Irrigation">Irrigation</Link>
    </>
  );
}

export default Home;
