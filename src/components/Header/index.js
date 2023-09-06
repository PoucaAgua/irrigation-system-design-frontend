import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importe o CSS do Bootstrap
import "./style.css"; // Importe seu arquivo de estilo CSS personalizado
import { UserData } from "../../ui-components";

function Navbar({ user, signOut }) {
  return (
    <nav className="navbar bg-secondary">
      <div className="container-fluid">
        <h4 className="navbar-brand text-white">IrrigationSystem</h4>
        <div className="ml-auto">
          <div className="d-flex align-items-center text-white">
            <div className="mr-2">
              <i className="bi bi-person"></i> {/* Ícone de usuário */}
            </div>
            <div className="profile">
              <UserData
                overrides={{
                  image: {
                    src: user?.attributes?.profile,
                  },
                  Name: {
                    children: user?.attributes?.name,
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
