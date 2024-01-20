import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CropCoefficient from "./pages/Crop_Coefficient";
import Evapotranspiration from "./pages/Evapotranspiration";
import ReferenceEvapotranspiration from "./pages/ReferenceEvapotranspiration";
import CropEvapotranspiration from "./pages/CropEvapotranspiration";
import IrrigationSystem from "./pages/IrrigationSystem";
import PsAndPw from "./pages/PsAndPw";
import SizeLines from "./pages/SizeLines";
import Irrigation from "./pages/Irrigation";
import IrrigationActual from "./pages/Irrigation_actual";
import IrrigationTotal from "./pages/Irrigation_total";
import IrrigationShift from "./pages/Irrigation_shift";
import IrrigationTime from "./pages/Irrigation_time";
import Sizing from "./pages/Sizing";
import SizingDerivation from "./pages/Sizing_Derivation_line";
import SizingLateral from "./pages/Sizing_Lateral_line";
import Home from "./pages/Home";

import Header from "./components/Header";

function App({ user, signOut }) {
  return (
    <Router>
      <Header user={user} signOut={() => signOut()} />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CropCoefficient" element={<CropCoefficient />} />
          <Route path="/IrrigationSystem" element={<IrrigationSystem />} />
          <Route path="/Evapotranspiration" element={<Evapotranspiration />} />
          <Route
            path="/Evapotranspiration/ReferenceEvapotranspiration"
            element={<ReferenceEvapotranspiration />}
          />
          <Route
            path="/Evapotranspiration/CropEvapotranspiration"
            element={<CropEvapotranspiration />}
          />
          <Route path="/PsAndPw" element={<PsAndPw />} />
          <Route path="/SizeLines" element={<SizeLines />} />
          <Route path="/Irrigation" element={<Irrigation />} />
          <Route
            path="/irrigation/actual_irrigation"
            element={<IrrigationActual />}
          />
          <Route
            path="/irrigation/total_irrigation"
            element={<IrrigationTotal />}
          />
          <Route
            path="/irrigation/shift_irrigation"
            element={<IrrigationShift />}
          />
          <Route
            path="/irrigation/irrigation_time"
            element={<IrrigationTime />}
          />
          <Route
            path="/irrigation/irrigation_time"
            element={<IrrigationTime />}
          />
          <Route path="/Sizing" element={<Sizing />} />
          <Route
            path="/Sizing/derivation_line"
            element={<SizingDerivation />}
          />
          <Route path="/Sizing/lateral_line" element={<SizingLateral />} />
        </Routes>
      </div>
    </Router>
  );
}

export default withAuthenticator(App);
