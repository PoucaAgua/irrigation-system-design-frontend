import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CropCoefficient from "./pages/Crop_Coefficient";
import Evapotranspiration from "./pages/Evapotranspiration";
import IrrigationSystem from "./pages/IrrigationSystemDesign";
import PsAndPw from "./pages/PsAndPw";
import SizeLines from "./pages/SizeLines";
import Irrigation from "./pages/Irrigation";
import IrrigationActual from "./pages/Irrigation_actual";
import IrrigationTotal from "./pages/Irrigation_total";
import Home from "./pages/Home";

function App({ user, signOut }) {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={<Home user={user} signOut={() => signOut()} />}
          />
          <Route path="/CropCoefficient" element={<CropCoefficient />} />
          <Route path="/Evapotranspiration" element={<Evapotranspiration />} />
          <Route path="/IrrigationSystem" element={<IrrigationSystem />} />
          <Route
            path="/PsAndPw"
            element={<PsAndPw user={user} signOut={() => signOut()} />}
          />
          <Route path="/SizeLines" element={<SizeLines />} />
          <Route
            path="/Irrigation"
            element={<Irrigation user={user} signOut={() => signOut()} />}
          />
          <Route
            path="/irrigation/actual_irrigation"
            element={<IrrigationActual user={user} signOut={() => signOut()} />}
          />
          <Route
            path="/irrigation/total_irrigation"
            element={<IrrigationTotal user={user} signOut={() => signOut()} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default withAuthenticator(App);
