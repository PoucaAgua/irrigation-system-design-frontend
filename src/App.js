import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CropCoefficient from "./pages/Crop_Coefficient";
import Evapotranspiration from "./pages/Evapotranspiration";
import IrrigationSystem from "./pages/IrrigationSystemDesign";
import PercenteShaded from "./pages/PercenteShaded";
import SizeLines from "./pages/SizeLines";
import Irrigation from "./pages/Irrigation";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CropCoefficient" element={<CropCoefficient />} />
          <Route path="/Evapotranspiration" element={<Evapotranspiration />} />
          <Route path="/IrrigationSystem" element={<IrrigationSystem />} />
          <Route path="/PercenteShaded" element={<PercenteShaded />} />
          <Route path="/SizeLines" element={<SizeLines />} />
          <Route path="/Irrigation" element={<Irrigation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default withAuthenticator(App);
