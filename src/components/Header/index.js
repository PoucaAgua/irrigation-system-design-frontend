import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import IconWater from "../Icons/Icon_water";
import { Link } from "react-router-dom";

//user, signOut
function Header({ user, signOut }) {
  return (
    <header className="p-2 mb-3 border-bottom bg-secondary">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-white fs-4"
          >
            <IconWater />
            Pouca Água
          </Link>

          <div className="dropdown text-end ms-auto">
            <a
              href="0"
              className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={user?.attributes?.profile}
                alt="mdo"
                width="40"
                height="40"
                className="rounded-circle"
              />
            </a>

            <ul className="dropdown-menu text-small">
              <li>
                <a className="dropdown-item" href="0">
                  New project...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="0">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="0">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="0" onClick={signOut}>
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

export default Header;
