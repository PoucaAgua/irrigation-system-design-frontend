import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { UserData } from "../../ui-components";
import IconWater from "../Icons/Icon_water";

//user, signOut
function Navbar() {
  return (
    <header className="p-3 mb-3 border-bottom bg-secondary">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <h4
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-white fs-4"
          >
            <IconWater />
            IrrigationSystem
          </h4>

          <div className="dropdown text-end ms-auto">
            <a
              href="#"
              className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="32"
                height="32"
                className="rounded-circle"
              />
            </a>
            <ul className="dropdown-menu text-small">
              <li>
                <a className="dropdown-item" href="#">
                  New project...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
