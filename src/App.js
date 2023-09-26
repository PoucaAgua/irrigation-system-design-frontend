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
          <Route
            path="/CropCoefficient"
            element={<CropCoefficient user={user} signOut={() => signOut()} />}
          />
          <Route
            path="/Evapotranspiration"
            element={
              <Evapotranspiration user={user} signOut={() => signOut()} />
            }
          />
          <Route
            path="/IrrigationSystem"
            element={<IrrigationSystem user={user} signOut={() => signOut()} />}
          />
          <Route
            path="/PsAndPw"
            element={<PsAndPw user={user} signOut={() => signOut()} />}
          />
          <Route
            path="/SizeLines"
            element={<SizeLines user={user} signOut={() => signOut()} />}
          />
          <Route
            path="/Irrigation"
            element={<Irrigation user={user} signOut={() => signOut()} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default withAuthenticator(App);
